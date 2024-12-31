import React from "react";

const Cell = ({
  value,
  addClass,
}: {
  value: string | number;
  addClass?: string;
}) => {
  const className: string = "px-4 py-3 " + addClass;

  return <td className={className}>{value}</td>;
};

export default Cell;
