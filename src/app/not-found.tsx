import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Ban } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <MaxwidthWrapper className="mb-64">
      <div className="w-full flex flex-col items-center text-center gap-y-8 bg-lightestpeach py-16 rounded-lg">
        <Ban className="size-28 md:size-56 text-peach" />
        <h2 className="w-full text-2xl md:text-5xl text-peach font-bold">
          404 Not Found
        </h2>
        <p className="w-full text-sm md:text-2xl text-peach font-semibold">
          Could not find requested page
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "mt-4 md:text-lg md:px-12 md:py-6"
          )}
        >
          Return Home
        </Link>
      </div>
    </MaxwidthWrapper>
  );
}
