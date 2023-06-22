const pricesDataMock: Price[] = [
  {
    id: "1",
    bikeType: "electric",
    pricePerDay: {
      firstHalfMonth: 10,
      secondHalfMonth: 12,
    },
    currency: "USD",
    initialDaysPrice: 1,
  },
  {
    id: "2",
    bikeType: "normal",
    pricePerDay: {
      firstHalfMonth: 10,
      secondHalfMonth: 12,
    },
    currency: "USD",
    initialDaysPrice: 3,
  },
  {
    id: "3",
    bikeType: "vintage",
    pricePerDay: {
      firstHalfMonth: 10,
      secondHalfMonth: 12,
    },
    currency: "USD",
    initialDaysPrice: 5,
  },
];

export default pricesDataMock;
