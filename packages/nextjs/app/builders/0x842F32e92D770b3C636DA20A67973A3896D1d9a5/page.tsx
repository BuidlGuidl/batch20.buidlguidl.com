import Image from "next/image";
import Link from "next/link";
import type { Metadata, NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

export const metadata: Metadata = {
  title: "Netero — Batch #20",
  description: "Builder page for Batch #20",
};

const ADDRESS = "0x842F32e92D770b3C636DA20A67973A3896D1d9a5";

const NeteroPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-mono p-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <section className="md:col-span-1 space-y-6">
          <div className="rounded-2xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 p-6 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <Image
                src="https://avatars.githubusercontent.com/u/203130627?v=4"
                alt="avatar"
                width={120}
                height={120}
                className="w-32 h-32 rounded-full border-2 border-cyan-400 shadow-lg shadow-cyan-500/50"
              />
              <h1 className="text-2xl font-bold text-cyan-300 mt-4">Isaac Netero</h1>
              <p className="text-sm text-gray-400">Batch #20 — Builder</p>
              <div className="mt-2">
                <Address address={ADDRESS} />
              </div>
              <p className="mt-4 text-gray-400">Freelancer from Vietnam 🇻🇳</p>
              <p className="mt-2 text-gray-400">Chainlink marine since 2020</p>
              <p className="mt-2 text-gray-400">Learning Cairo, and ZK (still stucking with the math lol).</p>
            </div>

            <div className="mt-6">
              <h2 className="text-sm uppercase tracking-wider text-cyan-400 text-center">Tech stack</h2>
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-2 py-1 rounded-full border border-green-500/50 bg-green-900/30 text-green-300">
                  Solidity
                </span>
                <span className="text-xs px-2 py-1 rounded-full border border-green-500/50 bg-green-900/30 text-green-300">
                  Rust
                </span>
                <span className="text-xs px-2 py-1 rounded-full border border-green-500/50 bg-green-900/30 text-green-300">
                  Typescript
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-cyan-500/20 pt-4">
              <h3 className="font-medium text-cyan-300 text-center">Links</h3>
              <ul className="mt-2 space-y-2 text-sm text-center">
                <li>
                  <a
                    className="text-cyan-400 hover:text-cyan-200 hover:underline"
                    href="https://github.com/0xNetero"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a
                    className="text-cyan-400 hover:text-cyan-200 hover:underline"
                    href="https://x.com/0xNetero201"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X/Twitter
                  </a>
                </li>
                <li>
                  <Link className="text-cyan-400 hover:text-cyan-200 hover:underline" href="/">
                    Batch Home
                  </Link>
                </li>
                <li>
                  <Link className="text-cyan-400 hover:text-cyan-200 hover:underline" href="/debug">
                    Debug Tools
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Right Column */}
        <section className="md:col-span-2">
          <div className="rounded-2xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 p-6 bg-gray-900/50 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-cyan-300 mb-4">Web3 Projects Portfolio</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-cyan-500/20 p-4 bg-gray-800/40 hover:bg-gray-800/70 transition-colors">
                <h3 className="font-semibold text-cyan-400">🚩 Shafu-rs</h3>
                <p className="text-sm text-gray-400 mt-1">A simple Rust crate for make Solidity code looks beautiful</p>
                <a
                  href="https://github.com/0xnetero/shafu-rs"
                  className="text-xs text-cyan-500 hover:underline mt-2 inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
              </div>
              <div className="rounded-lg border border-cyan-500/20 p-4 bg-gray-800/40 hover:bg-gray-800/70 transition-colors">
                <h3 className="font-semibold text-cyan-400">🚩 LINK staking bot</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Typescript bot to automatically stake $LINK to community pool
                </p>
                <a
                  href="https://github.com/0xnetero/link-staking-cron"
                  className="text-xs text-cyan-500 hover:underline mt-2 inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </div>
          <div className="rounded-2xl mt-4 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 p-6 bg-gray-900/50 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-cyan-300 mb-4">BuidlGuidl CTF</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-cyan-500/20 p-4 bg-gray-800/40 hover:bg-gray-800/70 transition-colors">
                <h3 className="font-semibold text-cyan-400">🚩 Capture 12 Flags by solving 12 Solidity puzzles</h3>
                <a
                  href="https://ctf.buidlguidl.com/profile/0x842F32e92D770b3C636DA20A67973A3896D1d9a5"
                  className="text-xs text-cyan-500 hover:underline mt-2 inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my CTF profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NeteroPage;
