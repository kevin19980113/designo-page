import Image from "next/image";
import MaxwidthWrapper from "./MaxwidthWrapper";

export default function PageHeader({
  title,
  description,
  image = false,
}: {
  title: string;
  description: string;
  image?: boolean;
}) {
  return (
    <MaxwidthWrapper className="px-0">
      <div
        className={`relative w-full bg-peach flex flex-col  items-center mb-16 md:rounded-lg
        ${image ? "lg:flex-row-reverse" : ""}`}
      >
        {image && (
          <div
            className="w-full h-[300px] md:h-[400px] bg-mobile-about-hero md:bg-tablet-about-hero lg:bg-desktop-about-hero
        bg-no-repeat bg-cover bg-center md:rounded-t-lg lg:rounded-r-lg lg:rounded-l-none z-10"
          ></div>
        )}

        <div
          className={
            "absolute inset-0 bg-hero-bg-pattern md:bg-action-pattern md:bg-repeat bg-cover left-14 md:left-0"
          }
        ></div>

        <div
          className={`w-full flex flex-col items-center gap-y-6 text-white text-center px-4 py-12
        ${image ? "lg:items-start lg:text-left lg:px-20 lg:py-16" : ""}`}
        >
          <h1 className="text-3xl md:text-4xl font-medium xl:text-5xl">
            {title}
          </h1>
          <p className="text-sm md:text-base leading-6 tracking-wide max-w-prose xl:text-lg">
            {description}
          </p>
        </div>
      </div>
    </MaxwidthWrapper>
  );
}
