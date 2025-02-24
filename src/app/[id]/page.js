import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export async function generateStaticParams() {
  return data.map(item=>({id:item.id}))
}

async function page({ params }) {
  const { id } = await params;
  const item=data.find(i=>i.id === id)
  return <main className="w-full h-[55vh] flex items-center justify-center dark:text-white">
    <div>
        <div className=" flex items-center justify-between gap-2 max-md:flex-col">
        <Image src={`/images/${item.image}`}  width={300} height={250} alt="image.png" className="w-1/3 rounded-lg max-md:w-1/2 max-md:mt-10"/>
         <ul className="w-2/3">
            <li className="flex items-center gap-2"><p className="font-medium">Name : </p><span className="font-normal" >{item.name}</span></li>
            <li className="flex  gap-2" ><p className="font-medium ">Description:</p> <span>{item.description}</span></li>
         </ul>
        </div>
        <div className="flex items-center justify-between w-full p-2">
            <Link href={`${item.github}`} className=" flex items-center gap-2 px-2 py-3 rounded-lg bg-black text-white  my-hover hover:text-black hover:bg-white hover:border-black border dark:border-gray-700">
            GitHub <FaGithub size={26}/>
            </Link>
            <Link href={item.demo} className="px-5 py-3 rounded-lg bg-green-500 text-white  my-hover hover:text-green-500 hover:bg-white hover:border-green-500 hover:border">
            Demo
            </Link>
           </div>
    </div>
  </main>;
}

export default page;
