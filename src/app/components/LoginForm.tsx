"use client";

import React, { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  signin,
  authenticated,
  type SigninAdmin,
} from "~/app/utils/Authentication";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const labelStyles = "text-black";
  const inputStyles =
    "focus:border-primary w-full bg-transparent py-2 text-gray-700 focus:border-b focus:outline-none";

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const admin: SigninAdmin = {
      email,
      password,
    };

    try {
      await signin(admin).then(() => {
        if (authenticated()) {
          router.push("/dashboard");
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
      } else {
        console.error("An unknown error occurred");
        alert("An unknown error occurred");
      }
    } finally {
      // Re-enable the button regardless of success or failure
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white bg-opacity-70 p-8 font-[poppins] shadow-md backdrop-blur-md backdrop-filter">
      <Image src={"/icon.png"} alt="logo" width={100} height={100} />
      <br />
      <br />
      <br />
      <form className="flex w-80 flex-col space-y-4" onSubmit={handleLogin}>
        <div className="w-full">
          <label htmlFor="username" className={labelStyles}>
            Email
          </label>
          <input
            id="username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyles}
            placeholder="Enter your username"
            required
          />
        </div>
        <br />
        <div className="relative w-full">
          <label htmlFor="password" className={labelStyles}>
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${inputStyles} pr-10`}
            placeholder="Enter your password"
            required
          />
          <button
            className="absolute inset-y-12 right-0 flex cursor-pointer items-center pr-3 lg:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <br />
        <br />
        <div className="flex w-full items-center justify-center">
          <button
            type="submit"
            className="bg-primary w-fit rounded-full px-10 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-opacity-80"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login as Admin"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
