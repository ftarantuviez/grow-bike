import type { NextApiRequest, NextApiResponse } from "next";
import bikes from "./bikesDataMock";

export type GetBikeResponse = {
  success: boolean;
  bike?: Bike;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetBikeResponse>
) {
  const { bikeId } = req.query;
  const bike = bikes.find((bik) => bik.id === bikeId);

  if (!bike) {
    return res.status(200).json({ success: false, message: "Bike not found" });
  }
  res.status(200).json({ success: true, bike: bike });
}
