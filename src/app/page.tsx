import CategoryCards from "@/components/CategoryCards";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <MaxwidthWrapper>
        <CategoryCards />
        <Features />
      </MaxwidthWrapper>
    </div>
  );
}
