import { Paths } from "../typings";

export const fetchPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/getPaths`);

  const data = await res.json();
  const paths: Paths[] = data.paths;

  // console.log("fetching", paths);

  return paths;
};
