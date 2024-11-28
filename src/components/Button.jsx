import React from "react";

const Button = ({ text, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-black font-semibold rounded-lg   ${bgColor} transition-[all_2s_ease-in] hover:bg-opacity-60 hover:transition-[all_2s_ease-in]`}
    >
      {text}
    </button>
  );
};

export default Button;
