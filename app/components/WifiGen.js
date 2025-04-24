"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { jsPDF } from "jspdf";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Download, Link2, QrCode } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const WifiGen = () => {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState("WPA");
  const [qrCode, setQrCode] = useState("");
  const [passChecked, setPassUnChecked] = useState("true");

  const dateYear = new Date().getFullYear();

  // Generate the QR code
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

  // Download the QR code image
  const downloadQRCode = () => {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "wifi_qr_code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generate the PDF template
  const generatePDF = () => {
    if (!qrCode || !ssid) return;

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const wifiIcon = "/WIFI-ICON.png";

    doc.addImage(wifiIcon, "PNG", (pageWidth - 40) / 2, 50, 40, 40);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(38);
    doc.text("Connect to WiFi", pageWidth / 2, 100, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Network Name: ${ssid}`, pageWidth / 2, 113, { align: "center" });

    if (passChecked) {
      doc.text(`Network Password: ${password}`, pageWidth / 2, 120, {
        align: "center",
      });
    }

    doc.addImage(qrCode, "PNG", (pageWidth - 75) / 2, 125, 75, 75);
    doc.setFontSize(14);
    doc.text("Scan to connect!", pageWidth / 2, 205, { align: "center" });

    const dateYear = new Date().getFullYear();
    doc.setFontSize(8);
    doc.text(
      `© ${dateYear} Tasnimul Haque | Proudly developed at www.tinywaveqr.vercel.app`,
      pageWidth / 2,
      290,
      { align: "center" }
    );

    doc.save("wifi_qr_template.pdf");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          {/* SSID Input */}
          <div className="space-y-1">
            <label>
              Wifi Name/SSID <span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border border-gray-300 rounded-md text-sm w-full"
              type="text"
              value={ssid}
              placeholder="Enter your wifi name"
              onChange={(e) => setSsid(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label>
              Wifi Password <span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border border-gray-300 rounded-md text-sm w-full"
              type="text"
              value={password}
              placeholder="Enter your wifi password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Encryption Type Selector */}
          <div className="space-y-1">
            <label>Encryption Type:</label>
            <Select onValueChange={(value) => setEncryption(value)}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder={encryption} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WPA/WPA2">WPA/WPA2</SelectItem>
                <SelectItem value="WEP">WEP</SelectItem>
                <SelectItem value="nopass">None</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Generate QR Code Button */}
          <button
            className={`bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm flex items-center justify-center gap-2 hover:bg-blue-800 transition-all ${
              !password || !ssid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="button"
            onClick={generateQRCode}
            disabled={!password || !ssid} // Properly setting the disabled attribute
          >
            <QrCode className="size-4" />
            Generate QR Code
          </button>
        </form>
      </div>

      {/* QR Code Preview & Buttons */}
      <div className="flex flex-col items-end justify-center">
        {!qrCode && (
          <div className="w-[250px]">
            <p className="text-xs text-center">
              Your Wifi QR Code will show here!
            </p>
          </div>
        )}
        {qrCode && (
          <div className="w-[250px] flex items-center justify-end">
            <div className="p-4 flex flex-col items-center justify-start border border-gray-300 bg-white rounded-xl">
              <img src={qrCode} alt="WiFi QR Code" className="m-2" />

              {/* Download QR Code Button */}
              <button
                className="flex items-center justify-center gap-2 text-xs bg-blue-500 hover:bg-blue-800 transition-all text-white px-4 py-2 rounded-md"
                type="button"
                onClick={downloadQRCode}
              >
                <Download className="size-4" />
                Download QR Code
              </button>

              {/* Show password in template */}
              <div className="flex items-center space-x-2 text-xs mt-2">
                <Switch
                  id="show-password"
                  checked={passChecked}
                  onCheckedChange={() => setPassUnChecked(!passChecked)}
                />
                <label htmlFor="show-password">Show password</label>
              </div>

              {/* Download Full Template Button */}
              <button
                className="flex items-center justify-center gap-2 text-xs bg-blue-500 hover:bg-blue-800 transition-all text-white px-4 py-2 rounded-md mt-2"
                type="button"
                onClick={generatePDF}
              >
                <Copy className="size-4" />
                Download Full Template
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WifiGen;
