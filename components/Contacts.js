import data from "@/data/contacts";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegUserCircle,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Heading from "./Heading";

const Contacts = () => {
  return (
    <section className="border-t py-7 border-zinc-100 dark:border-zinc-800">
      <Heading>Contacts</Heading>
      <div className="flex flex-wrap items-center gap-5">
        {data?.map((contact) => {
          return (
            <Link
              href={contact.link}
              key={contact.id}
              target="_blank"
              className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
            >
              {contact.name === "github" && (
                <FaGithub size={18} className="text-black dark:text-white" />
              )}

              {contact.name === "linkedin" && (
                <FaLinkedin
                  size={18}
                  className="text-[#0a66c2] dark:text-white"
                />
              )}

              {contact.name === "x" && (
                <BsTwitterX size={18} className="text-black dark:text-white" />
              )}

              {contact.name === "instagram" && (
                <FaInstagram
                  size={18}
                  className="text-[#c32aa3] dark:text-white"
                />
              )}

              {contact.name === "facebook" && (
                <FaFacebookSquare
                  size={18}
                  className="text-[#1877f2] dark:text-white"
                />
              )}

              {contact.name === "youtube" && (
                <FaYoutube
                  size={18}
                  className="text-[#ff0000] dark:text-white"
                />
              )}

              {contact.name === "email" && (
                <MdEmail size={18} className="text-black dark:text-white" />
              )}

              {contact.name === "cv" && (
                <FaRegUserCircle
                  size={18}
                  className="text-black dark:text-white"
                />
              )}

              <span className="text-base capitalize text-zinc-700 dark:text-white font-bold">
                {contact.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Contacts;
