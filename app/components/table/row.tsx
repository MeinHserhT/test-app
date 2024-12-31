import React from "react";
import Cell from "./cell";
import { Player } from "@/src/types";

const Row = ({ player }: { player: Player }) => {
  const played: boolean = player.attendance > 0 ? true : false;

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      {Object.values(player).map((value: string | number, i: number) => {
        if (i !== 6 && played) {
          return (
            <Cell key={i} value={value} addClass="text-white font-extrabold" />
          );
        } else if (i === 6) {
          return (
            <Cell
              key={i}
              value={value}
              addClass={
                (+value > 0 ? "text-red-400" : "text-green-400") +
                " font-extrabold"
              }
            />
          );
        } else return <Cell key={i} value={value} />;
      })}
    </tr>
  );
};

export default Row;
