import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function OurMission() {
  return (
    <div className="relative">
      <div className="container mx-auto text-center py-20">
        <Badge className="font-normal mb-4 text-themeBlue bg-themeBlue/5 hover:bg-themeBlue/10 transition-all duration-300">
          Polymor Mission
        </Badge>
        <h2 className="mb-4">Our Mission</h2>
        <p className="max-w-[700px] mx-auto">
          Accelerate intelligence distribution by democratizing accessible,
          pervasive, and affordable intelligence.
        </p>
      </div>
    </div>
  );
}
