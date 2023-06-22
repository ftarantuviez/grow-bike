import { ReactNode } from "react";

export type BikesProviderValues = {
  bikes: Bike[];
  bikePrices: Price[];
  loading: boolean;
  getBikes(): void;
  getPrices(): void;
  error: {
    isError: boolean;
    message: string;
  };
};

export type BikesProviderProps = {
  children: ReactNode;
};
