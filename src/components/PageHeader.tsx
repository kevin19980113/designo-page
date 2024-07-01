import MaxwidthWrapper from "./MaxwidthWrapper";

export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <MaxwidthWrapper className="px-0">
      <div
        className="relative w-full bg-peach flex flex-col items-center px-4 py-20 mb-16 text-white text-center gap-y-6
      md:rounded-lg"
      >
        <h1 className="text-3xl md:text-5xl font-medium">{title}</h1>
        <p className="text-sm md:text-base leading-6 tracking-wide max-w-80">
          {description}
        </p>
        <div
          className={
            "absolute inset-0 bg-hero-bg-pattern md:bg-action-pattern md:bg-repeat bg-center bg-cover left-14 md:left-0"
          }
        ></div>
      </div>
    </MaxwidthWrapper>
  );
}
