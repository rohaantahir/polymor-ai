import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Polypod() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="mb-7">Polypod&trade;</h2>
        <p className="text-sm">
          Ultra High Density AI Optimized Data Center Pod | 8-12 <br />
          racks per container | 60-140kW per Rack
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card className="p-0 rounded-none">
          <CardContent className="p-0 relative h-[300px]">
            <Image src="/products/polypod/1.png" alt="polypod" fill className="object-cover" />
          </CardContent>
        </Card>
        <Card className="p-0 rounded-none">
          <CardContent className="p-0 relative h-[300px]">
            <Image src="/products/polypod/2.png" alt="polypod" fill className="object-cover" />
          </CardContent>
        </Card>
        <Card className="p-0 rounded-none">
          <CardContent className="p-0 relative h-[300px]">
            <Image src="/products/polypod/3.png" alt="polypod" fill className="object-cover" />
          </CardContent>
        </Card>

        <Card className="rounded-none card-description border border-gray-700">
          <CardContent className="bg-transparent">
            <h3>Compute & Rack Configuration</h3>
            <ul>
              <li>47U high-density racks</li>
              <li>40kw to 140kw per rack density</li>
              <li>4x NVIDIA H200 or equivalent AI servers</li>
              <li>8-12 racks adjustable depending on layout</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-none card-description border border-gray-700">
          <CardContent className="bg-transparent">
            <h3>Power Infrastructure</h3>
            <ul>
              <li>638 PDUs per rack (270V DC, 63A each) or custom high-amp PDUs</li>
              <li>2703400V DC busway or 415V AC distribution</li>
              <li>Modular rectifiers or rack-level power shelves</li>
              <li>N+1 or 2N depending on tier level</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-none card-description border border-gray-700">
          <CardContent className="bg-transparent">
            <h3>Cooling Infrastructure</h3>
            <ul>
              <li>Liquid cooling (Direct-to-Chip / Cold Plate)</li>
              <li>IRAC ready, limited to f60kW racks</li>
              <li>2 x 6003800kW CDUs</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
