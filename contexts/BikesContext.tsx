import { createContext, FC, useEffect, useState } from "react";
import { BikesProviderProps, BikesProviderValues } from "./types";
import axios from "axios";

export const BikesContext = createContext<BikesProviderValues>({
  bikes: [],
  loading: false,
  getBikes: () => {},
});

const BikesProvider: FC<BikesProviderProps> = ({ children }) => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBikes = async () => {
    try {
      const { data } = await axios.get("/api/hello");

      if (data?.success) {
        setBikes(data?.bikes);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBikes();
  }, []);

  const values = {
    bikes,
    loading,
    getBikes,
  };

  return (
    <BikesContext.Provider value={values}>{children}</BikesContext.Provider>
  );
};

export default BikesProvider;
