"use client";
import React, { useEffect, useState } from "react";

const AsyncAwait = () => {
  //   const [value, setValue] = useState();
  //   const fetchData = new Promise((res, rej) => {
  //     const a = 3;
  //     const b = 2;
  //     if (a + b === 5) {
  //       res("success");
  //     } else {
  //       rej("failed");
  //     }
  //   });
  //   useEffect(() => {
  //     fetchData
  //       .then((resValue) => {
  //         setValue(resValue);
  //       })
  //       .catch((rejVal) => {
  //         setValue(rejVal);
  //       });
  //   }, []);
  const [countryList, setCountryList] = useState([]);

  const fetchCountryList = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();

      // Extracting country names and flags
      const countries = json.map((country) => ({
        name: country.name.common,
        flag: country.flags.png,
      }));
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
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-2xl ">Country List</h1>
      <ul className="w-full grid grid-cols-4 justify-center items-center  gap-10">
        {countryList.map((country, index) => (
          <li
            key={index}
            className=" flex justify-center flex-col gap-5 items-center"
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-20 h-20  "
            />
            <h1 className="text-center">{country.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncAwait;
