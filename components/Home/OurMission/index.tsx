"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <div className="relative">
      <div className="container mx-auto text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="font-normal mb-4 text-themeBlue bg-themeBlue/5 hover:bg-themeBlue/10 transition-all duration-300">
            Polymor Mission
          </Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-[700px] mx-auto"
        >
          Accelerate intelligence distribution by democratizing accessible,
          pervasive, and affordable intelligence.
        </motion.p>
      </div>
    </div>
  );
}
