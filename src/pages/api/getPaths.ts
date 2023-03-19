// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Paths } from "../../../typings";
import { SanityClient } from "../../../sanity";

type Data = {
  paths: Paths[];
};

const query = groq`
*[_type == "path"] {
  ...,
  technologies[] ->
} | order(endingDate desc)
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const paths: Paths[] = await SanityClient.fetch(query);
  res.status(200).json({ paths });
}
