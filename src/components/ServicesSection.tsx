import SectionPlate from "./SectionPlate";

const ServicesSection = () => {
  return (
    <>
      <div className="text-xl text-[#093F68] font-semibold">Services</div>
      <div className="flex flex-row flex-wrap gap-4 ">
        <SectionPlate />
        <SectionPlate />
        <SectionPlate />
        <SectionPlate />
      </div>
    </>
  );
};

export default ServicesSection;
