"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import Button from "./Button";

const Login = () => {
  const router = useRouter();
  const [isTypePassword, setIsTypePassword] = useState(true);

  const handlePass = () => {
    setIsTypePassword(!isTypePassword);
  };

  const checkLoggedInUser = (email, password) => {
    if (email === "user@gmail.com" && password === "password") {
      const token = "usertoken!@#$%1234";
      return token;
    }
    return null;
  };

  const checkAdminUser = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin") {
      const token = "admintoken@#$%1234";
      return token;
    }
    return null;
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      if (!values.email || !values.password) {
        toast.warning("Please fill in all fields!");
        return;
      }

      try {
        const userToken = checkLoggedInUser(values.email, values.password);

        if (userToken) {
          document.cookie = `authToken=${userToken}`;
          toast.success("Login successfully!");
          router.replace("/Products");
          return;
        }

        const adminToken = checkAdminUser(values.email, values.password);

        if (adminToken) {
          document.cookie = `authToken=${adminToken}`;
          toast.success("Login successfully!");
          router.replace("/dashboard");
          return;
        }

        toast.error("Invalid credentials!");
      } catch (error) {
        toast.error("Login failed!");
      }
    },
  });

  return (
    <div className="h-screen flex justify-center items-center w-full text-lg">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-96 p-5 gap-4 text-black"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-200">
            Email
          </label>
          <input
            className="rounded-md p-2 outline-none border border-gray-300"
            type="email"
            placeholder="something@gmail.com"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-gray-200">
            Password
          </label>
          <div className="flex items-center relative">
            <input
              className="rounded-md p-2 outline-none w-full border border-gray-300"
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
              className="absolute right-3 cursor-pointer text-gray-500"
              title={isTypePassword ? "Show password" : "Hide password"}
            >
              {isTypePassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>
        </div>

        <Button text="Login" bgColor="bg-sky-500" type="submit" />
      </form>
    </div>
  );
};

export default Login;
