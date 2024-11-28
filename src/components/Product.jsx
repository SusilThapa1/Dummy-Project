"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
// https://dummyjson.com/products
const Product = () => {
  const [productList, setProductList] = useState([]);
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

  const fetchProduct = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProductList(data?.products);
    console.log(data?.products);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="bg-gray-200">
      <div className="flex fixed bg-white w-full pr-24 top-12 rounded-sm  justify-end items-center mt-3 border-b-2 z-10 ">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search products"
          className=" rounded-lg outline-none px-3 py-2 text-gray-900"
        />
        <div
          onClick={() => router.push("/AddToCart")}
          className="cursor-pointer flex jc items-center"
        >
          <FaShoppingCart className="text-gray-800 text-xl cursor-pointer" />
          {addCart > 0 ? (
            <h1 className=" relative text-red-600 text-xl z-20 font-extrabold right-2.5 bottom-2.5">
              {addCart}
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="bg-white text-black fixed top-[101px] w-full z-10 ">
        <ul className="flex justify-around items-center py-4">
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
      <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-2 mt-[110] py-3 overflow-x-hidden  ">
        {filteredProduct.map((product) => (
          <div
            className="flex flex-col justify-center items-center gap-2 p-4 border bg-gray-500 text-center rounded-lg "
            key={product.id}
          >
            <img
              className="h-32 w-32 object-cover "
              src={product.thumbnail}
              alt="thumbnail"
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <div className="flex gap-x-36 justify-center items-center ">
              <h1>${product.price}</h1>
              <span>⭐{product.rating}</span>
            </div>
            <Button
              onClick={CartNumber}
              text="Add to cart"
              bgColor="bg-gray-600"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
