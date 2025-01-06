import Image from "next/image";
import React, { FC, HTMLAttributes } from "react";

type TCabin = {
  id: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

interface TCabinCardProps
  extends HTMLAttributes<HTMLDivElement> {
  cabin: TCabin;
  className?: string;
}

const CabinCard: FC<TCabinCardProps> = (props) => {
  const { cabin, ...rest } = props;
  const {
    id,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  return (
    <div
      className="flex border-primary-800 border"
      {...rest}
    >
      <Image
        src={image}
        alt={`Cabin ${name}`}
        className="flex-1 border-r border-primary-800"
      />

      <div className="flex-grow"></div>
    </div>
  );
};

export default CabinCard;
