// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { MainProjects } from "../../../typings";
import { SanityClient } from "../../../sanity";

type Data = {
  mainProjects: MainProjects[];
};

const query = groq`
*[_type == "mainProjects"] {
    ...,
    technologies[] ->
}
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mainProjects: MainProjects[] = await SanityClient.fetch(query);
  res.status(200).json({ mainProjects });
}
