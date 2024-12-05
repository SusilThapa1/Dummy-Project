"use client";
import { FaShoppingCart } from "react-icons/fa";

const CartNumber = ({ onClick }) => {
  return (
    <div>
      <FaShoppingCart onClick={onClick} className="text-gray-800 text-xl  " />
    </div>
  );
};

export default CartNumber;
