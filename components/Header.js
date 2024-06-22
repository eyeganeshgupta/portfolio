"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import data from "../data/header";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  const { profile, name, title, address, education } = data;
  return (
    <header className="flex flex-wrap md:flex-row flex-col items-center gap-y-9 gap-x-8">
      <div className="md:w-[150px] md:h-[150px] w-[200px] h-[200px] relative rounded-full overflow-hidden">
        {/* Profile */}
        <Image
          src={profile}
          alt="profile"
          fill
          className="w-full h-full object-cover hover:scale-100 hover:rotate-6 transition-all duration-500"
        />
      </div>

      <div className="flex-1">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl capitalize text-violet-700 dark:text-white">
          {name}
        </h1>
        {/* JobTitle */}
        <h3 className="mt-2 text-lg md:text-xl font-semibold md:font-bold capitalize dark:text-zinc-400">
          {title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
          {/* Address */}
          <HeaderInfo
            Icon={
              <FaMapMarkerAlt
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            info={address}
          />

          {/* Education */}
          <HeaderInfo
            Icon={
              <IoIosSchool
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            info={education}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
