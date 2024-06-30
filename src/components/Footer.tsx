import Image from "next/image";
import MaxwidthWrapper from "./MaxwidthWrapper";
import { buttonVariants } from "./ui/button";
import logoImg from "../../public/assets/shared/desktop/logo-light.png";
import Link from "next/link";
import { menuCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-12 relative">
      <MaxwidthWrapper className="absolute top-0 -translate-y-1/2 -translate-x-1/2 left-1/2 z-20">
        <div
          className="relative bg-peach flex flex-col lg:flex-row lg:justify-between items-center gap-y-6 rounded-lg px-4 
          lg:px-20 py-14 text-white w-full bg-[url('/assets/shared/desktop/bg-pattern-three-circles.svg')] bg-repeat"
        >
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-y-6">
            <div className="text-3xl md:text-4xl font-medium max-w-52 md:max-w-64 tracking-wide">
              Let&apos;s talk about your project
            </div>
            <p className="text-base max-w-96">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Link
            className={cn(
              buttonVariants(),
              "bg-white text-black hover:bg-lightpeach hover:text-white z-20"
            )}
            href="/contact"
          >
            GET IN TOUCH
          </Link>
        </div>
      </MaxwidthWrapper>

      <div className="w-full bg-black pt-56 pb-8 md:pb-16">
        <MaxwidthWrapper>
          <div className="w-full flex flex-col itmes-center gap-y-6">
            <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-y-6">
              <Link href="/" className="cursor-pointer flex-shrink-0 ml-2">
                <Image
                  src={logoImg}
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-36 md:w-44 mx-auto"
                />
              </Link>

              <hr className="w-full border-darkgrey md:hidden" />

              <div className="w-full md:w-auto flex flex-col md:flex-row items-center">
                {menuCategories.map((category) => (
                  <Link
                    href={category.slug}
                    key={category.title}
                    className={cn(
                      buttonVariants({
                        variant: "link",
                      }),
                      "text-sm md:text-base text-white font-normal"
                    )}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>

            <hr className="w-full border-darkgrey hidden md:block" />

            <div
              className="flex flex-col md:flex-row md:justify-between items-center gap-y-6 text-center text-neutral-500
            md:items-end"
            >
              <div className="flex flex-col gap-y-8 md:flex-row gap-x-12 lg:gap-x-36 items-center md:items-start">
                <div className="md:text-left">
                  <div className="font-semibold">Designo Central Office</div>
                  <div className="text-sm">
                    3886 Wellington Street
                    <br /> Toronto, Ontario M9C 3J5
                  </div>
                </div>

                <div className="md:text-left">
                  <div className="font-semibold">
                    Contact Us (Central Office)
                  </div>
                  <div className="text-sm">
                    P : +1 253-863-8967
                    <br /> M : contact@designo.co
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex gap-x-3 items-start justify-center md:justify-end md:items-end mt-4">
                <a href="#">
                  <IoLogoFacebook className="size-6 text-peach hover:text-lightpeach" />
                </a>
                <a href="#">
                  <FaYoutube className="size-6 text-peach hover:text-lightpeach" />
                </a>
                <a href="#">
                  <RiTwitterXFill className="size-6 text-peach hover:text-lightpeach" />
                </a>
                <a href="#">
                  <FaPinterest className="size-6 text-peach hover:text-lightpeach" />
                </a>
                <a href="#">
                  <FaInstagram className="size-6 text-peach hover:text-lightpeach" />
                </a>
              </div>
            </div>
          </div>
        </MaxwidthWrapper>
      </div>
    </div>
  );
}
