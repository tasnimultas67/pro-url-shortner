import Link from "next/link";
import React from "react";

const Footer = () => {
  const dateYear = new Date().getFullYear();
  return (
    <div className="text-center text-sm text-gray-500">
      <h3>
        ©{dateYear} Tasnimul. All Rights Reserved. Developed by{" "}
        <Link href="https://tasnimul.vercel.app/" target="_blank">
          Tasnimul Haque
        </Link>
      </h3>
    </div>
  );
};

export default Footer;
