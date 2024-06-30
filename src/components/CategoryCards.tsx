import { productCategories } from "@/lib/data";
import MaxwidthWrapper from "./MaxwidthWrapper";
import CategoryCard from "./CategoryCard";

export default function CategoryCards() {
  return (
    <MaxwidthWrapper>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-4 items-center gap-y-4 my-32">
        {productCategories.map((category, index) => (
          <CategoryCard
            title={category.title}
            slug={category.slug}
            key={category.title}
            gridSpan={index === 0 ? 2 : 1}
          />
        ))}
      </div>
    </MaxwidthWrapper>
  );
}
