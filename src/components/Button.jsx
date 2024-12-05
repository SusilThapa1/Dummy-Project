import React from "react";

const Button = ({ text, bgColor, onClick, title, type }) => {
  return (
    <button
      title={title}
      onClick={onClick}
      type={type}
      className={`px-6 py-2 text-black font-semibold rounded-lg ${bgColor} transition-[all_2s_ease-in] hover:bg-opacity-60 hover:transition-[all_2s_ease-in] w-full`}
    >
      {text}
    </button>
  );
};

export default Button;
