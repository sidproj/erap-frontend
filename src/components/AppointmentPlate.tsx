import img1 from "../assets/images/profession_1.png";

const AppointmentPlate = () => {
  return (
    <div className="border-2 border-[#02BDF3] rounded-xl flex flex-row w-full group hover:bg-[#02BDF3] items-center">
      <div className="flex flex-col p-2 rounded-l-lg w-full text-[#02BDF3] group-hover:text-white duration-200">
        <div className="flex flex-row gap-1 rounded-b-xl pt-0 text-sm ">
          <div>Database Designing</div>
        </div>
        <div className="flex flex-row gap-1 rounded-b-xl pt-0 text-sm ">
          Date - {"01/09/2001"}
        </div>
      </div>
      <div className="rounded-r-lg p-1 px-2 flex flex-col items-center justify-center">
        <img className="object-contain w-[5rem]" src={img1} />
      </div>
    </div>
  );
};

export default AppointmentPlate;
