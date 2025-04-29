import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import ProductsPage from "@/components/Products";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <ProductsPage />
      </main>
      <Footer />
    </div>
  );
}
