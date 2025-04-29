"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Globe from "@/components/Globe";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative sm:px-6 container mx-auto min-h-[600px] sm:min-h-[700px] flex flex-col-reverse md:flex-row mt-[76px] sm:mt-10 md:pb-20">
      {/* Content on the left */}
      <div className="relative z-[30] px-4 pt-[25px] md:pt-[0px] flex flex-col justify-center items-center md:items-start text-center md:text-left md:pb-20 md:w-1/2 mt-8 sm:mt-12 bg-black md:bg-transparent">
        <Badge className="font-normal mb-4 sm:mb-6 text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
          Polymor
        </Badge>

        <h1 className="text-3xl leading-[120%] sm:text-4xl md:text-5xl text-center md:text-left">
          Accelerating Intelligence Distribution
        </h1>

        <p className="max-w-[600px] mb-6 sm:mb-10 text-base sm:text-lg px-4 sm:px-0">
          We aim to accelerate intelligence distribution across the globe by
          building the world's first intelligent edge AI nervous system—a
          decentralized network of high-performance nodes optimized for
          ultra-low-latency inference.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
          <Button
            asChild
            className="rounded-none px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base bg-themeBlue text-black hover:bg-themeBlue/90 font-medium w-full sm:w-auto"
          >
            <Link href="/partners">Join Our Network</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-none px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base border-white/20 hover:bg-white/5 font-medium w-full sm:w-auto"
          >
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      </div>

      {/* Globe on the right */}
      <div className="relative md:w-1/2 h-[400px] sm:h-[500px] md:h-[750px]">
        <div className="absolute inset-0 z-0">
          <Globe />
        </div>
      </div>
    </div>
  );
}
