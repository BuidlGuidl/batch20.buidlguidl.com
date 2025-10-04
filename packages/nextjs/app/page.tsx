"use client";

import type { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const cards = [
  {
    emoji: "🏗️",
    title: "Your Contracts",
    desc: "Tinker with your smart conatracts under the Debug Contracts tab",
    href: "/debug",
  },
  {
    emoji: "🔎",
    title: "Block Explorer",
    desc: "Explore your local transactions with the Block Explorer tab",
    href: "/blockexplorer",
  },
  {
    emoji: "👷‍♀️👷‍♂️",
    title: "Unique Builders",
    desc: "Discover the personal pages of Batch #20 builder under /builders",
    href: "/builders",
  },
];

const Home: NextPage = () => {
  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <main className="from-[#cae9f2] to-[#eaf6fa] bg-linear-to-br dark:from-[#1A1B2F] dark:to-[#15325C] w-screen min-h-screen flex flex-col items-center justify-between p-8">
      <div className="flex flex-col items-center mt-12 max-md:mt-8">
        <p className="text-xl font-light">Welcome to</p>
        <h1
          className="font-semibold text-4xl text-[#00c2f3] leading-5  dark:text-[#2FD5FF]"
          style={{ textShadow: "0px 2px 12px #2FD5FF" }}
        >
          Batch 20
        </h1>
        <p className="text-lg leading- font-light text-center mt-6">
          Take a look at the{" "}
          <a
            target="_blank"
            href="https://github.com/BuidlGuidl/batch20.buidlguidl.com"
            className="underline cursor-pointer underline-offset-2"
          >
            Batch #20 Github repository
          </a>
        </p>

        <p className="text-lg leading-0 font-semibold">
          Unique checked in builders:{" "}
          <span className="dark:text-[#2FD5FF] text-[#00c2f3]" style={{ textShadow: "0px 2px 8px #2FD5FF" }}>
            {checkedInCounter}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-16 w-full max-w-6xl mt-6 max-md:grid-cols-1">
        {cards.map((card, index) => (
          <a
            href={card.href}
            key={index}
            className="ring-1 ring-[#00c2f3] dark:ring-[#2FD5FF] bg-black/3 dark:bg-white/3 p-6 px-8 flex flex-col items-center text-center rounded-[25px] dark:shadow-[0_8px_14px_#2FD5FF] shadow-[0_8px_14px_#00c2f3] hover:shadow-[0_14px_18px_#2FD5FF] hover:-translate-y-2 cursor-pointer transition duration-300 hover:bg-current/7"
          >
            <p className="text-3xl">{card.emoji}</p>

            <h2 className="text-xl my-8 underline underline-offset-2">{card.title}</h2>

            <p>{card.desc}</p>
          </a>
        ))}
      </div>

      <div className="mt-10">
        <p>
          If you want to become a part of the next batch or level up your Ethereum skills, visit{" "}
          <a target="_blank" href="https://speedrunethereum.com" className="underline cursor-pointer">
            speedrunethereum.com
          </a>{" "}
          😉
        </p>
      </div>
    </main>
  );
};

export default Home;
