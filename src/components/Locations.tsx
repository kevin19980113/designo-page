import Image from "next/image";
import MaxwidthWrapper from "./MaxwidthWrapper";
import circlePattern from "../../public/assets/shared/desktop/bg-pattern-small-circle.svg";
import { locations } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function Locations() {
  return (
    <MaxwidthWrapper className="my-32">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:px-20 items-center gap-y-16">
        {locations.map((location) => (
          <div
            className="flex flex-col items-center gap-y-5"
            key={location.name}
          >
            <div className="relative size-44 md:size-56">
              <Image
                src={circlePattern}
                alt="circle pattern"
                fill
                className="absolute top-0 left-0 mx-auto -z-10"
              />
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="tracking-widest">{location.name}</h3>
            <Link
              href="/locations"
              className={cn(buttonVariants(), "bg-peach hover:bg-lightpeach")}
            >
              SEE LOCATION
            </Link>
          </div>
        ))}
      </div>
    </MaxwidthWrapper>
  );
}
