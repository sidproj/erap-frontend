import { Button } from "antd";
import { useState } from "react";
import EyeToggle from "../components/EyeToggle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full p-4 flex flex-col items-center justify-center">
      <div className="rounded-lg bg-[#02BDF3] p-4 text-white w-[90%] flex flex-col items-center gap-4">
        <div className="text-2xl font-semibold">Login</div>
        <div className="flex flex-col gap-1 w-full mt-2">
          <label className="text-sm">Email</label>
          <input
            placeholder="Email"
            type="email"
            className="p-2 text-[#02BDF3] focus:outline-0 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm">Password</label>
          <div className="flex flex-row w-full items-center">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="p-2 text-[#02BDF3] focus:outline-0 rounded w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeToggle
              show={showPassword}
              setShow={() => setShowPassword((old) => !old)}
            />
          </div>
        </div>
        <div className="text-center text-base font-light">
          Do not have an account?
          <span className="text-[#093F68]"> Create new account here!</span>
        </div>
        <Button
          className="bg-[#fff] text-[#02BDF3] rounded-full border-0 mb-5"
          onClick={() => console.log("Handle submit")}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
