"use client";

import { useState } from "react";
import QRCode from "qrcode";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Download, Link2 } from "lucide-react";
// import { div } from "motion/dist/react-client";
// import { div } from "motion/dist/react-client";

const WifiGen = () => {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState("WPA");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = async () => {
    const wifiDetails = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
    try {
      const qr = await QRCode.toDataURL(wifiDetails, {
        width: 500,
        margin: 1,
        errorCorrectionLevel: "H",
        type: "image/png",
      });
      setQrCode(qr);
    } catch (error) {
      console.error("Error generating QR code", error);
    }
  };

  const downloadQRCode = () => {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "wifi_qr_code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3 ">
          {/* WIFI Name/SSID: */}
          <div className="space-y-1">
            <label className="">WIFI Name/SSID:</label>
            <input
              className="p-2 border border-gray-300 rounded-md text-sm w-full"
              type="text"
              value={ssid}
              placeholder="Enter your wifi name"
              onChange={(e) => setSsid(e.target.value)}
              required
            />
          </div>
          {/* Wifi Password: */}
          <div className="space-y-1">
            <label>Wifi Password:</label>
            <input
              className="p-2 border border-gray-300 rounded-md text-sm w-full"
              type="text"
              value={password}
              placeholder="Enter your wifi password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Encryption Type: */}
          <div className="space-y-1">
            <label>
              Encryption Type:
              {/* <select
              value={encryption}
              onChange={(e) => setEncryption(e.target.value)}
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">None</option>
            </select> */}
            </label>
            <Select onChange={(e) => setEncryption(e.target.value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={encryption} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WPA">WPA/WPA2</SelectItem>
                <SelectItem value="WEP">WEP</SelectItem>
                <SelectItem value="nopass">None</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <button
            className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm"
            type="button"
            onClick={generateQRCode}
          >
            Generate QR Code
          </button>
        </form>
      </div>
      <div>
        {qrCode && (
          <div className="px-10 pb-10 flex flex-col items-center justify-start">
            <div className="p-4 flex flex-col items-center justify-start border rounded-xl">
              <img src={qrCode} alt="WiFi QR Code" className="m-2" />
              <button
                className="flex items-center justify-center gap-2 text-xs bg-blue-500 hover:bg-blue-800 transition-all text-white px-4 py-2 rounded-md"
                type="button"
                onClick={downloadQRCode}
              >
                <Download className="size-4"></Download>Download QR Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WifiGen;
