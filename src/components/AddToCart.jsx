"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

const AddToCart = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        title="Go back"
        onClick={() => router.back()}
        text={<BiArrowBack className="text-gray-300 font-bold text-xl" />}
      />
      <h1>Nothing to see here</h1>
    </div>
  );
};

export default AddToCart;
