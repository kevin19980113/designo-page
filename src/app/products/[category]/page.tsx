import CategoryCard from "@/components/CategoryCard";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import PageHeader from "@/components/PageHeader";
import ProductReels from "@/components/ProductReels";
import { categoryProductsData } from "@/lib/data";
import { notFound } from "next/navigation";

export default function CategoryPage({
  params,
}: {
  params: {
    category: string;
  };
}) {
  const categoryData = categoryProductsData.find((category) => {
    return category.slug === params.category;
  });

  if (!categoryData) {
    notFound();
  }

  const otherCategories = categoryProductsData.filter((category) => {
    return category.slug !== params.category;
  });

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader
        title={categoryData.title}
        description={categoryData.description}
      />
      <MaxwidthWrapper>
        <div className="w-full flex flex-col items-center">
          <ProductReels products={categoryData.products} />

          <div className="w-full flex flex-col lg:flex-row lg:gap-x-8 items-center gap-y-6 mb-52">
            {otherCategories.map((category) => (
              <CategoryCard
                title={category.title.toUpperCase()}
                slug={`/${category.slug}`}
                key={category.title}
              />
            ))}
          </div>
        </div>
      </MaxwidthWrapper>
    </div>
  );
}
