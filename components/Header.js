"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import data from "../data/header";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  const { profile, name, title, address, education } = data;
  return (
    <div className="flex items-center gap-x-8">
      <div className="w-[150px] h-[150px] relative rounded-full overflow-hidden">
        <Image
          src={profile}
          alt="profile"
          fill
          className="w-full h-full object-cover hover:scale-100 hover:rotate-6 transition-all duration-500"
        />
      </div>
      <div>
        <h1 className="text-5xl capitalize text-violet-700 dark:text-white">
          {name}
        </h1>
        <h3 className="mt-2 text-xl font-bold capitalize dark:text-zinc-400">
          {title}
        </h3>

        <div className="flex items-center gap-x-4 mt-2">
          <HeaderInfo
            Icon={
              <FaMapMarkerAlt
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            info={address}
          />

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
    </div>
  );
};

export default Header;
