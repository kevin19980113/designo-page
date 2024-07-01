"use client";

import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { menuCategories } from "@/lib/data";
import logoImg from "../../public/assets/shared/desktop/logo-dark.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={() => setOpen(!open)} open={open}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="bg-black border-black text-white"
        onOpenAutoFocus={(e) => e.preventDefault()}
        aria-describedby={undefined}
      >
        <SheetTitle></SheetTitle>

        <div className="bg-white absolute inset-0 h-16 px-4">
          <Link href="/" className="cursor-pointer flex-shrink-0 ml-2">
            <Image
              src={logoImg}
              alt="logo"
              width={100}
              height={100}
              className="w-auto h-auto"
              onClick={() => setOpen(false)}
            />
          </Link>
        </div>
        <div className="w-full flex flex-col items-start mt-16">
          {menuCategories.map((category) => (
            <Link
              href={category.slug}
              key={category.title}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "text-lg text-white font-medium"
              )}
              onClick={() => setOpen(false)}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
