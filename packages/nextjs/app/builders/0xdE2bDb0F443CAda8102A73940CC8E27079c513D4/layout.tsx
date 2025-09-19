import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Builder | KC",
  description: "Builder profile for KC - BuidlGuidl Batch 20",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
