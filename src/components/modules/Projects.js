"use client"
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaGithub } from "react-icons/fa";

function Projects() {

  return (
    <div>
      <h5 className="text-center text-2xl font-semibold">PROJECTS</h5>
      <div className="flex items-center flex-wrap max-md:flex-col gap-5 mt-2 ">
        <Fade cascade triggerOnce >
        {data.map((item)=>(
          <div key={item.id} className="flex items-center flex-col   size-56 overflow-hidden rounded-lg  shadow-3xl dark:bg-white">
           <Image src={`/images/${item.image}`} alt="image.png" width={550} height={500} className="h-40"/>
           <div className="flex items-center justify-between w-full p-2">
            <Link href={`${item.github}`} className=" flex items-center gap-2 px-2 py-3 rounded-lg bg-black text-white  my-hover hover:text-black hover:bg-white hover:border-black hover:border">
            GitHub <FaGithub size={26}/>
            </Link>
            <Link href={`/${item.id}`} className="px-5 py-3 rounded-lg bg-green-500 text-white  my-hover hover:text-green-500 hover:bg-white hover:border-green-500 hover:border">
            Details
            </Link>
           </div>
          </div>
        ))}
        </Fade>
       </div>
    </div>
  );
}

export default Projects;
