import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import PartnersPage from "@/components/Partners";

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <PartnersPage />
      </main>
      <Footer />
    </div>
  );
}
