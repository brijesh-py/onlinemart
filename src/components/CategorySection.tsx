import Heading from "./common/Heading";
import CategoryCard from "./common/CategoryCard";

function CategorySection() {
  return (
    <section className="space-y-5">
      <Heading>Top Category</Heading>
      <div className="grid grid-cols-5 gap-5">
        <CategoryCard image="https://i.imgur.com/QkIa5tT.jpeg">
          Contemporary Wood Dining Chair
        </CategoryCard>
        <CategoryCard image="https://i.imgur.com/ZANVnHE.jpeg">
          Contemporary Wood Dining Chair
        </CategoryCard>
        <CategoryCard image="https://i.imgur.com/Qphac99.jpeg">
          Contemporary Wood Dining Chair
        </CategoryCard>
        <CategoryCard image="https://i.imgur.com/qNOjJje.jpeg">
          Contemporary Wood Dining Chair
        </CategoryCard>
        <CategoryCard image="https://i.imgur.com/BG8J0Fj.jpg">
          Contemporary Wood Dining Chair
        </CategoryCard>
      </div>
    </section>
  );
}
export default CategorySection;
