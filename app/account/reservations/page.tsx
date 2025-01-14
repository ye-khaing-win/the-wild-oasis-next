import ReservationCard from "@/app/_components/ReservationCard";
import { TBooking } from "@/app/types/booking";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reservations",
};

const page = () => {
  const bookings: TBooking[] = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a
            className="underline text-accent-500"
            href="/cabins"
          >
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard
              booking={booking}
              key={booking.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default page;
