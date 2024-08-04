import img1 from "../assets/images/profession_1.png";

const SectionPlate = () => {
  return (
    <div className="flex flex-row justify-between border-2 w-full rounded-xl p-2 px-4 text-[#02BDF3] border-[#02BDF3] hover:text-white hover:border-white hover:bg-[#02BDF3] duration-200">
      <div className="flex flex-col">
        <div className="text-lg font-semibold">Lorem ipsum dolor sit</div>
        <div>
          {"Lorem ipsum dolor sit amet, consectetur adipisicing elit.".substring(
            0,
            30
          )}
        </div>
      </div>
      <img className="object-contain w-[3rem]" src={img1} />
    </div>
  );
};

export default SectionPlate;
