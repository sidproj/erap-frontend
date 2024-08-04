import img1 from "../assets/images/professional.png";

const ProfessionalPlate = () => {
  return (
    <div className="border-2 border-[#02BDF3] rounded-xl flex flex-row w-full group">
      <div className="bg-[#02BDF3] rounded-l-lg p-1 px-2 flex flex-col items-center justify-center group-hover:bg-white duration-200">
        <img className="object-contain w-[5rem]" src={img1} />
      </div>
      <div className="flex flex-col p-2 rounded-r-lg w-full text-[#02BDF3] group-hover:bg-[#02BDF3] group-hover:text-white duration-200">
        <div className="text-[#093F68] w-full text-xl font-semibold">
          Profession
        </div>
        <div className="flex flex-row gap-1 rounded-b-xl pt-0 text-sm ">
          <div>Sidharaj</div>
          <div>-</div>
          <div>Sidharaj</div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPlate;
