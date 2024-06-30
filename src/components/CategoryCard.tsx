import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CategoryCard({
  title,
  slug,
  gridSpan = 1,
}: {
  title: string;
  slug: string;
  gridSpan?: number;
}) {
  return (
    <Link
      href={slug}
      key={title}
      className={`relative w-full py-20 md:py-16 lg:py-24 lg:h-full md:h-48 rounded-lg bg-no-repeat bg-center bg-cover group ${
        slug === "/web-design"
          ? "bg-web-mobile md:bg-web-tablet xl:bg-web-desktop"
          : slug === "/app-design"
          ? "bg-app-mobile md:bg-app-tablet xl:bg-app-desktop"
          : "bg-graphic-mobile md:bg-graphic-tablet xl:bg-graphic-desktop"
      }
      ${gridSpan === 2 ? "row-span-2" : "row-span-1"}`}
    >
      <div className="block group-hover:hidden bg-black/70 inset-0 absolute rounded-lg z-10"></div>
      <div className="bg-peach bg-opacity-60 absolute inset-0 hidden group-hover:block rounded-lg z-10"></div>

      <div className="h-full flex flex-col items-center justify-center gap-y-3 text-white z-20">
        <div className="text-xl md:text-3xl font-medium tracking-wider z-20">
          {title}
        </div>
        <div className="flex gap-x-2 items-center text-sm tracking-widest z-20">
          VIEW PROJECTS{" "}
          <ArrowRight className="size-4 text-orange-600 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </Link>
  );
}
