import Button from "@/components/Button";
import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center  text-left items-center h-full w-full">
      <form className="flex flex-col items-center gap-10 text-xl  w-[25%] bg-transparent backdrop-blur-3xl  px-3 py-5  ">
        <div className="flex gap-2 w-full">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            className=" py-1 px-2 outline-none rounded-md text-gray-900 "
          />
        </div>
        <div className="flex gap-2 w-full ">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="eg:-example@gmail.com"
            className=" py-1 px-2 outline-none rounded-md text-gray-900"
          />
        </div>
        <div className="flex gap-2 w-full">
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" *******"
            className=" py-1 px-2 outline-none rounded-md text-gray-900"
          />
        </div>
        <div className="self-end">
          <Button text="Submit" bgColor="bg-sky-500" />
        </div>
      </form>
    </div>
  );
}
