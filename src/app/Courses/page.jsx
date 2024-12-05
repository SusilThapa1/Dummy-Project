"use client";

import React from "react";
import Courses from "@/components/Courses";
import { ThemeContext } from "@/context";

const Page = () => {
  return (
    <>
      {/* <ThemeContext.Provider value={"dark"}>
      <Courses />
    </ThemeContext.Provider> */}

      {/* withput context */}
      <Courses value="dark" />
    </>
  );
};

export default Page;
