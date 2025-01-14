import classNames from "classnames";
import { Metadata } from "next";
import React from "react";
import { getCabins } from "../_lib/data-service";
import CabinCard from "../_components/CabinCard";

export const metadata: Metadata = {
  title: "Cabins",
};

const Page = async () => {
  const cabins = await getCabins();

  return (
    <div>
      <h1
        className={classNames(
          "text-4xl text-accent-400 font-medium",
          "mb-5"
        )}
      >
        Our luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the
        heart of the Italian Dolomites. Imagine waking up to
        beautiful mountain views, spending your days
        exploring the dark forests around, or just relaxing
        in your private hot tub under the stars. Enjoy
        nature&apos;s beauty in your own little home away
        from home. The perfect spot for a peaceful, calm
        vacation. Welcome to paradise.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          {cabins.map((cabin) => (
            <CabinCard key={cabin.id} cabin={cabin} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
