import React, { ReactNode } from "react";

interface IProps {
  onClick?: () => void;
  name: string;
  classN?: string;
  children?: ReactNode;
}
export default function Button({ onClick, name, classN, children }: IProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-md shadow-sm bg-[#9102F0] text-white  transition-all border-none  hover:bg-[#3D0263] ${classN}`}
    >
      {children}
      {name}
    </button>
  );
}
