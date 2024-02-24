"use client";

import React, { useEffect, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { authenticated, signout } from "~/app/utils/Authentication";

const NavBar = () => {
  const router = useRouter();

  const logout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signout();
      router.push("/");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    if (!authenticated()) {
      router.push("/");
    }
  }, [router]);

  const navItemStyles = "hover:text-gray-700 transition-colors";

  return (
    <nav>
      <div className="bg-primary flex h-20 w-full items-center justify-between px-6 font-[poppins] text-lg text-white transition-all">
        <Link href="/">
          <div className="flex flex-row items-center justify-center space-x-3 font-bold">
            <div className="h-fit w-fit rounded-full bg-white p-2">
              <Image
                src="/Icon.png"
                alt="Villa Amrita Logo"
                width={70}
                height={70}
                loading="lazy"
              />
            </div>
            <span>Villa Amrita</span>
          </div>
        </Link>
        <div className="font-bold">
          <ul className="flex w-fit flex-row items-center justify-between space-x-10">
            <li className={navItemStyles}>
              <Link href={"/rooms"}>Hotel Rooms</Link>
            </li>
            <li className={navItemStyles}>
              <Link href={"/meals"}>Meals</Link>
            </li>
            <li className={navItemStyles}>
              <Link href={"/meals"}>Requests</Link>
            </li>
            <li className={navItemStyles}>
              <Link href={"/meals"}>Reservations</Link>
            </li>
            <li className={navItemStyles}>
              <Link href={"/meals"}>Reports</Link>
            </li>
            <li className="rounded-full bg-rose-600 px-4 py-1 font-normal text-white transition-colors hover:bg-rose-800">
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
