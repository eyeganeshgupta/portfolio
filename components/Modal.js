import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import SkillComponent from "./SkillComponent";

const Modal = ({ state, details, toggleModal }) => {
  return state ? (
    <div className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur z-[99999] flex items-center justify-center">
      {/* Close Icon */}
      <MdClose
        className="cursor-pointer text-[25px] absolute top-6 right-6 text-black dark:text-white"
        onClick={toggleModal}
      />

      <div className="max-w-screen-xl w-full bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700 max-h-[80vh] overflow-x-auto">
        <div className="flex flex-wrap lg:space-x-6">
          {/* Project Image */}
          <div className="relative w-full lg:w-[400px] rounded-lg overflow-hidden">
            <div className="pt-[56.25%]">
              <Image
                src={details.image}
                fill
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>

          <div className="flex-1 mt-5 lg:mt-0">
            {/* Project Title */}
            <h2 className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-400 font-bold">
              {details.title}
            </h2>

            {/* Technologies / Framework / Library used in this project */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {details?.skills?.map((skill) => {
                return <SkillComponent skill={skill} key={skill.id} />;
              })}
            </div>

            {/* Project Source Code and Demo */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <Link
                href={details.sourceCode}
                target="_blank"
                className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
              >
                <FaGithub size={18} className="text-black dark:text-white" />
                <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                  Source Code
                </span>
              </Link>

              <Link
                href={details.demo}
                target="_blank"
                className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
              >
                <TfiWorld size={18} className="text-black dark:text-white" />
                <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                  Demo
                </span>
              </Link>
            </div>

            {/* Project Description */}
            <p className="text-base font-medium text-zinc-700 dark:text-zinc-400 leading-[20px] mt-6">
              {details.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
