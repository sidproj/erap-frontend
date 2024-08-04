import ProfessionalPlate from "./ProfessionalPlate";

const ProfessionalSection = () => {
  return (
    <>
      <div className="text-xl text-[#093F68] font-semibold">Professionals</div>
      <div className="flex flex-row flex-wrap gap-2">
        <ProfessionalPlate />
        <ProfessionalPlate />
        <ProfessionalPlate />
      </div>
    </>
  );
};

export default ProfessionalSection;
