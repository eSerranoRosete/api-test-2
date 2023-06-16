// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

type Data = {
  ip?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ip = requestIp.getClientIp(req);

  console.log("Requested from: ", ip);

  res.status(200).json({ ip });
}
