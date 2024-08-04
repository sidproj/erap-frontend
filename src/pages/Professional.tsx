import ProfessionalSection from "../components/ProfessionalSection";

const Professional = () => {
  return (
    <div className="flex flex-col">
      <div className="text-xl text-[#093F68] font-semibold">Profession</div>
      <div className="text-[#02BDF3]">Teacher</div>
      <div className="flex flex-col gap-4 mt-4">
        <ProfessionalSection />
      </div>
    </div>
  );
};

export default Professional;
