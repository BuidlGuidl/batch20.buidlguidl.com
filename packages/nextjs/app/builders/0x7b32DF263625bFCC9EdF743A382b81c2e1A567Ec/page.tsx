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

// Icon components
const GithubIcon = () => (
  <svg
    className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PortfolioIcon = () => (
  <svg
    className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const SOCIALS: Array<{
  href: string;
  label: string;
  handle: string;
  icon: React.ReactElement;
}> = [
  {
    href: "https://github.com/Vk1033",
    label: "GitHub",
    handle: "Vk1033",
    icon: <GithubIcon />,
  },
  {
    href: "https://x.com/0xVanqshr",
    label: "X",
    handle: "0xVanqshr",
    icon: <XIcon />,
  },
  {
    href: "https://vk1033.vercel.app",
    label: "Portfolio",
    handle: "vk1033.vercel.app",
    icon: <PortfolioIcon />,
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
                <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                  <h3 className="font-medium">Cyfrin Updraft Courses</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Completed tracks: Solidity, Advanced Foundry, Security, Assembly and Formal Verification.
                  </p>
                  <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">Cyfrin · Education</div>
                </article>
                <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                  <h3 className="font-medium">Ethernaut</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    All core challenges completed, <br />
                    Learned Exploits and <br /> Patterns.
                  </p>
                  <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">OpenZeppelin · CTF</div>
                </article>
                <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 sm:col-span-2">
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
                    {s.icon}
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
