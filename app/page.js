"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/utilities/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="px-4 my-10">
        <h1 className="">Home Page</h1>
        <p className="text-sm text-gray-500">This is the Homepage.</p>
      </div>
    </main>
  );
}
