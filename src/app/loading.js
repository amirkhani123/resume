"use client"
import React from "react";
import { RotatingLines } from "react-loader-spinner";

function loading() {
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <RotatingLines strokeWidth="1" width="120" strokeColor="#374151"   />
    </div>
  );
}

export default loading;
