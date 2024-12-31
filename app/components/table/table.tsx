import React from "react";
import { Player } from "@/src/types";
import Cell from "./cell";
import Row from "./row";

const Table = ({ data, headers }: { data: Player[]; headers: string[] }) => {
  return (
    <div className="px-2 py-2">
      <div className="grid w-full place-content-center relative">
        <div className="grid-rows-subgrid">
          <table className="max-w-screen-lg text-sm text-center text-gray-500 ">
            <thead className="text-gray-400 uppercase bg-gray-700">
              <tr>
                {headers.map((head) => (
                  <Cell key={head} value={head} addClass="font-extrabold" />
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((player: Player, i: number) => {
                return <Row key={i} player={player} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
