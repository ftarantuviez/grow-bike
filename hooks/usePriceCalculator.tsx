import { useEffect, useState } from "react";

type usePriceValues = {
  price: number;
  amountOfDaysRented: number;
};
const usePriceCalculator = (
  initialDate: Date,
  finalDate: Date,
  bikeType: string,
  bikePrices: Price[]
): usePriceValues => {
  const priceByBike = bikePrices.find((bike) => bike.bikeType === bikeType);
  const initialTime = initialDate.getTime();
  const finalDateTime = finalDate.getTime();
  const amountOfDaysRented = (finalDateTime - initialTime) / (1000 * 3600 * 24);
  const amounOfInitialDays = priceByBike?.initialDaysPrice ?? 0;

  const multiplier =
    (initialDate.getDate() < 15
      ? priceByBike?.pricePerDay?.firstHalfMonth
      : priceByBike?.pricePerDay?.secondHalfMonth) ?? 0;

  const [price, setPrice] = useState(multiplier);

  useEffect(() => {
    let newPrice = multiplier;
    if (amounOfInitialDays < amountOfDaysRented) {
      newPrice =
        multiplier + multiplier * (amountOfDaysRented - amounOfInitialDays);
    }

    setPrice(newPrice);
  }, [amountOfDaysRented, priceByBike, multiplier, amounOfInitialDays]);

  return { price, amountOfDaysRented };
};

export default usePriceCalculator;
