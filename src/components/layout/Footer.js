import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
function Footer() {
  return (
    <footer className="box-blur flex items-center flex-col p-3 my-2 rounded-lg max-md:px-px max-md:m-0 ">
      <div className="flex items-center justify-between w-[150px] my-hover ">
        <Link
          href="https://github.com/amirkhani123"
          className="hover:text-blue-600"
        >
          <FaGithub size={25} />
        </Link>
        <Link href="/" className="hover:text-blue-600">
          <FaTelegram size={25} />
        </Link>
        <Link href="/" className="hover:text-blue-600">
          <IoLogoInstagram size={25} />
        </Link>
      </div>
      <p className="mt-2 font-vazirmatn font-medium max-md:text-xs " >
        Developed by Amir Khani with NextJS and Tailwind
      </p>
    </footer>
  );
}

export default Footer;
