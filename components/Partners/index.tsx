"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Server, Coins, Settings, LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const cardHoverVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
    },
  },
};

const iconHoverVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
};

interface Benefit {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    Icon: Brain,
    title: "AI Workloads Delivered to You",
    description:
      "Tap into growing AI demand — without building a brand, a sales team, or a cloud platform.",
  },
  {
    Icon: Server,
    title: "Plug-and-Play Edge Deployment",
    description:
      "Deploy Polypods in as little as 7 days, with prefabricated, AI-optimized modules.",
  },
  {
    Icon: Coins,
    title: "Usage-Based Earnings",
    description:
      "Revenue scales with your node's performance — GPU utilization = payouts.",
  },
  {
    Icon: Settings,
    title: "Zero Operational Overhead",
    description:
      "Polymor manages orchestration, SLAs, client onboarding, billing, and compliance.",
  },
];

export default function PartnersPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <Badge className="font-normal mb-6 text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
          Polynode Partners
        </Badge>
        <h1 className="text-5xl font-bold mb-6">Join Our Global Network</h1>
        <p className="max-w-[800px] mx-auto text-lg text-white/70">
          At Polymor, we are building a decentralized network of
          high-performance edge AI data centers—powered by global partners. Our
          partner program offers a unique opportunity to participate in the AI
          infrastructure economy by deploying compute nodes and earning revenue
          from global AI workload demand.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative h-[400px] w-full">
          <Image
            src="/polypod-cloud.png"
            alt="Partners Network"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Polycloud doesn't just connect nodes.
            <br />
            It thinks. It routes. It optimizes.
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-themeBlue text-xl">•</span>
              <p className="text-white/70">
                Dynamically matches inference jobs to your available GPUs.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-themeBlue text-xl">•</span>
              <p className="text-white/70">
                Prioritizes low-latency delivery and SLA precision.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-themeBlue text-xl">•</span>
              <p className="text-white/70">
                Maximizes your node's earning potential through real-time
                optimization.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-themeBlue text-xl">•</span>
              <p className="text-white/70">
                As more nodes join the grid, the network becomes smarter,
                faster, more profitable — for everyone.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Become a Polycloud Edge Partner?
        </h2>
        <div className="space-y-8 max-w-6xl mx-auto relative">
          {/* Central pole */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-themeBlue transform -translate-x-1/2 shadow-lg rounded-none" />

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } relative`}
            >
              {/* Sign post and connector */}
              <div
                className={`absolute top-1/2 ${
                  index % 2 === 0
                    ? "left-[calc(50%+0.25rem)]"
                    : "right-[calc(50%+0.25rem)]"
                } transform -translate-y-1/2`}
              >
                <div
                  className={`h-[1px] w-48 bg-themeBlue ${
                    index % 2 === 0 ? "rounded-none" : "rounded-none"
                  }`}
                />
                <div
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? "right-0" : "left-0"
                  } w-[1px] h-8 bg-themeBlue transform -translate-y-1/2`}
                />
              </div>

              <motion.div whileHover="hover" variants={cardHoverVariants}>
                <Card className="rounded-none border-2 border-white/10 bg-gradient-to-br from-themeBlue/5 to-themeBlue/10 backdrop-blur-sm overflow-hidden w-full max-w-md relative z-10 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <motion.div
                        variants={iconHoverVariants}
                        whileHover="hover"
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-themeBlue/20 to-themeBlue/10 flex items-center justify-center flex-shrink-0"
                      >
                        {benefit.Icon && (
                          <benefit.Icon size={32} className="text-themeBlue" />
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-white">
                          {benefit.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Host the Future. Get Paid to Accelerate It.
        </h2>
        <Button
          asChild
          className="rounded-none px-8 h-12 text-base bg-themeBlue text-black hover:bg-themeBlue/90 font-medium"
        >
          <Link href="/contact">Join our global network now!</Link>
        </Button>
      </div>
    </div>
  );
}
