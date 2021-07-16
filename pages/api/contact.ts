import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message } = req.body;
  const msg = {
    to: "contact@transcend.tn",
    from: email,
    text: message,
  };
  res.json(msg);
};
