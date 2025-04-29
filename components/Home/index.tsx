import HeroSection from "./HeroSection";
import OurMission from "./OurMission";
import HowItWorks from "./HowItWorks";
import ProductsHighlight from "./ProductsHighlight";
import ProductsOverview from "./ProductsOverview";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <hr />
      <OurMission />
      <hr />
      <HowItWorks />
      <hr />
      <ProductsOverview />
      <hr />
      <ProductsHighlight />
    </div>
  );
}
