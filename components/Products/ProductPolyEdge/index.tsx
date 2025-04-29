import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Server, Cpu, Network, Database, Zap } from "lucide-react";

const features = [
  {
    title: "Seamless Model Hosting",
    description: "Deploy and manage AI models at optimal edge locations",
    icon: Server,
  },
  {
    title: "Universal Inference Access",
    description: "Standardized endpoints for frictionless AI integration",
    icon: Cpu,
  },
  {
    title: "Intelligent Request Routing",
    description: "Dynamic load balancing for optimal performance",
    icon: Network,
  },
  {
    title: "Real-time Data Streaming",
    description: "Persistent connections for continuous intelligence",
    icon: Database,
  },
  {
    title: "Ultra-low Latency Results",
    description: "Immediate delivery of inference outputs",
    icon: Zap,
  },
];

export default function ProductPolyEdge() {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-3">
          <Badge className="font-normal text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
            The Global AI Orchestration Network
          </Badge>
          <h2 className="text-5xl font-bold leading-tight">PolyEdge™</h2>
          <p className="text-lg text-white/70 max-w-xl">
            Powering the Next Generation of Autonomous and agentic systems
          </p>
        </div>
        <div className="relative h-[400px] w-full">
          <Image
            src="/polyedge.png"
            alt="PolyEdge Network Diagram"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold mb-12 text-center">
          Core Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-6 relative group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-themeBlue" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-themeBlue/5 via-themeBlue/10 to-transparent p-12 border border-white/10 rounded-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold mb-8">
              Global Routing & Inference Network
            </h3>
            <p className="text-lg text-white/70">
              Our distributed network intelligently orchestrates AI workloads
              across global edge locations, ensuring optimal performance,
              reliability, and cost-efficiency.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Server className="w-5 h-5 text-themeBlue" />
                <span>Distributed edge compute network</span>
              </li>
              <li className="flex items-center gap-3">
                <Network className="w-5 h-5 text-themeBlue" />
                <span>Smart request routing and load balancing</span>
              </li>
              <li className="flex items-center gap-3">
                <Database className="w-5 h-5 text-themeBlue" />
                <span>Real-time data processing and streaming</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-themeBlue" />
                <span>Ultra-low latency inference delivery</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/polyedge.png"
              alt="Global Network"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
