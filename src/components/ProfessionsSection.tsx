import ProfessionTile from "./ProfessionTile";

const ProfessionsSection = () => {
  return (
    <>
      <div className="text-xl text-[#093F68] font-semibold">Professions</div>
      <div className="flex flex-row flex-wrap gap-4 ">
        <ProfessionTile />
        <ProfessionTile />
        <ProfessionTile />
        <ProfessionTile />
      </div>
    </>
  );
};

export default ProfessionsSection;
