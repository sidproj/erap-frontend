import img1 from "../assets/images/profession_1.png";

const ProfessionTile = () => {
  return (
    <div className="text-[#02BDF3] flex flex-col gap-1 items-center w-fit">
      <div className="border-2 border-[#02BDF3] hover:bg-[#02BDF3] duration-200 rounded-lg p-3 w-fit">
        <img src={img1} />
      </div>
      <div className="overflow-hidden w-[5.2rem]">
        ProfessionProfessionProfessionProfession
      </div>
    </div>
  );
};

export default ProfessionTile;
