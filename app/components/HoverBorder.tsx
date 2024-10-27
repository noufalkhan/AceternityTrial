"use client";
import React from "react";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex bd-300 justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-red-400 text-black dark:text-white flex items-center px-5 py-1"
      >
       
        <span>Get Started Now</span>
      </HoverBorderGradient>
    </div>
  );
}


