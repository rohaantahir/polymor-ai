import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PolypodFeatures() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <h2>Polypod Hive&trade;</h2>
      <Card className="p-0 rounded-none">
        <CardContent className="p-0 relative h-[300px]">
          <Image src="/products/polypod-features/1.png" alt="polypod features" fill className="object-cover" />
        </CardContent>
      </Card>
      <Card className="p-0 rounded-none">
        <CardContent className="p-0 relative h-[300px]">
          <Image src="/products/polypod-features/2.png" alt="polypod features" fill className="object-cover" />
        </CardContent>
      </Card>
      <Card className="p-0 rounded-none">
        <CardContent className="p-0 relative h-[300px]">
          <Image src="/products/polypod-features/3.png" alt="polypod features" fill className="object-cover" />
        </CardContent>
      </Card>

      <Card className="rounded-none card-description border border-gray-700">
        <CardContent className="bg-transparent">
          <h3>Modular & Prefabricated</h3>
          <p>
            Our prefabricated integrated container eliminates the hassle of custom design, planning, and construction
            for edge deployments.
          </p>
        </CardContent>
      </Card>
      <Card className="rounded-none card-description border border-gray-700">
        <CardContent className="bg-transparent">
          <h3>Scalable Flexibility</h3>
          <p>
            Easily stack multiple pods vertically or horizontally to aggregate compute power as needed. Rapidly deploy
            globally, ready to go.
          </p>
        </CardContent>
      </Card>
      <Card className="rounded-none card-description border border-gray-700">
        <CardContent className="bg-transparent">
          <h3>Edge AI Acceleration</h3>
          <p>
            Optimized for AI inference workloads, delivering ultra- low-latency edge computing for mission-critical AI
            applications.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
