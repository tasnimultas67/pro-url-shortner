"use client";
import { Copy, Download, Link2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const ShortenerForm = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const qrCodeRef = useRef(null);

  async function shortURL(e) {
    e.preventDefault();
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );
    if (response.ok) {
      const data = await response.text();
      setShortenedUrl(data);
    } else {
      alert("Error shortening URL");
    }
  }

  const handleDownload = () => {
    const padding = 10; // Padding size in pixels
    const qrCanvas = qrCodeRef.current.querySelector("canvas");
    const qrSize = qrCanvas.width;
    const size = qrSize + padding * 2; // Total size including padding

    // Create a new canvas for the download with padding
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");

    // Fill the background with white (optional)
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, size, size);

    // Draw the QR code with padding
    context.drawImage(qrCanvas, padding, padding, qrSize, qrSize);

    // Generate the image data URL
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `${shortenedUrl.replace(/https?:\/\//, "")}.png`; // Set file name to shortened URL without protocol
    link.click();
  };

  return (
    <div className="w-full">
      {/* Form */}
      <form
        onSubmit={shortURL}
        className="flex justify-center items-center w-full"
      >
        <input
          className="p-2 border border-gray-300 rounded-md text-sm w-full"
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
        <div className="bg-blue-100 p-4 mt-4 rounded-md w-full mx-auto flex flex-col md:flex-row gap-5 items-center md:justify-between justify-center">
          <div>
            <p className="font-semibold">Shortened URL:</p>
            <p>{shortenedUrl}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => {
                navigator.clipboard.writeText(shortenedUrl);
                alert("Copied to clipboard");
              }}
            >
              <Copy className="size-4"></Copy>
            </button>
          </div>
          {/* QR Code */}
          <div className="space-y-2 p-3 bg-gray-100 rounded-md shadow-xl">
            <div
              ref={qrCodeRef}
              className="bg-white p-2 rounded border border-gray-300"
            >
              <QRCodeCanvas value={shortenedUrl} size={150} level="H" />{" "}
              {/* Display size */}
            </div>
            <button
              className="flex items-center justify-center gap-2 text-xs bg-blue-500 hover:bg-blue-800 transition-all text-white px-4 py-2 rounded-md w-full"
              onClick={handleDownload}
            >
              <Download className="size-4"></Download> QR Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortenerForm;
