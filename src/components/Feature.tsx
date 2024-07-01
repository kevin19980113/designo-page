import Image from "next/image";
import circlePattern from "../../public/assets/shared/desktop/bg-pattern-small-circle.svg";

export default function Feature({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="w-full flex flex-col md:flex-row lg:flex-col gap-x-16 gap-y-6 items-center justify-center text-darkgrey mb-12">
      <div className="relative size-44 md:size-56">
        <Image
          src={circlePattern}
          alt="circle pattern"
          fill
          className="absolute top-0 left-0 mx-auto -z-10"
        />
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <div className="flex flex-col items-center md:items-start gap-y-4 lg:items-center text-center md:text-left lg:text-center">
        <h3 className="text-xl font-medium tracking-widest xl:text-2xl">
          {title}
        </h3>
        <p className="text-sm tracking-wide leading-6 max-w-72 md:max-w-prose xl:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
