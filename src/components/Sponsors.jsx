import React from "react";

const Sponsors = ({ sponsors }) => {
  return (
    <section
      id="sponsors"
      className="flex flex-wrap md:px-24 lg-px-32 justify-center gap-3 items-center py-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold">Sponsors</h2>
      {sponsors?.map((sponsor) => {
        return (
          <a href={sponsor.link}>
            <img
              loading="lazy"
              src={sponsor.image}
              alt={sponsor.name}
              className={`h-[125px] w-[125px] md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] ease-in-out rounded-full`}
            />
          </a>
        );
      })}
    </section>
  );
};

export default Sponsors;