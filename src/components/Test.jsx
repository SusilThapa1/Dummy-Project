import { ThemeContext } from "@/context";
import React, { useContext } from "react";

const Test = (props) => {
  const theme = useContext(ThemeContext);

  console.log(theme);
  //   console.log(props);
  return <div>Test</div>;
};

export default Test;
