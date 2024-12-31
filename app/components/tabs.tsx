"use client";
import React from "react";
import Button from "./button";

const Tabs = ({ contents }: { contents: string[] }) => {
  return (
    <div className="w-full my-2 p-4 rounded-lg bg-dark-blue">
      <div className="flex flex-row">
        {contents.map((ct) => {
          return <Button key={ct} link={"/" + ct} title={ct} />;
        })}
      </div>

      <div className=""></div>
    </div>
  );
};

export default Tabs;
