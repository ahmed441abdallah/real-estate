import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Bath, BedIcon, Car, CarFront } from "lucide-react";
const SelectFiltering = ({
  setBedCount,
  setBathCount,
  setParkingCount,
  getLatestListing,
}) => {
  return (
    <div className="mt-2 p-2 grid grid-cols-2 md:grid-cols-4  gap-2">
      <Select onValueChange={(value) => setBedCount(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Bedroom" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Bedroom</SelectLabel>
            <SelectItem value="2">
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <BedIcon />
                2+
              </h2>
            </SelectItem>
            <SelectItem value="3">
              {" "}
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <BedIcon />
                3+
              </h2>
            </SelectItem>
            <SelectItem value="4">
              {" "}
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <BedIcon />
                4+
              </h2>
            </SelectItem>
            <SelectItem value="5">
              {" "}
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <BedIcon />
                5+
              </h2>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => {
          setBathCount(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Bath" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Bathroom</SelectLabel>
            <SelectItem value="1">
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <Bath />
                +1
              </h2>
            </SelectItem>
            <SelectItem value="2">
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <Bath />
                +2
              </h2>
            </SelectItem>
            <SelectItem value="3">
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <Bath />
                +3
              </h2>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => {
          setParkingCount(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Parking" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Parking</SelectLabel>
            <SelectItem value="1">
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <CarFront />
                +1
              </h2>
            </SelectItem>
            <SelectItem value="2">
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <CarFront />
                +2
              </h2>
            </SelectItem>
            <SelectItem value="3">
              <h2 className="flex gap-2 items-center cursor-pointer p-2">
                <CarFront />
                +3
              </h2>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <button
        className=" bg-slate-50 px-2 py-1 rounded-md border text-red-600 "
        onClick={getLatestListing}
      >
        Reset All{" "}
      </button>
    </div>
  );
};

export default SelectFiltering;
