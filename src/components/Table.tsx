import { TableBodyProps } from "@/types";
import React from "react";

const TableHeader = ({ headerList = [] }: { headerList: String[] }) => {
  return (
    <thead className=" bg-gray-500">
      {headerList &&
        headerList.map((header, index) => (
          <th
            className="px-6 py-3 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider"
            key={index}
          >
            {header}
          </th>
        ))}
    </thead>
  );
};

const TableBody = ({ bodyList }: { bodyList: TableBodyProps[] }) => {
  return (
    <tbody>
      {bodyList &&
        bodyList.map((body, rowIndex) => (
          <tr className="bg-white" key={rowIndex}>
            {Object.values(body).map((cell, cellIndex) => (
              <td
                className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                key={cellIndex}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};

export default function Table({
  headerList,
  bodyList,
}: {
  headerList: String[];
  bodyList: TableBodyProps[];
}) {
  return (
    <div>
      {" "}
      <table className="min-w-full divide-y  divide-gray-200">
        <TableHeader headerList={headerList} />
        <TableBody bodyList={bodyList} />
      </table>
    </div>
  );
}
