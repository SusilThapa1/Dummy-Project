// "use client";
// import Button from "@/components/Button";
// import React, { useState } from "react";

// export default function Login() {
//   // const [elements, setElements] = useState([
//   //   "Apple",
//   //   "Samsung",
//   //   "Oneplus",
//   //   "Motorolla",
//   // ]);
//   // const [input, setInput] = useState("");
//   // function handleSubmit(e) {
//   //   e.preventDefault();
//   //   const newElement = [...elements];
//   //   if (!input.trim()) {
//   //     return console.log("Field cannot be empty");
//   //   }
//   //   newElement.push(input);
//   //   setElements(newElement);
//   //   setInput("");
//   // }
//   // const handleChange = (e) => {
//   //   const brand = e.target.value;
//   //   setInput(brand);
//   // };
//   const [name, setName] = useState("");
//   const [counttry, setCountry] = useState("");
//   const [gender, setGender] = useState("");

//   return (
//     <div className="flex justify-center  text-left items-center h-full w-full">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col items-center gap-10 text-xl  w-[25%] bg-transparent backdrop-blur-3xl  px-3 py-5  "
//       >
//         <div className="flex gap-2 w-full">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Full name"
//             className=" py-1 px-2 outline-none rounded-md text-gray-900 "
//           />
//         </div>
//         <div className="flex gap-2 w-full ">
//           <label htmlFor="name">Email:</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="eg:-example@gmail.com"
//             className=" py-1 px-2 outline-none rounded-md text-gray-900"
//           />
//         </div>
//         <div className="flex gap-2 w-full">
//           <label htmlFor="name">Password:</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder=" *******"
//             className=" py-1 px-2 outline-none rounded-md text-gray-900"
//           />
//         </div>
//         <div className="flex gap-2 w-full">
//           <label htmlFor="name">Brand:</label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="brand"
//             id="brand"
//             placeholder=" brand"
//             className=" py-1 px-2 outline-none rounded-md text-gray-900 "
//             value={input}
//           />
//         </div>
//         <div className="self-end">
//           <Button text="Submit" bgColor="bg-sky-500" />
//         </div>
//       </form>
//       <div>
//         <h1>Lists</h1>
//         <ul>
//           {elements.map((element, index) => (
//             <li key={index}>{element}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
import AsyncAwait from "@/components/AsyncAwait";
import Register from "@/components/Register";
import React from "react";

export default function page() {
  return (
    <div>
      <Register />
      <AsyncAwait />
    </div>
  );
}
