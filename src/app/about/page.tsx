import AboutCard from "@/components/AboutCard";
import Locations from "@/components/Locations";
import PageHeader from "@/components/PageHeader";
import { about } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. 
  We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
  that make real impact. We’re always looking forward to creating brands, products, and 
  digital experiences that connect with our clients' audiences."
        image
      />
      <AboutCard
        title={about[0].title}
        descriptions={about[0].description}
        index={1}
      />
      <Locations />
      <AboutCard
        title={about[1].title}
        descriptions={about[1].description}
        index={2}
        className="mb-48"
      />
    </div>
  );
}
