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
    <div>
      <h1>Country List</h1>
      <ul>
        {countryList.map((country, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              style={{ width: "30px", height: "20px", marginRight: "10px" }}
            />
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncAwait;
