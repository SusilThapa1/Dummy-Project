import AsyncAwait from "@/components/AsyncAwait";
import { ProductDetailsCardSkeleton } from "@/components/Loader";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-3 justify-center text-xl items-center   ">
      <p>Contacts are hidden..</p>

      <ProductDetailsCardSkeleton />

      <AsyncAwait />
    </div>
  );
};

export default page;
