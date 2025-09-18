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
    <main className="mx-auto max-w-3xl p-6">
      <section className="rounded-2xl border shadow p-6 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center gap-5">
          <Image
            src="https://avatars.githubusercontent.com/u/203130627?v=4"
            alt="avatar"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full border border-zinc-700"
          />
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Isaac Netero</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Batch #20 — Builder</p>
            <Address address={ADDRESS} />
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className="px-3 py-1 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                href={`https://arbiscan.io/address/${ADDRESS}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Arbiscan
              </a>
              <a
                className="px-3 py-1 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                href="https://github.com/0xNetero"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="px-3 py-1 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                href="https://x.com/0xNetero201"
                target="_blank"
                rel="noreferrer"
              >
                X/Twitter
              </a>
            </div>
          </div>
        </div>

        <p className="mt-5 text-zinc-700 dark:text-zinc-200">Freelancer from Vietnam 🇻🇳</p>
        <p className="mt-5 text-zinc-700 dark:text-zinc-200">Chainlink marine since 2020</p>
        <p className="mt-5 text-zinc-700 dark:text-zinc-200">
          Learning Cairo, and ZK (still stucking with the math lol).
        </p>

        <div className="mt-6">
          <h2 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Tech stack</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              Solidity
            </span>
            <span className="text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              Rust
            </span>
            <span className="text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              Typescript
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-300 dark:border-zinc-800 p-4">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Links</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a
                  className="underline"
                  href="https://github.com/0xnetero?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repos
                </a>
              </li>
              <li>
                <Link className="underline" href="/">
                  Batch Home
                </Link>
              </li>
              <li>
                <Link className="underline" href="/debug">
                  Debug Tools (SE-2)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NeteroPage;
