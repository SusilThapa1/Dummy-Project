"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/Signup");
  };
  return (
    <div className="h-full flex justify-center md:flex-col-reverse lg:flex-row items-center px-14 text-gray-200 ">
      <div className="flex flex-col justify-center text-center md:text-left items-center gap-5 lg:w-1/3 sm:w-full overflow-hidden">
        <h1 className="font-bold text-5xl md:text-[3.5vw] leading-relaxed">
          Hello, my name is <span className="text-sky-500">Susil Thapa</span>
        </h1>

        <p className=" text-2xl md:text-[2vw] font-bold ">
          I'm from Nepal and I am a{" "}
          <span className="text-sky-500">Frontend Developer</span>
        </p>
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap lg:self-start  self-center gap-5">
          <Button
            onClick={() => router.push("/Products")}
            text="Products"
            bgColor="bg-sky-500"
          />
          <Button
            type="button"
            text="Signup"
            bgColor="bg-white"
            onClick={handleLoginClick}
          />
        </div>
      </div>
      <div className="w-1/2 justify-center hidden  md:flex  rounded-[50%] items-center">
        <img
          className="lg:w-96 lg:h-96 md:w-48 md:h-48 object-cover rounded-[50%] border-4 border-sky-500"
          src="/images/img1.jpg"
        />
      </div>
    </div>
  );
}
