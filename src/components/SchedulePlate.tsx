const SchedulePlate = () => {
  return (
    <div className="border-2 border-[#02BDF3] rounded-lg flex flex-row w-full group">
      <div className="flex flex-col p-2 px-4 rounded-md w-full text-[#02BDF3] group-hover:bg-[#02BDF3] group-hover:text-white duration-200">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 rounded-b-xl text-sm ">
            <div>Date:</div>
            <div>01/09/2001</div>
          </div>
          <div className="flex flex-row gap-2 rounded-b-xl text-sm ">
            <div>Time:</div>
            <div>10:00 AM - 11:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePlate;
