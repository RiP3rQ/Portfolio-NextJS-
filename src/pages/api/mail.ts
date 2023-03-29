// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const body = JSON.parse(req.body);

  const msg = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Title: ${body.title}\r\n
    Message: ${body.message}\r\n
    `;

  try {
    await transporter
      .sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: body.title,
        text: msg,
        html: "<p>" + msg.replace(/\r\n/g, "</p><p>") + "</p>",
      })
      .then(() => {
        return res.status(200).json({ status: "success" });
      });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: "error" });
  }
}
