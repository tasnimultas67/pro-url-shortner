"use client";
import { Link2 } from "lucide-react";
import React, { useState } from "react";
// import CopyToClipboardButton from "./CopyToClipBoardButton";

const ShortenerForm = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  async function shortURL(e) {
    e.preventDefault();
    const response = await fetch(`
    https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    if (response.ok) {
      const data = await response.text();
      setShortenedUrl(data);
    } else {
      alert("Error shortening URL");
    }
  }

  return (
    <div className="w-full">
      {/* Form */}
      <form
        onSubmit={shortURL}
        className="flex justify-center items-center w-full"
      >
        <input
          className="p-2 border border-gray-300 rounded-md text-sm w-6/12"
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 flex items-center justify-center gap-1 text-sm"
          type="submit"
        >
          Shorten <Link2 className="size-4" />
        </button>
      </form>
      {shortenedUrl && (
        <div className="bg-blue-100 p-4 mt-4 rounded-md w-10/12 md:w-3/12 text-center space-y-3 mx-auto">
          <p className="font-semibold">Shortened URL:</p>
          <p>{shortenedUrl}</p>
          {/* <CopyToClipboardButton text={shortenedUrl} /> */}
        </div>
      )}
    </div>
  );
};

export default ShortenerForm;
