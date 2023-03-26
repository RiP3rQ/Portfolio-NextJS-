// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Projects } from "../../../typings";
import { SanityClient } from "../../../sanity";

type Data = {
  projects: Projects[];
};

const query = groq`
*[_type == "projects"] {
  ...,
  technologies[] ->
}
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Projects[] = await SanityClient.fetch(query);
  res.status(200).json({ projects });
}
