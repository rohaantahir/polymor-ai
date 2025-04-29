import { Badge } from "@/components/ui/badge";
import ProductPolynode from "./ProductPolynode";
import ProductPolypod from "./ProductPolypod";
import ProductPolyrack from "./ProductPolyrack";

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <Badge className="font-normal mb-6 text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
          Our Products
        </Badge>
        <h1 className="text-5xl font-bold mb-6">Products</h1>
        <p className="max-w-[800px] mx-auto text-lg text-white/70">
          From modular data centers to high-performance racks and cloud
          orchestration, Polymor builds the infrastructure for AI to thrive
          everywhere.
        </p>
      </div>

      <div className="space-y-32">
        <section id="polynode">
          <ProductPolynode />
        </section>

        <hr />

        <section id="polypod">
          <ProductPolypod />
        </section>

        <hr />

        <section id="polyrack">
          <ProductPolyrack />
        </section>
      </div>
    </div>
  );
}
