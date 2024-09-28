"use client";
import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {
  return (
    <div className="dark:text-second font-vazir my-[150px]">
      <h4 className="text-center text-2xl font-semibold mb-5">SKILLS</h4>
      <div className="flex items-center justify-between max-lg:flex-col">
        <div>
          <div className="flex items-center gap-3 ">
            <span className="font-blod dark:text-blue-500 w-[130px] text-black  ">HTML & CSS :</span>
            <ProgressBar
              completed={100}
              maxCompleted={100}
              width="325px"
              labelAlignment="center"
              completedClassName="prograss-bar"
              labelClassName="prograss-bar-lable"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-blod dark:text-blue-500 w-[130px] ">Java Script :</span>
            <ProgressBar
              completed={80}
              maxCompleted={100}
              width="325px"
              labelAlignment="center"
              completedClassName="prograss-bar"
              labelClassName="prograss-bar-lable"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-blod dark:text-blue-500 w-[130px] ">React JS :</span>
            <ProgressBar
              completed={70}
              maxCompleted={100}
              width="325px"
              labelAlignment="center"
              completedClassName="prograss-bar"
              labelClassName="prograss-bar-lable"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-blod dark:text-blue-500 w-[130px] ">Metrial UI :</span>
            <ProgressBar
              completed={45}
              maxCompleted={100}
              width="325px"
              labelAlignment="center"
              completedClassName="prograss-bar"
              labelClassName="prograss-bar-lable"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className="font-blod dark:text-blue-500 w-[130px] ">Git & GitHub :</span>
            <ProgressBar
              completed={75}
              maxCompleted={100}
              width="325px"
              labelAlignment="center"
              completedClassName="prograss-bar"
              labelClassName="prograss-bar-lable"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-blod dark:text-blue-500 w-[130px] ">Next JS :</span>
            <ProgressBar
              completed={100}
              maxCompleted={100}
              width="325px"
              labelAlignment="center"
              completedClassName="prograss-bar"
              labelClassName="prograss-bar-lable"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-blod dark:text-blue-500 w-[130px] ">Redux&Axios:</span>
            <ProgressBar
              completed={80}
              maxCompleted={100}
              width="325px"
              labelAlignment="center"
              completedClassName="prograss-bar"
              labelClassName="prograss-bar-lable"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-blod dark:text-blue-500 w-[130px] ">Tailwind :</span>
            <ProgressBar
              completed={80}
              maxCompleted={100}
              width="325px"
              labelAlignment="center"
              completedClassName="prograss-bar"
              labelClassName="prograss-bar-lable"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
