import { FC } from "react";
import { TCabin } from "../types/cabin";
import {
  getBookedDatesByCabinId,
  getSettings,
} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import classNames from "classnames";

interface TReservationProps {
  cabin: TCabin;
}

const Reservation: FC<TReservationProps> = async (
  props
) => {
  const { cabin } = props;

  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div
      className={classNames(
        "grid grid-cols-2",
        "border border-primary-800 min-h-[400px]"
      )}
    >
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
};

export default Reservation;
