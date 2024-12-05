"use client";

import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie;
    const authToken = cookies
      .split("; ")
      .find((row) => row?.startsWith("authToken="))
      ?.split("=")[1];
    setIsLoggedIn(!!authToken);
  }, []);

  const handleClick = (route, list) => {
    if (list === "Logout") {
      handleLogout();
    } else {
      setActiveLink(list);
      router.push(route);
    }
    setOpenSidebar(false);
  };

  const handleLogout = () => {
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    setActiveLink("");
    toast.success("Logout Successfully!");
    router.push("/");
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const lists = isLoggedIn
    ? ["Home", "Products", "Courses", "FAQ", "Contacts", "Logout"]
    : ["Home", "Products", "Courses", "FAQ", "Contacts", "SignUp"];

  const routes = {
    Home: "/",
    Products: "/Products",
    Courses: "/Courses",
    FAQ: "/FAQ",
    Contacts: "/Contacts",
    SignUp: "/Signup",
    Logout: "#",
  };

  return openSidebar ? (
    <div className="  px-3 flex flex-col bg-sky-600 justify-between transition-all duration-500 ease-in">
      <RiCloseFill
        title="close"
        onClick={toggleSidebar}
        className="text-2xl self-end"
      />
      <ul className="flex h-full flex-col gap-4 pt-5">
        {lists.map((list, index) => (
          <li
            title={list}
            onClick={() => handleClick(routes[list], list)}
            key={index}
            className={`cursor-pointer text-lg ${
              activeLink === list ? "text-gray-900" : ""
            }`}
          >
            {list}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <IoMenu title="menu" onClick={toggleSidebar} className="text-2xl" />
  );
};

export default Sidebar;
