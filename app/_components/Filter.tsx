"use client";

import {
  useSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";
import { TFilter } from "../cabins/page";
import { FC, ReactNode } from "react";
import classNames from "classnames";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity");

  const handleFilter = (filter: TFilter) => {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter ?? "all");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        filter={"all"}
        isActive={activeFilter === "all"}
        onClick={() => handleFilter("all")}
      >
        All cabins
      </FilterButton>
      <FilterButton
        filter={"small"}
        isActive={activeFilter === "small"}
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </FilterButton>
      <FilterButton
        filter={"medium"}
        isActive={activeFilter === "medium"}
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </FilterButton>
      <FilterButton
        filter={"large"}
        isActive={activeFilter === "large"}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </FilterButton>
    </div>
  );
}

interface TFilterButtonProps {
  filter: TFilter;
  children: ReactNode;
  isActive: boolean;
  onClick: (filter: TFilter) => void;
  className?: string;
}

const FilterButton: FC<TFilterButtonProps> = (props) => {
  const { filter, children, isActive, onClick, className } =
    props;

  return (
    <button
      className={classNames(
        "px-5 py-2",
        "hover:bg-primary-700",
        {
          "bg-primary-700 text-primary-50": isActive,
        },
        className
      )}
      onClick={() => onClick(filter)}
    >
      {children}
    </button>
  );
};
