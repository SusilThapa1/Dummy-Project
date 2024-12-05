"use client";

import Button from "./Button";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();
  const [isTypePassword, setIsTypePassword] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handlePass = () => {
    setIsTypePassword(!isTypePassword);
  };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phone: "",
    country: "",
    password: "",
  };
  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", values);
      toast.success("Registered Successfully");
      router.replace("/Products");
    } catch (error) {
      toast.error("Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name cannot be empty";
    }
    if (!values.email) {
      errors.email = "Email cannot be empty";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.phone) {
      errors.phone = "Phone number cannot be empty";
    } else if (!/^(98|97|96)[0-9]{8}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!values.gender) {
      errors.gender = "Gender cannot be empty";
    }
    if (!values.country) {
      errors.country = "Country cannot be empty";
    }
    if (!values.password) {
      errors.password = "Password cannot be empty";
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
        values.password
      )
    ) {
      errors.password = "Invalid password";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  useEffect(() => {
    console.log(formik.touched);
  }, [formik.touched]);

  // console.log("Form data:", formik.values);
  const [countryList, setCountryList] = useState([]);

  const fetchCountryList = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();

      // Extracting country names and flags
      const countries = json.map((country) => country.name.common);
      setCountryList(countries);
      // console.log(countries);
    } catch (error) {
      console.log("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountryList();
  }, []);

  return (
    <div className="flex justify-center items-center w-full text-lg  ">
      <div className="flex flex-col justify-center items-center ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col  p-5 gap-2 text-black"
        >
          <label htmlFor="name" className="text-gray-200">
            Name
          </label>
          <input
            className="rounded-md p-2 outline-none"
            type="text"
            placeholder="Enter the name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <span className="text-red-600">{formik.errors.name}</span>
          ) : null}

          <label htmlFor="email" className="text-gray-200">
            Email
          </label>
          <input
            className="rounded-md p-2 outline-none"
            type="email"
            placeholder="something@gmail.com"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="text-red-600">{formik.errors.email}</span>
          ) : null}

          <label className="text-gray-200">Gender</label>
          <div className="flex gap-1">
            <label htmlFor="male" className="text-gray-200">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              readOnly
            />

            <label htmlFor="female" className="text-gray-200">
              Female
            </label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="radio"
              name="gender"
              id="female"
              value="female"
              readOnly
            />
          </div>
          {formik.errors.gender && formik.touched.gender ? (
            <span className="text-red-600">{formik.errors.gender}</span>
          ) : null}

          <label htmlFor="phone" className="text-gray-200">
            Phone
          </label>
          <input
            className="rounded-md p-2 outline-none"
            type="text"
            placeholder="only phone number"
            id="phone"
            name="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <span className="text-red-600">{formik.errors.phone}</span>
          ) : null}

          <label htmlFor="country" className="text-gray-200">
            Country
          </label>
          <select
            className="rounded-md p-2 outline-none"
            name="country"
            id="country"
            value={formik.values.country}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Choose Country"
          >
            <option value="" disabled hidden>
              Choose Country
            </option>
            {/* {Data.map((country, index) => (
            <option value={country.name} key={index}>
              {country.name}
            </option>
          ))} */}
            {countryList.map((country, index) => (
              <option
                className="flex items-center g-5"
                value={country}
                key={index}
              >
                {country}
              </option>
            ))}
          </select>
          {formik.errors.country && formik.touched.country ? (
            <span className="text-red-600">{formik.errors.country}</span>
          ) : null}

          <label htmlFor="password" className="text-gray-200">
            Password
          </label>
          <div className="flex w-full relative  items-center ">
            <input
              className="rounded-md p-2 outline-none w-full"
              title="Must be atleast one uppercase letter, atleast one lowercase letter, atleast one digit, atleast one special characterr and atleast 8 characters long"
              type={isTypePassword ? "password" : "text"}
              placeholder="Enter password"
              id="password"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <span
              onClick={handlePass}
              className="absolute right-3  "
              title={isTypePassword ? "Show password" : "Hide password"}
            >
              {isTypePassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-red-600">{formik.errors.password}</span>
          ) : null}

          <Button type="submit" text="Register" bgColor="bg-sky-500" />
        </form>
        <div className="w-full px-5">
          <Button
            type="button"
            onClick={() => router.push("/Login")}
            text="Already have an account?"
            bgColor="bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

//export default function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     phone: "",
//     country: "",
//     password: "",
//   });
//   const [formik, setformik] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setformik(formData);
//     console.log(formData);
//   };
//   return (
//     <div className="flex justify-center items-center gap-32   text-lg  ">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col w-fit p-5 gap-4 text-black"
//         action=""
//       >
//         <label htmlFor="name">Name</label>
//         <input
//           className="rounded-md p-2 outline-none"
//           type="text"
//           placeholder="Enter the name"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           className="rounded-md p-2 outline-none"
//           type="email"
//           placeholder="something@gmail.com"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//
//         />
//         <label>Gender</label>
//         <div className="flex gap-1">
//           <label htmlFor="male">Male</label>
//           <input
//             onChange={handleChange}
//             type="radio"
//             name="gender"
//             id="male"
//             value="male"
//             readOnly
//           />

//           <label htmlFor="female">Female</label>
//           <input
//             onChange={handleChange}
//             type="radio"
//             name="gender"
//             id="female"
//             value="female"
//             readOnly
//           />
//         </div>

//         <label htmlFor="phone">Phone</label>
//         <input
//           className="rounded-md p-2 outline-none"
//           type="text"
//           placeholder="only phone number"
//           id="phone"
//           name="phone"
//           onChange={handleChange}
//
//         />
//         <label htmlFor="country">Country</label>
//         <select
//           className="rounded-md p-2 outline-none"
//           name="country"
//           id="country"
//           value={formData.country}
//           onChange={handleChange}
//           placeholder="Choose Country"
//         >
//           <option value="" disabled hidden>
//             Choose Country
//           </option>
//           {Data.map((country, index) => (
//             <option value={country.name} key={index}>
//               {country.name}
//             </option>
//           ))}
//         </select>

//         <label htmlFor="password">Password</label>
//         <input
//           className="rounded-md p-2 outline-none"
//           type="password"
//           placeholder="Enter password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//
//         />
//         <Button text="Register" bgColor="bg-white" />
//       </form>
//       {formData && (
//         <div className=" flex flex-col items-start justify-center gap-4">
//           <h1>Form Data:</h1>
//           <p>Name: {formik?.name}</p>
//           <p>Email: {formik?.email}</p>
//           <p>Phone number: {formik?.phone}</p>
//           <p>Country: {formik?.country}</p>
//           <p>Gender: {formik?.gender}</p>
//           <p>Password: {formik?.password}</p>
//         </div>
//       )}
//     </div>
//   );
// }
