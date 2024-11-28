"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const lists = ["Home", "Products", "Courses", "FAQ", "Contacts"];
  const routes = {
    Home: "/",
    Products: "/Products",
    Courses: "/Courses",
    FAQ: "/FAQ",
    Contacts: "/Contacts",
  };
  const router = useRouter();
  const handleClick = (route, list) => {
    setActiveLink(list);
    router.push(route);
    setOpenSidebar(false);
  };

  function toggleSidebar() {
    setOpenSidebar(!openSidebar);
  }

  if (openSidebar) {
    return (
      <div className=" px-3 flex flex-col bg-sky-600 justify-between">
        <RiCloseFill
          title="close"
          onClick={toggleSidebar}
          className="text-2xl self-end "
        />
        <ul className="flex h-full  flex-col gap-4 pt-5 ">
          {lists.map((list, index) => (
            <li
              title={list}
              onClick={() => handleClick(routes[list], list)}
              key={index}
              className={`cursor-pointer    text-lg ${
                activeLink == list ? "text-gray-900" : ""
              }`}
            >
              {list}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <IoMenu title="menu" onClick={toggleSidebar} className="text-2xl   " />
    );
  }
};
