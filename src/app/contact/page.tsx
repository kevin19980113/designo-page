import Locations from "@/components/Locations";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader
        title="Contact Us"
        description="Ready to take it to the next level? Let’s talk about your project or idea and find out how 
  we can help your business grow. If you are looking for unique digital experiences that’s 
  relatable to your users, drop us a line."
        isForm
      />
      <MaxwidthWrapper>
        <Locations />
      </MaxwidthWrapper>
    </div>
  );
}
