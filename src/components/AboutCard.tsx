import MaxwidthWrapper from "./MaxwidthWrapper";

export default function AboutCard({
  title,
  descriptions,
  className,
  index,
}: {
  title: string;
  descriptions: string[];
  index: number;
  className?: string;
}) {
  return (
    <MaxwidthWrapper className={`px-0 ${className}`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 items-center">
        <div
          className={`w-full h-[300px] lg:h-full bg-cover bg-center bg-no-repeat md:rounded-t-lg 
          lg:col-span-2 ${
            index === 1
              ? "lg:rounded-l-lg lg:rounded-r-none"
              : "lg:rounded-r-lg lg:rounded-l-none lg:order-last"
          } ${
            title === "World-class talent"
              ? "bg-mobile-about-image-world-class-talent md:bg-tablet-about-image-world-class-talent lg:bg-desktop-about-image-world-class-talent"
              : "bg-mobile-about-image-real-deal md:bg-tablet-about-image-real-deal lg:bg-desktop-about-image-real-deal"
          }`}
        ></div>

        <div
          className={`w-full flex flex-col items-center text-center gap-y-6 py-20 px-4 bg-lightestpeach
        md:rounded-b-lg lg:items-start lg:text-left lg:px-20 lg:py-28 lg:col-span-3
        bg-three-circles-pattern bg-center bg-contain
        ${
          index === 1
            ? "lg:rounded-r-lg lg:rounded-l-none"
            : "lg:rounded-l-lg lg:rounded-r-none"
        }`}
        >
          <h3 className="text-2xl md:text-3xl font-medium tracking-wider text-peach group-hover:text-white">
            {title}
          </h3>
          {descriptions.map((description) => (
            <p
              className="text-sm md:text-base max-w-prose tracking-normal leading-6 group-hover:text-white xl:text-lg"
              key={description}
            >
              {description}
            </p>
          ))}
        </div>
      </div>
    </MaxwidthWrapper>
  );
}
