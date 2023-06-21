/* eslint-disable import/no-anonymous-default-export */
import { useContext } from "react";
import { BikesProviderValues } from "@/contexts/types";
import { BikesContext } from "@/contexts/BikesContext";

export default () => useContext<BikesProviderValues>(BikesContext);
