"use client";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import Test from "./Test";

const Page = (props) => {
  const courseDescriptions = [
    {
      course: "Bachelor of Information Technology (BIT)",
      description:
        "BIT focuses on developing IT skills, covering programming, databases, networking, web development, operating systems, and cybersecurity to prepare students for software and systems-related careers.",
    },
    {
      course: "Bachelor of Computer Application (BCA)",
      description:
        "BCA teaches computer programming, data structures, web development, DBMS, and software engineering, preparing students for roles in software development, IT management, and web design.",
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      description:
        "BBA provides foundational business knowledge in management, marketing, finance, HR, and entrepreneurship, preparing students for leadership roles in various business sectors.",
    },
    {
      course: "Bachelor of Civil Engineering (BCE)",
      description:
        "BCE focuses on designing, constructing, and maintaining infrastructure such as buildings, bridges, and roads, covering structural, geotechnical, and environmental engineering principles and construction management.",
    },
    {
      course: "Bachelor of Informaion Management (BIM)",
      description:
        "BIM combines information technology with business management, covering data analysis, project management, database management, and business analytics to prepare students for roles in IT and business consulting.",
    },
  ];

  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleDescriptionIndex(
      visibleDescriptionIndex === index ? null : index
    );
  };

  return (
    <div className="mx-auto py-3 w-[70%] flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl font-bold text-gray-300">Courses Available</h1>
      {courseDescriptions.map((courseDescription, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded-lg px-2 py-1 w-[48%] text-gray-900"
        >
          <div className="p-4 flex justify-between items-center  ">
            <h1 className="text-xl font-bold text-center">
              {courseDescription.course}
            </h1>
            <LuPlus
              onClick={() => toggleDescription(index)}
              className={`text-3xl font-bold transform transition-transform duration-150 ease-in cursor-pointer ${
                visibleDescriptionIndex === index ? "rotate-45" : ""
              }`}
            />
          </div>
          {visibleDescriptionIndex === index && (
            <div className="bg-gray-200 rounded-md px-2 py-1 text-lg">
              <p className="text-justify">{courseDescription.description}</p>
            </div>
          )}
        </div>
      ))}
      {/* <Test value={props.value} /> */}
    </div>
  );
};

export default Page;
