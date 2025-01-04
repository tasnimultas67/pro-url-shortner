"use client";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-center">
            <h3 className="text-5xl font-bold tracking-tight">Link Shortner</h3>
            <p className="text-lg mt-4">Shorten your links with ease</p>
            <p> </p>
          </div>
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
            <div className="bg-blue-100 p-4 mt-4 rounded-md w-9/12 text-center space-y-3">
              <p className="font-semibold">Shortened URL:</p>
              <Link
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortenedUrl}
              </Link>
            </div>
          )}
        </div>
        {/* Featured Image */}
        <div className="h-screen">
          <Image
            className="object-cover h-screen"
            src="https://images.unsplash.com/photo-1678924665955-5dcccbf904f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Link Shortner Image"
            width={700}
            height={1000}
          />
        </div>
      </div>
    </>
  );
}
