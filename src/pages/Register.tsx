import { useState } from "react";
import EyeToggle from "../components/EyeToggle";
import { Button } from "antd";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  return (
    <div className="w-full h-full p-4 flex flex-col items-center justify-center">
      <div className="rounded-lg bg-[#02BDF3] p-4 text-white w-[90%] flex flex-col items-center gap-4">
        <div className="text-2xl font-semibold">Register</div>
        <div className="flex flex-col gap-1 w-full mt-2">
          <label className="text-sm">First Name</label>
          <input
            placeholder="First Name"
            type="text"
            className="p-2 text-[#02BDF3] focus:outline-0 rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full mt-2">
          <label className="text-sm">Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            className="p-2 text-[#02BDF3] focus:outline-0 rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm">Confirm Password</label>
          <div className="flex flex-row w-full items-center">
            <input
              placeholder="Confirm Password"
              type={showConfPassword ? "text" : "password"}
              className="p-2 text-[#02BDF3] focus:outline-0 rounded w-full"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <EyeToggle
              show={showConfPassword}
              setShow={() => setShowConfPassword((old) => !old)}
            />
          </div>
        </div>
        <div className="text-center text-base font-light">
          Already have an account?
          <span className="text-[#093F68]"> Login here!</span>
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

export default Register;
