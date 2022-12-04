import React from "react";

const APIKEY = process.env.GIPHY_API;

// https://api.giphy.com/v1/gifs/search?

const getData = async (query: string) => {
  const limit = 25;
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`
  );

  if (!res.ok) {
    throw new Error("Failed to get data");
  }

  return res.json();
};

const Content = ({ query }: { query: string }) => {
  const data = getData(query);
  console.log(data);

  return <main></main>;
};

export default Content;
