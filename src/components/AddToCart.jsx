"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const AddToCart = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.back()}
        text="Go back"
        bgColor="bg-gray-700"
      />
    </div>
  );
};

export default AddToCart;
