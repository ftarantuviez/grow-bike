import type { NextApiRequest, NextApiResponse } from "next";
import prices from "./pricesDataMock";

type Data = {
  success: boolean;
  prices: Price[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ success: true, prices });
}
