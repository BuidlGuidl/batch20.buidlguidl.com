import Image from "next/image";
import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Andrei Zaharov — Batch #20",
  description: "Builder page for Batch #20",
};
const walletAddress = "0xC13F0f21397E268314ce8d9606838AB5D4eD485c";

const ZaharovBuilderPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-10">
      {/* Avatar */}
      <Image
        src="https://avatars.githubusercontent.com/u/37747146?v=4"
        alt="avatar"
        width={128}
        height={128}
        className="rounded-full border-4 border-purple-500 shadow-lg"
      />

      {/* Address */}
      <h1 className="text-xl font-mono text-purple-400">{walletAddress}</h1>

      {/* Bio */}
      <p className="text-center text-lg max-w-xl">
        👋 Hey, I’m a web3 dev focused on <b>Solidity</b>, <b>smart contracts</b> &<b> dApps</b>. Graduated from Cyfrin
        courses (Blockchain Basics, Solidity, Foundry Fundamentals) and built projects on <b>speedrunEthereum</b> (NFT,
        DEX, Lending, Staking, etc).
      </p>

      {/* Stack */}
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">Solidity</span>
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">Foundry</span>
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">Next.js</span>
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">React</span>
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">Tailwind</span>
      </div>

      {/* Links */}
      <div className="flex gap-6 mt-4 text-lg">
        <a href="https://github.com/RefreshMyLife" target="_blank" className="hover:text-purple-500">
          GitHub
        </a>
        <a href="https://twitter.com/https://x.com/AndreyZ36471490" target="_blank" className="hover:text-purple-500">
          Twitter
        </a>
        <a href="https://t.me/AndreuZakharov" target="_blank" className="hover:text-purple-500">
          Telegram
        </a>
      </div>

      {/* Fun touch */}
      <pre className="mt-6 text-xs text-gray-500">
        {`
     ⚡ keep buidling ⚡
`}
      </pre>
    </div>
  );
};
export default ZaharovBuilderPage;
