import { Button } from "antd";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#01BCF2] to-[#034DC6] p-4 rounded-xl flex flex-col gap-2">
      <div className="text-xl font-medium">New And Exciting Offers</div>
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="font-light">
          Our professionals are here to help you.
        </div>
        <Button className="rounded-full border-0 bg-white text-base text-[#093F68] font-semibold">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
