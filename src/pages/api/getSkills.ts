// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Skills } from "../../../typings";
import { SanityClient } from "../../sanity";

type Data = {
  skills: Skills[];
};

const query = groq`
*[_type == "skills"] {
    ...,
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skills[] = await SanityClient.fetch(query);
  res.status(200).json({ skills });
}
