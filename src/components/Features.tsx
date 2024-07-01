import { features } from "@/lib/data";
import MaxwidthWrapper from "./MaxwidthWrapper";
import Feature from "./Feature";

export default function Features() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:gap-x-12 gap-y-6 items-center mb-40">
      {features.map((feature) => (
        <Feature
          title={feature.title}
          description={feature.description}
          image={feature.illustration}
          key={feature.title}
        />
      ))}
    </div>
  );
}
