"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { DateRange } from "react-day-picker";

export type TReservationContextProps = {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
  resetRange: () => void;
};

const ReservationContext =
  createContext<TReservationContextProps>(
    {} as TReservationContextProps
  );

const initialState = {
  from: undefined,
  to: undefined,
};

const ReservationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [range, setRange] = useState<DateRange | undefined>(
    initialState
  );

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider
      value={{ range, setRange, resetRange }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

const useReservation = () => {
  const context = useContext(ReservationContext);

  if (!context) {
    throw new Error("Context was used outside Provider");
  }

  return context;
};

export { ReservationProvider, useReservation };
