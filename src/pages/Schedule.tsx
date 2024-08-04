import img1 from "../assets/images/professional.png";
import SchedulePlate from "../components/SchedulePlate";
import SectionPlate from "../components/SectionPlate";

const Schedule = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-row mt-5 gap-8 items-center">
        <img className="object-contain w-[7rem]" src={img1} />
        <div className="flex flex-row">
          <div className="flex flex-col gap-2">
            <div className="text-xl text-[#093F68] font-semibold">Teacher</div>
            <div className="flex flex-col justify-between text-sm text-[#02BDF3]">
              <div className="text-base">John Doe</div>
              <div className="text-base">Programing</div>
            </div>
          </div>
        </div>
      </div>
      <SectionPlate />
      <SchedulePlate />
    </div>
  );
};

export default Schedule;
