import Image from "next/image";
import Link from "next/link";

function Profile() {
  return (
    <div className="flex items-center flex-col font-vazir mb-10">
      <Image
        src="/images/profile.png"
        alt="profile.png"
        width={250}
        height={350}
        className="w-[200px]"
      />
      <h2 className="text-lg   font-bold mt-2 dark:text-second">
        AMIR MOHAMAD KHANI FRASHAE
      </h2>
      <p className="font-normul text-gray-600">
        I Love Code &{" "}
        <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
          Video Game
        </span>
      </p>
      <Link
        href="/contact"
        className="py-1  px-2 bg-primary text-second font-medium text-lg rounded-md dark:bg-second dark:text-primary mt-2 my-hover hover:opacity-65"
      >
        Contact Me
      </Link>
    </div>
  );
}

export default Profile;
