"use client";
import Button from "@/components/Button";
import Product from "@/components/Product";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/Login");
  };
  return (
    <div className="h-full   flex justify-center items-center px-14 text-gray-200 ">
      <div className="flex flex-col justify-center items-center gap-5 w-1/3">
        <h1 className="font-bold text-6xl leading-relaxed">
          Hello, my name is <span className="text-sky-500">Susil Thapa</span>
        </h1>

        <p className="text-3xl font-bold ">
          I'm from Nepal and I am a{" "}
          <span className="text-sky-500">Frontend Developer</span>
        </p>
        <div className="flex self-start gap-5">
          <Button
            onClick={() => router.push("/Products")}
            text="Products"
            bgColor="bg-sky-500"
          />
          <Button text="Login" bgColor="bg-white" onClick={handleLoginClick} />
        </div>
      </div>
      <div className="w-1/2 flex justify-center rounded-[50%] items-center">
        <img
          className="w-96 h-96 object-cover rounded-[50%] border-8 border-sky-500"
          src="/images/img1.jpg"
        />
      </div>
    </div>
  );
}
