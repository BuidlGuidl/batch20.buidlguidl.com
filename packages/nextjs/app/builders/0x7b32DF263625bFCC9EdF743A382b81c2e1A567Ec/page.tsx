import Image from "next/image";
import Link from "next/link";
import type { Metadata, NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

export const metadata: Metadata = {
  title: "Vk1033 — Batch #20",
  description: "Vk1033's page for Batch #20",
};

const ADDRESS = "0x7b32DF263625bFCC9EdF743A382b81c2e1A567Ec";

// Clean data sources for rendering lists
const TECH_STACK = ["Solidity", "Foundry", "Hardhat", "Huff", "Yul", "TypeScript", "Next.js", "Python", "Go"] as const;

const SOCIALS: Array<{
  href: string;
  label: string;
  handle: string;
  icon: string;
  width?: number;
  height?: number;
}> = [
  {
    href: "https://github.com/Vk1033",
    label: "GitHub",
    handle: "Vk1033",
    icon: "/github-icon.png",
    width: 20,
    height: 20,
  },
  {
    href: "https://x.com/0xVanqshr",
    label: "X",
    handle: "0xVanqshr",
    icon: "/x-icon.png",
    width: 26,
    height: 26,
  },
  {
    href: "https://vk1033.vercel.app",
    label: "Portfolio",
    handle: "vk1033.vercel.app",
    icon: "/logo.svg",
    width: 20,
    height: 20,
  },
];

const Vk1033Page: NextPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(139,92,246,0.25),transparent)] dark:bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(139,92,246,0.15),transparent)]" />
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-24 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <Image
              src="https://avatars.githubusercontent.com/u/66551858?s=400&u=89d62e4a2ad4ef8da9b2d4ea4638e09cb0aa2e04&v=4"
              alt="avatar"
              width={140}
              height={140}
              className="w-28 h-28 md:w-36 md:h-36 rounded-2xl ring-1 ring-zinc-300/60 dark:ring-zinc-700/60 shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                VK1033
                <span className="ml-3 text-lg align-middle font-medium text-zinc-500 dark:text-zinc-400">
                  Batch #20
                </span>
              </h1>
              <div className="mt-2">
                <Address address={ADDRESS} />
              </div>
              <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
                Full‑stack developer from India crafting secure, performant on‑chain products.
                <br />
                Open to collaborations and freelance gigs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 -mt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column: Snapshot card */}
          <aside className="md:col-span-1 space-y-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-5 shadow-sm">
              <h2 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Snapshot</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Primary Stack</span>
                  <span className="font-medium">Foundry · Next.js</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">EVM Focus</span>
                  <span className="font-medium">Security · Gas</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Timezone</span>
                  <span className="font-medium">IST</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-5 shadow-sm">
              <h2 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Tech. Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {TECH_STACK.map(item => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <section className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Web3 archive</h2>
                <span className="text-xs px-2 py-1 rounded-full border border-emerald-300/40 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300">
                  Completed
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 hover:border-violet-400/50 transition">
                  <h3 className="font-medium">Cyfrin Updraft Courses</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Completed tracks: Solidity, Advanced Foundry, Security, Assembly and Formal Verification.
                  </p>
                  <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">Cyfrin · Education</div>
                </article>
                <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 hover:border-indigo-400/50 transition">
                  <h3 className="font-medium">Ethernaut</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    All core challenges completed, <br />
                    Learned Exploits and <br /> Patterns.
                  </p>
                  <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">OpenZeppelin · CTF</div>
                </article>
                <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 hover:border-emerald-400/50 transition sm:col-span-2">
                  <h3 className="font-medium">Speedrun Ethereum</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Completed all challenges.</p>
                  <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">BuidlGuidl · Challenges</div>
                </article>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Socials</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIALS.map(s => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                    className="group flex items-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 px-4 py-3 transition"
                  >
                    <Image
                      src={s.icon}
                      alt={s.label}
                      width={s.width ?? 20}
                      height={s.height ?? 20}
                      className="opacity-80 group-hover:opacity-100"
                    />
                    <span className="font-medium">{s.label}</span>
                    <span className="ml-auto text-xs text-zinc-500">{s.handle}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Vk1033Page;
