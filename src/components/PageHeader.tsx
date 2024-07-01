"use client";

import ContactForm from "./ContactForm";
import MaxwidthWrapper from "./MaxwidthWrapper";

export default function PageHeader({
  title,
  description,
  image = false,
  isForm = false,
}: {
  title: string;
  description: string;
  image?: boolean;
  isForm?: boolean;
}) {
  return (
    <MaxwidthWrapper className="px-0">
      <div
        className={`relative w-full bg-peach grid grid-cols-1 items-center md:rounded-lg
        ${image ? "lg:flex-row-reverse md:mb-16" : ""} ${
          image || isForm ? "" : "mb-20"
        } ${isForm ? "lg:grid-cols-2 py-12 xl:px-10" : ""}`}
      >
        {image && (
          <div
            className="w-full h-[300px] md:h-[400px] bg-mobile-about-hero md:bg-tablet-about-hero lg:bg-desktop-about-hero
        bg-no-repeat bg-cover bg-center md:rounded-t-lg"
          ></div>
        )}

        <div className="absolute inset-0 bg-hero-bg-pattern md:bg-action-pattern md:bg-repeat bg-cover left-14 md:left-0"></div>

        <div
          className={`w-full flex flex-col items-center gap-y-6 text-white text-center px-4 py-12
        ${image ? "lg:items-start lg:text-left lg:px-20 lg:py-16" : ""} 
        ${isForm ? "md:text-left md:items-start md:px-12" : ""}`}
        >
          <h1 className="text-3xl md:text-4xl font-medium xl:text-5xl">
            {title}
          </h1>
          <p className="text-sm md:text-base leading-6 tracking-wide max-w-prose xl:text-lg">
            {description}
          </p>
        </div>

        {isForm && <ContactForm />}
      </div>
    </MaxwidthWrapper>
  );
}
