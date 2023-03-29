// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");

type Data = {
  status: string;
};

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);

  const msg = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Title: ${body.title}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    to: "rafalpompa2000@gmail.com",
    from: "rafal_portfolio@op.pl",
    subject: "New portfolio message!",
    text: msg,
    html: msg.replace(/\r\n/g, "<br>"),
  };

  (async () => {
    try {
      await mail.send(data);
    } catch (error) {
      //console.error(error);
      return res.status(500).json({ status: "error" });
    }
  })();

  res.status(200).json({ status: "success" });
}
