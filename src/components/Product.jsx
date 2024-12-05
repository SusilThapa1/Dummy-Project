"use client";
import React, { useEffect, useState } from "react";

import Button from "./Button";
import { useRouter } from "next/navigation";
import { ProductCardSkeleton } from "./Loader";
import Link from "next/link";
import Image from "next/image";
import BackForward from "./BackForward";
import Cart from "@/components/Cart";
import { RiSignalWifiErrorFill } from "react-icons/ri";
// https://dummyjson.com/products
const Product = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchVal, setSearchVal] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const [addCart, setAddCart] = useState(0);
  const CartNumber = () => {
    setAddCart(addCart + 1);
  };

  const categories = ["All", "Beauty", "Fragrances", "Furniture", "Groceries"];
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchVal(value);
  };
  const handleCategory = (category) => {
    setProductCategory(category);
    setActiveLink(category);
  };
  const filteredProduct = productList.filter((prod) => {
    const matchSearch = prod.title
      ?.toLowerCase()
      ?.includes(searchVal.toLowerCase());

    const matchCategory =
      productCategory === "All" || productCategory === ""
        ? true
        : prod.category.toLowerCase() === productCategory.toLowerCase();

    return matchSearch && matchCategory;
  });
  const router = useRouter();
  const gotoCart = () => {
    if (addCart > 0) {
      router.push("/AddToCart");
    }
  };
  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Products not found");
        } else if (res.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          throw new Error("Something went wrong!");
        }
      }
      const data = await res.json();
      setProductList(data?.products);
    } catch (error) {
      if (error instanceof TypeError) {
        setError("Network error: Check your internet connection.");
      } else {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="bg-gray-200">
      <div className="flex fixed bg-white w-full pr-10 top-12 rounded-sm  justify-between items-center mt-3 border-b-2 py-2 gap-5 border-gray-500 z-10 ">
        <BackForward />
        <div className="flex gap-5">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search products here..."
            className=" rounded-lg border-gray-500 border outline-none px-3 py-2 text-gray-900"
          />
          <div
            onClick={gotoCart}
            className="cursor-pointer flex justify-center items-center"
          >
            <Cart />
            {addCart > 0 ? (
              <h1 className=" relative text-red-600 text-xl z-20 font-extrabold right-2.5 bottom-2.5">
                {addCart}
              </h1>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="bg-white text-black fixed top-[118px] w-full z-10 ">
        <ul className="flex justify-around items-center py-4   px-[10vw] gap-10">
          {categories.map((category, index) => (
            <li
              onClick={() => handleCategory(category)}
              className={`cursor-pointer bg-gray-300 px-3 py-2 rounded-lg hover:opacity-80 ${
                activeLink == category ? "bg-gray-700 text-gray-200" : ""
              } `}
              key={index}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-200">
        <div className="flex fixed bg-white w-full pr-20 top-12 rounded-sm justify-between items-center mt-3 border-b-2 py-2 gap-5 border-gray-500 z-10 ">
          <BackForward />
          <div className="flex gap-5">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search products here..."
              className="rounded-lg border-gray-500 border outline-none px-3 py-2 text-gray-900"
            />
            <div
              onClick={gotoCart}
              className="cursor-pointer flex justify-center items-center"
            >
              <Cart />
              {addCart > 0 && (
                <h1 className="relative text-red-600 text-xl z-20 font-extrabold right-2.5 bottom-2.5">
                  {addCart}
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white text-black fixed top-[118px] w-full z-10 ">
          <ul className="flex flex-wrap justify-around items-center py-4 px-[10vw] gap-y-4 gap-x-3">
            {categories.map((category, index) => (
              <li
                onClick={() => handleCategory(category)}
                className={`cursor-pointer bg-gray-300 px-3 py-2 rounded-lg hover:opacity-80 ${
                  activeLink == category ? "bg-gray-700 text-gray-200" : ""
                }`}
                key={index}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Render Skeletons when loading */}
        {isLoading && (
          <div className="w-full pt-36 h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-[1.5vw]">
            {Array(12)
              .fill(null)
              .map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
          </div>
        )}

        {/* Render Error message if there's an error */}
        {error && (
          <div className="w-full pt-36 h-screen-minus-128 grid place-items-center  px-10 gap-[1.5vw]  ">
            <p className="text-center text-red-500 text-xl">{error}</p>
          </div>
        )}

        {/* Render Products after loading */}
        {!isLoading && !error && filteredProduct.length > 0 && (
          <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2 pt-[140px] pb-10 overflow-x-hidden px-10">
            {filteredProduct.map((product) => (
              <div
                key={product.id}
                className="flex flex-col justify-center items-center gap-2 p-4 text-gray-600 bg-gray-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-center rounded-lg "
              >
                <Link href={`/Products/${product.id}`}>
                  <Image
                    width={200}
                    height={200}
                    className="h-36 w-36 object-cover"
                    src={product.thumbnail}
                    alt="thumbnail"
                    title="See details"
                    priority={product.id < 6}
                  />
                </Link>
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-900">{product.description}</p>
                <div className="flex gap-x-36 justify-center items-center font-bold">
                  <h1 title="price">${product.price}</h1>
                  <span title="rating">⭐{product.rating}</span>
                </div>
                <Button
                  title="Add"
                  onClick={CartNumber}
                  text="Add to cart"
                  bgColor="bg-sky-500"
                />
              </div>
            ))}
          </div>
        )}

        {/* Handle case when no products match filters */}
        {!isLoading && !error && filteredProduct.length === 0 && (
          <div className="w-full pt-36 h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-[1.5vw]">
            <p className="text-center col-span-full text-gray-600">
              No products found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
