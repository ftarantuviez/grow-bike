import { ReactNode } from "react";

export type BikesProviderValues = {
  bikes: Bike[];
  loading: boolean;
  getBikes(): void;
  error: {
    isError: boolean;
    message: string;
  };
};

export type BikesProviderProps = {
  children: ReactNode;
};
