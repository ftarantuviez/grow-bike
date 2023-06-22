import { createContext, FC, useEffect, useState } from "react";
import { BikesProviderProps, BikesProviderValues } from "./types";
import axios from "axios";

export const BikesContext = createContext<BikesProviderValues>({
  bikes: [],
  bikePrices: [],
  loading: false,
  getBikes: () => {},
  getPrices: () => {},
  error: {
    isError: false,
    message: "",
  },
});

const BikesProvider: FC<BikesProviderProps> = ({ children }) => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bikePrices, setBikePrices] = useState<Price[]>([]);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const getBikes = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/get-bikes");
      setLoading(false);

      if (data?.success) {
        setBikes(data?.bikes);
      }
    } catch (error) {
      setLoading(false);
      setError({ isError: true, message: "Something went wrong" });
    }
  };

  const getPrices = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/get-prices");
      setLoading(false);

      if (data?.success) {
        setBikePrices(data?.prices);
      }
    } catch (error) {
      setLoading(false);
      setError({ isError: true, message: "Something went wrong" });
    }
  };

  useEffect(() => {
    getBikes();
    getPrices();
  }, []);

  const values = {
    bikes,
    bikePrices,
    loading,
    getBikes,
    getPrices,
    error,
  };

  return (
    <BikesContext.Provider value={values}>{children}</BikesContext.Provider>
  );
};

export default BikesProvider;
