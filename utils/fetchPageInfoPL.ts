import { PageInfo } from "../typings";

export const fetchPageInfoPL = async () => {
  const res = await fetch(`http://localhost:3000/api/getPageInfoPL`);

  const data = await res.json();
  const pageInfoPL: PageInfo[] = data.pageInfoPL;

  // console.log("fetching", skills);

  return pageInfoPL;
};
