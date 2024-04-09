import React from "react";
import Image from "next/image";
import loader from "@/components/utilities/loadingspinner.svg";

export default function LoadingPage() {
  return (
    <div className="h-screen text-center ">
      <span className="absolute left-[50%] -translate-x-1/2 top-[50%]">
        <div className="m-auto">
          <Image src={loader} className="sm:scale-75" />
        </div>
        <span className="m-auto font-semibold text-sm pl-2">Loading..</span>
      </span>
    </div>
  );
}
