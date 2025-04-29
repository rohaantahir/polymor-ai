import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function OurMission() {
  return (
    <div className="relative mt-20">
      <div className="container mx-auto text-center pb-20 pt-10">
        <Badge className="font-normal mb-4 text-themeBlue bg-themeBlue/5 hover:bg-themeBlue/10 transition-all duration-300">
          Polymor Mission
        </Badge>
        <h2 className="mb-4">Our Mission</h2>
        <p className="max-w-[700px] mx-auto">
          We aim to accelerate intelligence distribution across the globe by
          building a strong and synergetic ecosystem of AI DC, energy, cloud and
          finance solutions to democratize accessible, pervasive, and affordable
          intelligence.
        </p>
      </div>
    </div>
  );
}
