"use client";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
function Skills() {
  return (
    <div className=" my-[150px]">
      <h4 className="text-center text-2xl font-semibold mb-5">SKILLS</h4>
      <div className="flex items-center justify-between max-lg:flex-col">
        <div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              HTML & CSS 
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              Java Script 
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              React (Hooks)
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              ReduxToltik
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              NextJS
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              Tailwind
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              Metrial Ui
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              Axios
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">
              Git & GitHub
            </span>
            <IoIosCheckmarkCircleOutline
              size={35}
              className="dark:text-white text-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
