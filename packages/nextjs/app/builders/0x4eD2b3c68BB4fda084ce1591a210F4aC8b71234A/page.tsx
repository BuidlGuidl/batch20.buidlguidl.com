import ClientPage from "./ClientPage";
import { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Timkot | Batch20 BuidlGuidl",
  description: "Timkot's Dev Journey",
});

const Page: NextPage = () => {
  return <ClientPage />;
};

export default Page;
