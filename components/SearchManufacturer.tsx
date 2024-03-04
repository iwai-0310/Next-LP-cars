"use client";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import { manufacturers } from "@/constants";
const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  //   add state to handle query for onChange in combobox input field
  const [query, setQuery] = useState("");

  const filteredManufacturers=query==="" ?
  manufacturers:manufacturers.filter((item:string)=>(
    item.toLowerCase().replace(/\s+/g,"")
    .includes(query.toLowerCase().replace(/\s+/g,""))
  ))

  return (
    <div className="search-manufacturer">
      {/* add combobox here */}
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            {/* add logo image here */}
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car-logo iamge"
            />
          </Combobox.Button>
          {/* next to the button add combobox input */}
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="volkswagen"
            displayValue={(manufacture: string) => manufacture}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* add animations to the input section here */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {/* add some elements to the transition */}
            <Combobox.Options>
                {/* if the filterdMan has length zero and query is not empty then show the empty option */}
                {filteredManufacturers.length==0 &&
                query !== "" && (
                    <Combobox.Option
                    value={query}
                    className="Search-manufacturer__option">
Create "{query}"
                    </Combobox.Option>
                )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
