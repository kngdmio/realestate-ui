"use client"
import Navbar from "@/components/utilities/navbar";
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

 
export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}> 
      <Navbar />
      {children}
    </NextThemesProvider>
  );
}