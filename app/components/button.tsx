import React from "react";
import Link from "next/link";

const Button = ({ title, link }: { title: string; link: string }) => {
  // const changeClass = () => {};

  return (
    <div className="px-2">
      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        value={title}
      >
        <Link
          href={link}
          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          <span>{title}</span>
        </Link>
      </button>
    </div>
  );
};

export default Button;
