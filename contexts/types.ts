import { ReactNode } from "react";

export type BikesProviderValues = {
  bikes: Bike[];
  loading: boolean;
  getBikes(): void;
};

export type BikesProviderProps = {
  children: ReactNode;
};
