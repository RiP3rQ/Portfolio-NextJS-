import { PageInfo } from "../typings";

export const fetchPageInfoPL = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfoPL`
  );

  const data = await res.json();
  const pageInfoPL: PageInfo[] = data.pageInfoPL;

  // console.log("fetching", skills);

  return pageInfoPL;
};
