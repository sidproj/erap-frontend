import { CloseOutlined } from "@ant-design/icons";

interface Props {
  setSideBar: () => void;
}

const Sidebar = (props: Props) => {
  return (
    <div
      className="z-10 fixed top-0 left-0 w-[100%] h-[100%] bg-[#0000007b] flex flex-row-reverse"
      onClick={() => props.setSideBar()}
    >
      <div className="w-[70%] h-[100%] bg-[#fff] flex flex-col p-[1.5rem]">
        <CloseOutlined
          className=" self-end"
          style={{ color: "#02BDF3", fontSize: "1.5rem" }}
        />
        <div className="text-xl text-[#02BDF3] font-semibold mt-[2rem] gap-4 flex flex-col">
          <div>HOME</div>
          <div>PROFESSIONS</div>
          <div>PROFESSIONALS</div>
          <div>SERVICES</div>
          <div>NEW APPOINTMENTS</div>
          <div>PAST APPOINTMENTS</div>
          <div>ACCOUNT</div>
          <div>PRIVACY POLICY</div>
          <div>CONTACT US</div>
          <div>ABOUT US</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
