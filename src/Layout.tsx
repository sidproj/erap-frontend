import { MenuOutlined } from "@ant-design/icons";
import { ReactNode, useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [sideBar, setSideBar] = useState<boolean>(false);

  const breadCrumbItems = [{ title: <Link to={"/"}>Home</Link> }];

  return (
    <BrowserRouter>
      {sideBar && <Sidebar setSideBar={() => setSideBar(false)} />}
      <div className="flex flex-col justify-center">
        <div className="w-full p-3 px-4 flex flex-row justify-between bg-[#02BDF3]">
          <div className="text-white font-bold text-2xl">RAP</div>
          <MenuOutlined
            style={{ color: "#fff", fontSize: "1.5rem" }}
            onClick={() => setSideBar(true)}
          />
        </div>
        <div className="p-4 px-6">
          <Breadcrumb items={breadCrumbItems} />
          {children}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
