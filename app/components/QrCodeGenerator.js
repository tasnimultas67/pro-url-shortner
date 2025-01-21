"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Update this line

const QrCodeGenerator = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text to encode"
        value={text}
        onChange={handleChange}
      />
      <QRCodeCanvas value={text} />
    </div>
  );
};

export default QrCodeGenerator;
