import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

export default function index() {
  return (
    <>
      <div className="flex relative items-center justify-center w-full md:max-w-md max-w-lg mx-auto pb-6 lg:pb-0">
        <div className="relative w-full flex justify-between items-center border xl:border-2 border-[#9102F0] rounded-md">
          <Input
            type="text"
            name="search"
            placeH="Enter ID / Sats / Number / Collection"
          />
          <Button name="Search" />
        </div>
        <div className="absolute top-[100%] bg-[#9102F0] w-full max-h-[50vh] overflow-y-scroll small-scrollbar"></div>
      </div>
      <div className="bg-black hidden lg:flex justify-end">
        <Button name="Connect Wallet">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
          </svg>
        </Button>
      </div>
    </>
  );
}
