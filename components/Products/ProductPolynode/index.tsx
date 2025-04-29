import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle2, Server, Box, Settings, Cloud } from "lucide-react";

const steps = [
  {
    title: "Deploy",
    description:
      "Install Polypod containers in edge locations with high-speed connectivity, power redundancy and efficient liquid cooling.",
    icon: Server,
  },
  {
    title: "Container Setup",
    description:
      "Deploy AI model-optimized containers, optimize for speed (quantization, pruning, acceleration), and enable distributed multi-region deployment.",
    icon: Box,
  },
  {
    title: "Manage & Scale",
    description:
      "AI-driven scheduling and autoscaling, intelligent routing & failover, real-time monitoring, observability, and cost optimization.",
    icon: Settings,
  },
];

export default function ProductPolynode() {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-3">
          <Badge className="font-normal text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
            Distributed Edge AI Cloud Network
          </Badge>
          <h2 className="text-5xl font-bold leading-tight">Polynode™</h2>
          <p className="text-lg text-white/70 max-w-xl">
            Join our mission to turn global edge compute into a distributed AI
            network.
          </p>
        </div>
        <div className="relative h-[400px] w-full">
          <Image
            src="/polypod-cloud.png"
            alt="Polynode"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold mb-12 text-center">
          Step-by-Step
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-8">
                <div className="w-20 h-20 mb-8 relative group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-themeBlue" />
                </div>
                <h4 className="text-2xl font-semibold mb-4">{step.title}</h4>
                <p className="text-white/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-themeBlue/5 via-themeBlue/10 to-transparent p-12 border border-white/10 rounded-none">
        <h3 className="text-3xl font-semibold mb-8">
          Polycloud doesn't just connect nodes. It thinks. It routes. It
          optimizes.
        </h3>
        <ul className="space-y-6 text-white/70">
          <li className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-themeBlue flex-shrink-0 mt-1" />
            <p className="text-lg">
              Dynamically matches inference jobs to your available GPUs.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-themeBlue flex-shrink-0 mt-1" />
            <p className="text-lg">
              Prioritizes low-latency delivery and SLA precision.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-themeBlue flex-shrink-0 mt-1" />
            <p className="text-lg">
              Maximizes your node's earning potential through real-time
              optimization.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-themeBlue flex-shrink-0 mt-1" />
            <p className="text-lg">
              As more nodes join the grid, the network becomes smarter, faster,
              more profitable — for everyone.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
