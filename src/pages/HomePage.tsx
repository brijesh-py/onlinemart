import {
  CategorySection,
  HeroSection,
  LatestSection,
  ProductSection,
  PromotionBanner,
} from "../components";

function HomePage() {
  return (
    <div className="space-y-10  mb-10">
      <HeroSection />
      <div className="space-y-10 w-[80%] mx-auto ">
        <CategorySection />
        <ProductSection />
        <PromotionBanner />
        <LatestSection />
      </div>
    </div>
  );
}
export default HomePage;
