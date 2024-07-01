import Image from "next/image";
import logoImg from "../../public/assets/shared/desktop/logo-dark.png";
import Link from "next/link";
import MaxwidthWrapper from "./MaxwidthWrapper";
import Menu from "./Menu";
import { menuCategories } from "@/lib/data";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <MaxwidthWrapper>
      <div className="w-full flex items-center justify-between py-4 md:py-8">
        <Link href="/" className="cursor-pointer flex-shrink-0 ml-2 group">
          <Image
            src={logoImg}
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-auto group-hover:scale-110 transition-all"
          />
        </Link>

        <div className="hidden md:flex items-center gap-x-4 justify-between">
          {menuCategories.map((category) => (
            <Link
              href={category.slug}
              key={category.title}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "text-sm text-black font-light"
              )}
            >
              {category.title}
            </Link>
          ))}
        </div>

        <Menu />
      </div>
    </MaxwidthWrapper>
  );
}
