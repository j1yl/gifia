import React from "react";

const getData = async () => {
  const res = await fetch("endpoint");

  if (!res.ok) {
    throw new Error("Failed to get data");
  }

  return res.json();
};

const Content = () => {
  const data = getData();
  console.log(data);

  return <main></main>;
};

export default Content;
