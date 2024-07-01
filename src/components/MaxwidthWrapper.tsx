import { cn } from "@/lib/utils";
import React from "react";

export default function MaxwidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 md:px-8 lg:px-20 xl:px-28",
        className
      )}
    >
      {children}
    </div>
  );
}
