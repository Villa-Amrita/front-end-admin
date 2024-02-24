import React from "react";
import Image from "next/image";

const LoginForm = () => {
  const labelStyles = "text-black";
  const inputStyles =
    "focus:border-primary w-full bg-transparent py-2 text-gray-700 focus:border-b focus:outline-none";

  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white bg-opacity-50 p-8 font-[poppins] shadow-md backdrop-blur-md backdrop-filter">
      <Image src={"/icon.png"} alt="logo" width={100} height={100} />
      <br />
      <br />
      <br />
      <form className="flex w-80 flex-col space-y-4">
        <div className="w-full">
          <label htmlFor="username" className={labelStyles}>
            Email
          </label>
          <input
            id="username"
            type="email"
            className={inputStyles}
            placeholder="Enter your username"
          />
        </div>
        <br />
        <div className="w-full">
          <label htmlFor="password" className={labelStyles}>
            Password
          </label>
          <input
            id="password"
            type="password"
            className={inputStyles}
            placeholder="Enter your password"
          />
        </div>
        <br />
        <br />
        <div className="flex w-full items-center justify-center">
          <button
            type="submit"
            className="bg-primary w-fit rounded-full px-10 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-opacity-80"
          >
            Login as Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
