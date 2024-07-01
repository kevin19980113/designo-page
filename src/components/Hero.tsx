import { buttonVariants } from "./ui/button";
import heroImg from "../../public/assets/home/desktop/image-hero-phone.png";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MaxwidthWrapper from "./MaxwidthWrapper";

export default function Hero() {
  return (
    <MaxwidthWrapper className="px-0">
      <div
        className="w-full bg-peach flex flex-col lg:flex-row items-center px-4 pt-16 relative overflow-hidden 
      max-w-screen-2xl md:rounded-lg lg:px-12 xl:px-24 xl:pt-24"
      >
        <div className="absolute bg-hero-bg-pattern sm:left-10 md:left-1/3 xl:left-1/2 inset-0 bg-no-repeat"></div>

        <div className="flex flex-col items-center lg:items-start gap-y-6 text-center lg:text-left">
          <h1 className="max-w-72 text-white text-2xl font-medium md:text-4xl xl:text-5xl md:max-w-96 xl:max-w-[500px] xl:leading-tight">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="max-w-64 text-white text-sm tracking-wide leading-6 md:max-w-prose lg:max-w-96 xl:text-base xl:max-w-[450px]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link
            className={cn(
              buttonVariants(),
              "bg-white text-black hover:bg-lightpeach hover:text-white mb-[230px] md:mb-[400px] lg:mb-20 px-8 z-10"
            )}
            href="/products/web-design"
          >
            LEARN MORE
          </Link>
        </div>

        <div
          className="absolute bottom-0 translate-y-44 md:translate-y-1/3 lg:translate-1/4 lg:translate-x-1/4
        flex-shrink-0 w-full"
        >
          <Image
            src={heroImg}
            alt="hero image"
            className="mx-auto w-[300px] md:w-[500px]"
          />
        </div>
      </div>
    </MaxwidthWrapper>
  );
}
