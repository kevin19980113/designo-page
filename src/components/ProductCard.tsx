"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { useContact } from "@/hooks/use-contact";

export default function ProductCard({
  product,
}: {
  product: {
    name: string;
    description: string;
    image: string;
  };
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { setName, setDescription } = useContact();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted === false)
    return <Skeleton className="w-full h-[300px] lg:h-[500px] animate-pulse" />;
  return (
    <Link
      className="w-full flex flex-col tiems-center bg-lightestpeach border border-black/10 rounded-lg
    md:flex-row lg:flex-col hover:bg-peach group"
      href="/contact"
      onClick={() => {
        setName(product.name);
        setDescription(product.description);
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        width="300"
        height="300"
        className="w-full h-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none lg:rounded-t-lg lg:rounded-b-none"
      />
      <div className="w-full flex flex-col items-center md:justify-center text-center gap-y-4 py-6 px-4 lg:gap-y-8 lg:py-10">
        <h3 className="text-2xl tracking-widest text-peach group-hover:text-white">
          {product.name.toUpperCase()}
        </h3>
        <p className="text-sm lg:text-base max-w-56 md:max-w-72 tracking-normal leading-6 group-hover:text-white">
          {product.description}
        </p>
      </div>
    </Link>
  );
}
