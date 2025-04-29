"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Define locations with coordinates
const locations = [
  { name: "San Francisco", lat: 37.6145, lng: -122.3945, color: "#4cc9f0" },
  { name: "London", lat: 51.5053, lng: -0.121, color: "#4cc9f0" },
  { name: "Memphis", lat: 35.1495, lng: -90.049, color: "#4cc9f0" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, color: "#4cc9f0" },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694, color: "#4cc9f0" },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, color: "#4cc9f0" },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, color: "#4cc9f0" },
  { name: "Berlin", lat: 52.52, lng: 13.405, color: "#4cc9f0" },
];

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const markersRef = useRef<THREE.Object3D[]>([]);
  const linesRef = useRef<THREE.Line[]>([]);
  const particleSystemsRef = useRef<
    {
      system: THREE.Points;
      positions: Float32Array;
      velocities: number[];
      startTime: number;
      duration: number;
      from: number[];
      to: number[];
    }[]
  >([]);
  const frameIdRef = useRef<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Adjust camera position based on screen size
    const cameraDistance = window.innerWidth < 768 ? 200 : 240;
    camera.position.z = cameraDistance;
    cameraRef.current = camera;

    // Initialize renderer with transparent background to remove white border
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for better performance
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = window.innerWidth < 768 ? 0.3 : 0.5; // Slower rotation on mobile
    controls.enableZoom = false;
    controls.minDistance = cameraDistance;
    controls.maxDistance = cameraDistance;
    controls.autoRotate = true;
    controls.autoRotateSpeed = window.innerWidth < 768 ? 0.3 : 0.5; // Slower auto-rotation on mobile

    // Create globe
    const radius = 100;
    const segments = 64;
    const globeGeometry = new THREE.SphereGeometry(radius, segments, segments);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = "anonymous";

    // Create a material with the world map texture
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: null,
      transparent: true,
      opacity: 0.9,
      shininess: 5,
    });

    // Create the globe mesh
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    globeRef.current = globe;

    // Load the world map texture with anisotropic filtering to improve quality
    textureLoader.load(
      "/world-map-texture.png",
      (texture) => {
        // Apply maximum anisotropic filtering to improve texture quality
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // Use mipmapping for better texture quality at different distances
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        // Ensure texture wrapping is set correctly
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        // Increase texture sharpness
        texture.generateMipmaps = true;

        if (globeRef.current) {
          // Apply the texture to the globe material
          (globeRef.current.material as THREE.MeshPhongMaterial).map = texture;
          // Increase material quality settings
          (globeRef.current.material as THREE.MeshPhongMaterial).shininess = 10;
          (globeRef.current.material as THREE.MeshPhongMaterial).needsUpdate =
            true;
          setIsLoading(false);
        }
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
        setIsLoading(false);
      }
    );

    // Add a glow effect
    const glowGeometry = new THREE.SphereGeometry(
      radius + 2,
      segments,
      segments
    );
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        c: { value: 0.2 },
        p: { value: 4.0 },
        glowColor: { value: new THREE.Color(0x4cc9f0) },
        viewVector: { value: new THREE.Vector3(0, 0, 1) },
      },
      vertexShader: `
        uniform vec3 viewVector;
        uniform float c;
        uniform float p;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normal);
          vec3 vNormel = normalize(viewVector);
          intensity = pow(c - dot(vNormal, vNormel), p);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, 1.0);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);

    // Convert lat/lng to 3D coordinates
    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      return new THREE.Vector3(x, y, z);
    };

    // Add location markers
    locations.forEach((location) => {
      const position = latLngToVector3(location.lat, location.lng, radius);

      // Create marker with improved appearance
      const markerSize = window.innerWidth < 768 ? 1.2 : 1.8;
      const markerGeometry = new THREE.SphereGeometry(markerSize, 32, 32);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(location.color),
        transparent: true,
        opacity: 0.9,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      scene.add(marker);
      markersRef.current.push(marker);

      // Add improved pulse effect
      const pulseGeometry = new THREE.SphereGeometry(markerSize, 32, 32);
      const pulseMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(location.color) },
          opacity: { value: 0.6 },
        },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          uniform float opacity;
          varying vec3 vNormal;
          void main() {
            float pulse = sin(time * 2.0) * 0.5 + 0.5;
            gl_FragColor = vec4(color, pulse * opacity);
          }
        `,
        transparent: true,
        side: THREE.FrontSide,
      });

      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
      pulse.position.copy(position);
      pulse.scale.set(1.5, 1.5, 1.5);
      scene.add(pulse);

      // Store the pulse with the marker
      marker.userData = { pulse, pulseMaterial };

      // Add text label with location info
      const textDiv = document.createElement("div");
      textDiv.className = "absolute text-white pointer-events-none";
      textDiv.style.color = location.color;
      textDiv.style.opacity = "0";
      textDiv.style.transition = "opacity 0.3s ease";
      textDiv.style.zIndex = "10"; // Ensure labels appear above other elements
      textDiv.style.position = "absolute"; // Ensure absolute positioning works correctly
      //       textDiv.innerHTML = `
      //   <div class="bg-black/80 px-2 py-1 rounded text-xs backdrop-blur-sm border border-${location.color.replace(
      //     "#",
      //     ""
      //   )} shadow-lg whitespace-nowrap">
      //     <div class="font-bold">${location.name}</div>
      //   </div>
      // `;
      // containerRef?.current?.appendChild(textDiv);

      // Position the text and handle visibility
      const updateLabelPosition = () => {
        if (!cameraRef.current) return;

        // Get the marker's position in world space
        const markerPosition = position.clone();

        // Project the marker position to screen coordinates
        const vector = markerPosition.clone().project(cameraRef.current);

        // Convert to screen coordinates
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

        // Position the label directly at the marker's projected position
        textDiv.style.left = `${x}px`;
        textDiv.style.top = `${y}px`;
        textDiv.style.transform = "translate(-50%, -100%)"; // Center horizontally and position above

        // Check if marker is visible to camera (in front of the globe)
        const dot = markerPosition
          .clone()
          .normalize()
          .dot(cameraRef.current.position.clone().normalize());
        const isVisible = dot < 0;

        // Only show labels for visible markers (those on the front side of the globe)
        marker.visible = !isVisible;
        pulse.visible = !isVisible;
        textDiv.style.opacity = isVisible ? "0" : "1";
      };

      // Store the update function
      marker.userData = { ...marker.userData, updateLabelPosition, textDiv };
    });

    // Create connections between locations - Ensure all locations have connections
    const connectedLocations = new Set<number>();

    // First pass: Only connect each location to its closest neighbor
    for (let i = 0; i < locations.length; i++) {
      // If this location is already connected, skip to next
      if (connectedLocations.has(i)) continue;

      // Find the closest location to connect to
      let closestIdx = -1;
      let closestDist = Number.POSITIVE_INFINITY;

      const startPosition = latLngToVector3(
        locations[i].lat,
        locations[i].lng,
        radius
      );

      for (let j = 0; j < locations.length; j++) {
        if (i === j) continue;

        const endPosition = latLngToVector3(
          locations[j].lat,
          locations[j].lng,
          radius
        );
        const dist = startPosition.distanceTo(endPosition);

        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = j;
        }
      }

      if (closestIdx >= 0) {
        // Create connection to closest location
        const endPosition = latLngToVector3(
          locations[closestIdx].lat,
          locations[closestIdx].lng,
          radius
        );
        createConnection(startPosition, endPosition);

        // Mark both locations as connected
        connectedLocations.add(i);
        connectedLocations.add(closestIdx);
      }
    }

    // Helper function to create a connection between two points
    function createConnection(
      startPosition: THREE.Vector3,
      endPosition: THREE.Vector3
    ) {
      const curvePoints = [];
      const startVec = startPosition.clone().normalize();
      const endVec = endPosition.clone().normalize();

      // Calculate the mid point
      const midVec = new THREE.Vector3()
        .addVectors(startVec, endVec)
        .normalize();

      // Reduce the height of the curve for a more subtle effect
      const midPoint = midVec.multiplyScalar(radius * 1.15);

      // Create a quadratic bezier curve with more points for smoother curves
      for (let t = 0; t <= 1; t += 0.01) {
        // Reduced number of points
        const point = new THREE.Vector3();
        // Quadratic bezier curve formula
        point.x =
          (1 - t) * (1 - t) * startPosition.x +
          2 * (1 - t) * t * midPoint.x +
          t * t * endPosition.x;
        point.y =
          (1 - t) * (1 - t) * startPosition.y +
          2 * (1 - t) * t * midPoint.y +
          t * t * endPosition.y;
        point.z =
          (1 - t) * (1 - t) * startPosition.z +
          2 * (1 - t) * t * midPoint.z +
          t * t * endPosition.z;
        curvePoints.push(point);
      }

      const curveGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );

      // Create a more subtle line material
      const curveMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color("#fff"),
        transparent: true,
        opacity: 0.4, // Reduced opacity
        linewidth: 1,
      });

      const curve = new THREE.Line(curveGeometry, curveMaterial);
      scene.add(curve);
      linesRef.current.push(curve);

      // Store the start and end positions for visibility check
      curve.userData = {
        startPosition: startPosition.clone(),
        endPosition: endPosition.clone(),
        midPoint: midPoint.clone(),
      };

      // Create particle system for this connection with reduced particles
      createParticleSystem(startPosition, endPosition, midPoint);
    }

    // Create particle system for animated connections
    function createParticleSystem(
      start: THREE.Vector3,
      end: THREE.Vector3,
      mid: THREE.Vector3
    ) {
      const particleCount = 15; // Reduced from 30 to 15
      const positions = new Float32Array(particleCount * 3);
      const velocities: number[] = [];
      const sizes = new Float32Array(particleCount);

      // Initialize particles at random positions along the curve
      for (let i = 0; i < particleCount; i++) {
        // Random position along the curve
        const t = Math.random();

        // Quadratic bezier curve formula
        const x =
          (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * mid.x + t * t * end.x;
        const y =
          (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * mid.y + t * t * end.y;
        const z =
          (1 - t) * (1 - t) * start.z + 2 * (1 - t) * t * mid.z + t * t * end.z;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Slower velocity
        velocities.push(0.003 + Math.random() * 0.005);

        // Smaller size
        sizes[i] = 0.3 + Math.random() * 0.7;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      // Create shader material for particles with reduced opacity
      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color("#4cc9f0") },
          pointTexture: {
            value: new THREE.TextureLoader().load("/geometric-blue-circle.png"),
          },
        },
        vertexShader: `
          attribute float size;
          varying vec3 vColor;
          void main() {
            vColor = vec3(0.3, 0.8, 0.95);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (200.0 / -mvPosition.z); // Reduced size
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform sampler2D pointTexture;
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(color, 0.6); // Reduced opacity
            gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
            if (gl_FragColor.a < 0.2) discard;
          }
        `,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
      });

      const particleSystem = new THREE.Points(geometry, material);
      scene.add(particleSystem);

      particleSystemsRef.current.push({
        system: particleSystem,
        positions,
        velocities,
        startTime: Date.now(),
        duration: 15000 + Math.random() * 5000, // Slower movement
        from: [start.x, start.y, start.z],
        to: [end.x, end.y, end.z],
      });
    }

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      // Update controls
      controls.update();

      // Update marker labels and pulse effects
      markersRef.current.forEach((marker) => {
        if (marker.userData) {
          if (marker.userData.updateLabelPosition) {
            marker.userData.updateLabelPosition();
          }

          if (marker.userData.pulseMaterial) {
            marker.userData.pulseMaterial.uniforms.time.value =
              Date.now() * 0.001;
          }
        }
      });

      // Update line visibility
      linesRef.current.forEach((line) => {
        if (line.userData && cameraRef.current) {
          const { startPosition, endPosition, midPoint } = line.userData;

          // Check if both endpoints are behind the globe
          const startDot = startPosition
            .clone()
            .normalize()
            .dot(cameraRef.current.position.clone().normalize());
          const endDot = endPosition
            .clone()
            .normalize()
            .dot(cameraRef.current.position.clone().normalize());
          const midDot = midPoint
            .clone()
            .normalize()
            .dot(cameraRef.current.position.clone().normalize());

          // Hide the line if all points are behind the globe
          line.visible = !(startDot < 0 && endDot < 0 && midDot < 0);
        }
      });

      // Update particle systems
      particleSystemsRef.current.forEach((ps) => {
        const positions = ps.positions;
        const elapsed = (Date.now() - ps.startTime) % ps.duration;
        const progress = elapsed / ps.duration;

        for (let i = 0; i < positions.length / 3; i++) {
          // Calculate individual particle progress
          const particleProgress = (progress + i / (positions.length / 3)) % 1;

          // Quadratic bezier curve formula
          const t = particleProgress;
          const start = new THREE.Vector3(ps.from[0], ps.from[1], ps.from[2]);
          const end = new THREE.Vector3(ps.to[0], ps.to[1], ps.to[2]);

          // Calculate mid point
          const startVec = start.clone().normalize();
          const endVec = end.clone().normalize();
          const midVec = new THREE.Vector3()
            .addVectors(startVec, endVec)
            .normalize()
            .multiplyScalar(radius * 1.3);

          // Update position along curve
          positions[i * 3] =
            (1 - t) * (1 - t) * start.x +
            2 * (1 - t) * t * midVec.x +
            t * t * end.x;
          positions[i * 3 + 1] =
            (1 - t) * (1 - t) * start.y +
            2 * (1 - t) * t * midVec.y +
            t * t * end.y;
          positions[i * 3 + 2] =
            (1 - t) * (1 - t) * start.z +
            2 * (1 - t) * t * midVec.z +
            t * t * end.z;
        }

        ps.system.geometry.attributes.position.needsUpdate = true;
      });

      // Update glow effect
      if (cameraRef.current) {
        const viewVector = new THREE.Vector3().subVectors(
          cameraRef.current.position,
          new THREE.Vector3(0, 0, 0)
        );

        scene.children.forEach((child) => {
          if (
            child instanceof THREE.Mesh &&
            child.material instanceof THREE.ShaderMaterial &&
            child.material.uniforms?.viewVector
          ) {
            child.material.uniforms.viewVector.value = viewVector;
          }
        });
      }

      // Render scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !containerRef.current)
        return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const newCameraDistance = width < 768 ? 200 : 240;
      cameraRef.current.position.z = newCameraDistance;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Update controls
      const controls = new OrbitControls(
        cameraRef.current,
        rendererRef.current.domElement
      );
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.rotateSpeed = width < 768 ? 0.3 : 0.5;
      controls.enableZoom = false;
      controls.minDistance = newCameraDistance;
      controls.maxDistance = newCameraDistance;
      controls.autoRotate = true;
      controls.autoRotateSpeed = width < 768 ? 0.3 : 0.5;
    };

    // Initial resize
    handleResize();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameIdRef.current);

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      // Remove text labels
      markersRef.current.forEach((marker) => {
        if (marker.userData && marker.userData.textDiv) {
          containerRef.current?.removeChild(marker.userData.textDiv);
        }
      });
    };
  }, []);

  return (
    <div className="relative w-full min-h-[700px] bg-background">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-white"></div>
        </div>
      )}
    </div>
  );
}
