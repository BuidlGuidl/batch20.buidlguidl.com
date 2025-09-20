import { ProfileTabs } from "./ProfileTabs";
import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Sonny Castro — Batch #20",
  description: "Builder page for Batch #20 - Full Stack Web3 Developer",
};

const PlayerCardPage: NextPage = () => {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <ProfileTabs />
      </div>
    </div>
  );
};

export default PlayerCardPage;
