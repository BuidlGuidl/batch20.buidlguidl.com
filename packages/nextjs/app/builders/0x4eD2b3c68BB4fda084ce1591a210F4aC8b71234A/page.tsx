import ClientPage from "./ClientPage";
import { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Tim Kotliar | Batch20 BuidlGuidl",
  description: "Timkot's personal page on Batch20",
});

const Page: NextPage = () => {
  return <ClientPage />;
};

export default Page;
