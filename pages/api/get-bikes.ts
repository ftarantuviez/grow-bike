import type { NextApiRequest, NextApiResponse } from "next";
import bikes from "./bikesDataMock";

type Data = {
  success: boolean;
  bikes: Bike[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ success: true, bikes });
}
