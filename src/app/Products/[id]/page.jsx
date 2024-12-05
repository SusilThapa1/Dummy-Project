"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import BackForward from "@/components/BackForward";
import { ProductDetailsCardSkeleton } from "@/components/Loader";
import Button from "@/components/Button";
import Cart from "@/components/Cart";

const ProductDetails = () => {
  const params = useParams();

  const [productDetails, setProductDetails] = useState([]);
  const [quantity, setQuantity] = useState(0); // Displayed quantity
  const [tempQuantity, setTempQuantity] = useState(0); // Temporary input value

  const cartNumber = () => {
    setQuantity(tempQuantity); // Update the displayed quantity when button is clicked
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/Products/" + params.id
      );
      const resJson = await response.json();
      setProductDetails(resJson);
      console.log(resJson);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(productDetails);
  return (
    <>
      <div className="w-full border-b-2 fixed py-3 pr-10 flex justify-between items-center bg-sky-500">
        <BackForward />
        <div className="relative flex justify-center items-center gap-3">
          <Cart />
          {quantity > 0 && (
            <span className="text-red-500 absolute bottom-2 text-xl font-bold">
              {quantity}
            </span>
          )}
        </div>
      </div>
      {productDetails?.length === 0 ? (
        <ProductDetailsCardSkeleton />
      ) : (
        <div className="h-[100vh] md:h-screen-minus-128  pt-16 bg-gray-400 px-0 md:px-10 flex justify-center items-center">
          <div className=" max-w-xl md:max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg">
            {/* Product Image and Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
              {/* Product Image */}
              <div className="flex justify-center items-center  ">
                {productDetails?.images && (
                  <Image
                    src={productDetails?.images[0]}
                    width={500}
                    height={500}
                    alt="Product"
                    className="  rounded-md"
                    priority
                  />
                )}
              </div>
              {/* Product Details */}
              <div className="flex flex-col justify-between text-center md:text-left p-6 gap-3 md:gap-2">
                <h1 className="mb-4 text-2xl font-bold text-gray-800">
                  {productDetails?.title}
                </h1>
                <p className="mb-6 text-gray-600">
                  {productDetails?.description}
                </p>
                <div className="mb-6 text-gray-800">
                  <span className="text-2xl font-bold">
                    ${productDetails?.price}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {productDetails?.discountPercentage}% Discount
                  </span>
                </div>
                <div className="flex items-center self-center md:self-auto gap-5">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantity
                  </label>
                  <input
                    onChange={(e) => setTempQuantity(Number(e.target.value))}
                    id="quantity"
                    type="number"
                    min="0"
                    className="w-20 p-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>
                <Button
                  onClick={cartNumber}
                  bgColor="bg-sky-600"
                  text="Add to Cart"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
