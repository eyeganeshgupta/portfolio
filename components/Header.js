"use client";

import Image from "next/image";
import data from "../data/header";

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
        <h1 className="text-5xl capitalize text-violet-700">{name}</h1>
      </div>
    </div>
  );
};

export default Header;
