import React from "react";
import Link from "next/link";

const Button = ({ title, link }: { title: string; link: string }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div className="px-2">
      <button
        className="outline-none text-white inline-flex justify-center p-0.5 mx-1 rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 hover:text-gray-900"
        value={title}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <Link
          href={link}
          className={isClicked ? btnStyle["on"] : btnStyle["off"]}
        >
          <span>{title}</span>
        </Link>
      </button>
    </div>
  );
};

const btnStyle: { [key: string]: string } = {
  off: "px-5 py-2.5 transition-all ease-in duration-100 bg-dark-blue rounded-lg hover:bg-opacity-0",
  on: "px-5 py-2.5 text-gray-900",
};

export default Button;
