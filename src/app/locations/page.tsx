import LocationCard from "@/components/LocationCard";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { locations } from "@/lib/data";

export default function LocationsPage() {
  return (
    <MaxwidthWrapper className="px-0">
      <div className="w-full flex flex-col items-center gap-y-10 mb-52">
        {locations.map((location, index) => (
          <LocationCard key={location.name} location={location} index={index} />
        ))}
      </div>
    </MaxwidthWrapper>
  );
}
