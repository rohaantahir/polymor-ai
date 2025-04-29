"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    title: "Polynode",
    description: "Distributed Edge AI Cloud Network",
    image: "/polypod-cloud.png",
    link: "/products#polynode",
  },
  {
    title: "Polypod",
    description: "Ultra High Density AI Optimized Data Center Pod",
    image: "/polypod.png",
    link: "/products#polypod",
  },
  {
    title: "Polyrack",
    description: "High-Energy Density, Liquid-Cooled Server Rack",
    image: "/polyrack.png",
    link: "/products#polyrack",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProductsHighlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollContainer = container.querySelector(".overflow-x-auto");
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.clientWidth;
    const scrollPosition = index * cardWidth;

    scrollContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollContainer = container.querySelector(".overflow-x-auto");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      if (
        scrollTop > containerTop - windowHeight / 2 &&
        scrollTop < containerTop + containerHeight
      ) {
        const progress =
          (scrollTop - (containerTop - windowHeight / 2)) /
          (containerHeight - windowHeight / 2);
        const scrollWidth =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        scrollContainer.scrollLeft = progress * scrollWidth;

        // Update active dot based on scroll position
        const newIndex = Math.round(progress * (products.length - 1));
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative max-w-[1920px] mx-auto">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-themeBlue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-themeBlue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto py-24 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="font-normal mb-6 text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15 mx-auto block w-fit">
              Our Products
            </Badge>
            <h2 className="text-center mb-16 text-4xl font-bold">
              From Edge to Cloud, We Build the AI Infrastructure
            </h2>
          </motion.div>

          <div className="relative w-full overflow-hidden" ref={containerRef}>
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-themeBlue/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-themePurple/5 rounded-full blur-3xl" />
            </div>

            <div className="flex gap-8 px-8 py-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex-none w-[90vw] md:w-[60vw] lg:w-[40vw] snap-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="rounded-none border-2 border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden relative group">
                    <CardContent className="p-0">
                      <div className="relative h-80 w-full">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-3xl font-semibold mb-2 text-white">
                            {product.title}
                          </h3>
                          <p className="text-white/80 mb-4">
                            {product.description}
                          </p>
                          <Link
                            href={product.link}
                            className="inline-flex items-center text-themeBlue hover:text-themeBlue/80 transition-colors"
                          >
                            Learn more
                            <svg
                              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Scroll indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-themeBlue w-8"
                      : "bg-gray-500/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Button
              asChild
              className="rounded-none px-8 h-12 text-base bg-themeBlue text-black hover:bg-themeBlue/90 font-medium"
            >
              <Link href="/products">View All Products</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
