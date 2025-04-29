import Home from "@/components/Home";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
