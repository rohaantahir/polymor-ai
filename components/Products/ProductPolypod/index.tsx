import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Server, Snowflake, Zap, Boxes } from "lucide-react";

const polypodVariants = [
  {
    id: "polypod",
    title: "Polypod™",
    subtitle: "Ultra High Density AI Optimized Data Center Pod",
    features: [
      "Supports 8–12 high-density 47U racks per container",
      "60–140kW per rack, with 4x NVIDIA H200 or similar AI servers",
      "Liquid cooling (Direct-to-Chip or Cold Plate)",
      "N+1 or 2N redundant power and cooling infrastructure",
      "AI-ready and easily deployable",
    ],
    // image: "/polypod.png",
  },
  {
    id: "polypod-hive",
    title: "PolyPod Hive™",
    subtitle: "Scalable, Prefabricated Modular AI Data Centers",
    features: [
      "Stack multiple pods (up to 15) to build 20MW edge AI clusters",
      "Rapid deployment: assembly in 3 weeks, testing in 1",
      "80% faster time to deployment, 30% cost savings",
      "PUE < 1.1 with advanced liquid cooling",
      "Ideal for telcos, ISPs, or regional AI edge nodes",
    ],
    image: "/polypod-hive.png",
  },
  {
    id: "polypod-go",
    title: "PolyPod Go™",
    subtitle: "Portable, Privately Hosted AI Edge Solution",
    features: [
      "2 AI containers + 1 diesel generator (500–1000kW)",
      "Perfect for private networks, military, or offline environments",
      "Pre-integrated for fast plug-and-play deployment",
      "Reliable performance with liquid cooling and battery backup",
    ],
    image: "/polypod-go.png",
  },
];

export default function ProductPolypod() {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-3">
          <Badge className="font-normal text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
            Build Edge AIDC like Legos
          </Badge>
          <h2 className="text-5xl font-bold leading-tight">Polypod</h2>
          <p className="text-lg text-white/70">
            Our design philosophy focuses on modularity, AI optimization, and
            compatibility with all major AI chips.
          </p>
        </div>
        <div className="relative h-[400px] w-full">
          <Image
            src="/polypod (1).png"
            alt="Polypod Concept"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <Tabs defaultValue="polypod">
        <TabsList className="grid grid-cols-3 mb-12">
          <TabsTrigger value="polypod">Polypod™</TabsTrigger>
          <TabsTrigger value="polypod-hive">PolyPod Hive™</TabsTrigger>
          <TabsTrigger value="polypod-go">PolyPod Go™</TabsTrigger>
        </TabsList>

        {polypodVariants.map((variant) => (
          <TabsContent key={variant.id} value={variant.id} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4">{variant.title}</h3>
                <p className="text-lg text-white/70 mb-6">{variant.subtitle}</p>
                <ul className="space-y-4">
                  {variant.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-themeBlue flex-shrink-0 mt-1" />
                      <p className="text-lg text-white/70">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {variant.image ? (
                <div className="relative h-[400px] w-full">
                  <Image
                    src={variant.image}
                    alt={variant.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : null}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-gradient-to-r from-themeBlue/5 via-themeBlue/10 to-transparent px-10 py-8 border border-white/10 rounded-none">
        <h3 className="text-3xl font-semibold mb-8">Optimized for AI Usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8">
              <div className="w-20 h-20 mb-8 relative group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Server className="w-12 h-12 text-themeBlue" />
              </div>
              <h4 className="text-2xl font-semibold mb-4">High Density</h4>
              <p className="text-white/70">
                Purpose-built for AI workloads with ultra-high density
                configurations supporting the latest AI accelerators.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8">
              <div className="w-20 h-20 mb-8 relative group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Snowflake className="w-12 h-12 text-themeBlue" />
              </div>
              <h4 className="text-2xl font-semibold mb-4">Efficient Cooling</h4>
              <p className="text-white/70">
                Advanced liquid cooling systems designed specifically for the
                thermal demands of AI hardware.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8">
              <div className="w-20 h-20 mb-8 relative group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Zap className="w-12 h-12 text-themeBlue" />
              </div>
              <h4 className="text-2xl font-semibold mb-4">Rapid Deployment</h4>
              <p className="text-white/70">
                Prefabricated, modular design allows for quick installation and
                scaling to meet growing AI compute demands.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
