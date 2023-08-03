import Link from "next/link";
import React from "react";
import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <div className="fixed bg-[#04020F] text-white w-full left-0 right-0 top-0 z-[999] flex justify-center lg:justify-between items-center flex-wrap py-6 px-6 lg:px-24 max-w-7xl mx-auto">
      <Link href="/">
        <div className="flex items-center justify-start pb-6 lg:pb-0">
          <div className="font-black uppercase leading-4 text-lg">
            <p className="text-accent">ORDINALS INDEX</p>
          </div>
        </div>
      </Link>
      <SearchBar />
    </div>
  );
}
