"use client";

import { Badge } from "@/components/ui/badge";
import ProductPolyEdge from "./ProductPolyEdge";
import ProductPolypod from "./ProductPolypod";
import ProductPolyrack from "./ProductPolyrack";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-16"
      >
        <Badge className="font-normal mb-6 text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
          Our Products
        </Badge>
        <h1 className="text-5xl font-bold mb-6">Products</h1>
        <p className="max-w-[800px] mx-auto text-lg text-white/70">
          From modular data centers to high-performance racks and cloud
          orchestration, Polymor builds the infrastructure for AI to thrive
          everywhere.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-32"
      >
        <motion.section
          id="Polyedge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProductPolyEdge />
        </motion.section>

        <hr />

        <motion.section
          id="polypod"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProductPolypod />
        </motion.section>

        <hr />

        <motion.section
          id="polyrack"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProductPolyrack />
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
