import Link from "next/link";
import Image from "next/image";
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

const Content = async ({ query }: { query: string }) => {
  const { data } = await getData(query);

  // return only the info i want (id, title, url)
  const organizedData = data.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images.downsized.url,
    };
  });

  return (
    <main className="grid grid-cols-2 gap-3 px-4 md:px-16 py-2 max-w-6xl mx-auto">
      <div className="bg-zinc-800 text-white text-xl flex flex-wrap font-bold text-left justify-between p-6 items-center rounded-xl">
        <p className="w-full md:w-2/3">
          Click a card to go to its corresponding GIPHY page!
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-16"
        >
          <path d="M11.29,15.29a1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2.84.84,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1,1,0,0,0-.29-.71A1,1,0,0,0,11.29,15.29ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,7A3,3,0,0,0,9.4,8.5a1,1,0,1,0,1.73,1A1,1,0,0,1,12,9a1,1,0,0,1,0,2,1,1,0,0,0-1,1v1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,12,7Z" />
        </svg>
      </div>
      {organizedData.map((item: any) => {
        // return <div key={item.id}>{item.title}</div>;
        return (
          <div
            key={item.id}
            className="p-6 flex flex-col gap-3 bg-zinc-200 rounded-xl"
          >
            <h1 className="text-xl font-bold">{item.title}</h1>
            <div className="w-full">
              <Image src={item.url} alt="preview" width="1920" height="1080" />
            </div>
            <p className="font-semibold">id: {item.id}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Content;
