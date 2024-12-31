import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="/shuttlecock.png" width={36} height={36} alt="Logo" />
      <span className="self-center text-2xl font-extrabold">Badminton</span>
    </a>
  );
};

export default Logo;
