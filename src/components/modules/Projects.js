import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="dark:text-second font-vazir">
      <h5 className="text-center text-2xl font-semibold">PROJECTS</h5>
      <div className="flex items-center flex-wrap max-md:flex-col">
        <div className="card">
          <Image
            src="/images/realEstate.png"
            alt="image"
            width={500}
            height={500}
          />
          <Link href="https://github.com/amirkhani123/RealEstate">
            GitHub <FaGithub />
          </Link>
        </div>
        <div className="card">
          <Image
            src="/images/khaniFood.png"
            alt="image"
            width={5000}
            height={5000}
          />
          <Link href="https://github.com/amirkhani123/khaniFood">
            GitHub <FaGithub />
          </Link>
        </div>
        <div className="card">
          <Image
            src="/images/computerYar.png"
            alt="image"
            width={5000}
            height={5000}
          />
          <Link href="https://github.com/amirkhani123/coumputerYar">
            GitHub <FaGithub />
          </Link>
        </div>
        <div className="card">
          <p className="h-[180px] text-center text-xl font-bold italic mt-20">
            TODO APP
          </p>
          <Link href="https://github.com/amirkhani123/todoapp-Fullstack">
            GitHub <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
