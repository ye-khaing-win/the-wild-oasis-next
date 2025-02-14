import React, { FC } from "react";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import { TFilter } from "../cabins/page";
import { TCabin } from "../types/cabin";

interface TCabinListProps {
  filter: TFilter;
}

const CabinList: FC<TCabinListProps> = async ({
  filter,
}) => {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayCabins: TCabin[] = [];

  if (filter === "all") displayCabins = cabins;

  if (filter === "small")
    displayCabins = cabins.filter(
      (c) => c.maxCapacity <= 3
    );

  if (filter === "medium")
    displayCabins = cabins.filter(
      (c) => c.maxCapacity >= 4 && c.maxCapacity <= 7
    );

  if (filter === "large")
    displayCabins = cabins.filter(
      (c) => c.maxCapacity >= 8
    );

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2">
      {displayCabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
};

export default CabinList;
