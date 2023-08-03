import React from "react";

interface IProps {
  type: string;
  name?: string;
  classN?: string;
  placeH?: string;
}
export default function Input({ type, name, classN, placeH }: IProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeH}
      className={`w-full px-4 py-2 bg-transparent text-white focus:outline-none focus:shadow-outline ${classN}`}
    />
  );
}
