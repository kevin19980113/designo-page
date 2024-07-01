export default function LocationCard({
  location,
  index,
}: {
  location: {
    name: string;
    image: string;
    office: string[];
    contacts: string[];
  };
  index: number;
}) {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-6 items-center md:gap-y-6 xl:gap-x-6">
      <div
        className={`w-full h-[300px] xl:h-auto xl:self-stretch bg-no-repeat bg-cover bg-center md:rounded-lg xl:col-span-2 
        ${
          location.name === "CANADA"
            ? "bg-tablet-map-canada xl:bg-desktop-map-canada"
            : location.name === "AUSTRALIA"
            ? "bg-tablet-map-australia xl:bg-desktop-map-australia"
            : "bg-tablet-map-uk xl:bg-desktop-map-uk"
        } ${(index + 1) % 2 === 0 ? "xl:order-first" : "xl:order-last"}`}
      ></div>

      <div
        className="w-full bg-lightestpeach grid grid-cols-1 md:grid-cols-2 xl:col-span-4 items-center md:items-end 
        text-center md:text-left gap-y-6 py-20 px-4 md:px-20 bg-three-circles-pattern bg-center bg-contain md:rounded-lg"
      >
        <div className="grid grid-cols-1 gap-y-10">
          <h3 className="text-2xl md:text-3xl font-medium tracking-wider text-peach">
            {location.name}
          </h3>

          <div className="grid grid-cols-1 gap-y-2">
            {location.office.map((address, index) => (
              <p
                className={`text-base tracking-normal xl:text-lg ${
                  index === 0 ? "font-bold" : ""
                }`}
                key={address}
              >
                {address}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-2">
          <div className="text-base font-bold">Contact</div>
          {location.contacts.map((contact) => (
            <p className="text-base tracking-normal xl:text-lg" key={contact}>
              {contact}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
