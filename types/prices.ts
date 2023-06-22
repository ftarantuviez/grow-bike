type Price = {
  id: string;
  bikeType: "vintage" | "normal" | "electric";
  pricePerDay: {
    firstHalfMonth: 10;
    secondHalfMonth: 12;
  };
  currency: string;
  initialDaysPrice: number;
};
