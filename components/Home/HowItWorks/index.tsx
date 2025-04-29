"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CloudUpload, Network, Server, Coins } from "lucide-react";

const steps = [
  {
    title: "Deploy",
    description:
      "Host Polymor's modular, prefabricated AI compute container PolyPod on your site.",
    icon: CloudUpload,
  },
  {
    title: "Connect",
    description:
      "Container will automatically connect to PolyEdge after deployment — our serverless, AI-native orchestration platform.",
    icon: Network,
  },
  {
    title: "Receive",
    description:
      "PolyEdge sends AI Workloads to your node automatically — no sales, no client acquisition needed.",
    icon: Server,
  },
  {
    title: "Earn",
    description:
      "Recurring Revenue based on compute usage consumed by global enterprises and developers.",
    icon: Coins,
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

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative max-w-[1920px] mx-auto px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-themeBlue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-themeBlue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto py-24 relative overflow-hidden">
        {/* Background decorative elements */}

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="font-normal mb-6 text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15 mx-auto block w-fit">
              How It Works
            </Badge>
            <h2 className="text-center mb-16">
              Deploy a Node. Join the Network. Earn from the AI Boom.
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-6xl mx-auto relative">
            {/* Central pole */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-themeBlue transform -translate-x-1/2 shadow-lg rounded-none" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  ...itemVariants,
                  hover: cardHoverVariants.hover,
                }}
                whileHover="hover"
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

                <Card className="rounded-none border-2 border-white/10 bg-gradient-to-br from-themeBlue/5 to-themeBlue/10 backdrop-blur-sm overflow-hidden w-full max-w-md relative z-10 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-themeBlue/20 to-themeBlue/10 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <step.icon className="w-8 h-8 text-themeBlue" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-white">
                          {step.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
