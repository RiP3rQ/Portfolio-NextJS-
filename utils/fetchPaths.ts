import { Paths } from "../typings";

export const fetchPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPaths`);

  const data = await res.json();
  const paths: Paths[] = data.paths;

  // console.log("fetching", paths);

  return paths;
};
