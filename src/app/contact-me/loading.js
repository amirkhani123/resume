"use client"
import { RotatingLines } from "react-loader-spinner";

function Loading() {
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <RotatingLines strokeWidth="1" width="120" strokeColor="#374151"   />
    </div>
  );
}

export default Loading;
