"use client"
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function Profile() {
  return (
    <div className="flex items-center flex-col  mb-10" >
   <Fade cascade direction="down" triggerOnce >
      <Image
        src="/images/profile.png"
        alt="profile.png"
        width={250}
        height={350}
        className="w-[200px]"
      />
      <h2 className="text-lg   font-medium mt-2 dark:text-second">
        AMIR MOHAMAD KHANI FRASHAE
      </h2>
      <p className="font-normul text-gray-600">
        I Love Code &{" "}
        <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
          Video Game
        </span>
      </p>
      <Link
        href="/contact-me"
        className="py-1  px-2 bg-primary text-second font-normal text-lg rounded-md dark:bg-second dark:text-primary mt-5 my-hover hover:opacity-65"
      >
        Contact Me
      </Link>
    </Fade>
    </div>
   
  );
}

export default Profile;
