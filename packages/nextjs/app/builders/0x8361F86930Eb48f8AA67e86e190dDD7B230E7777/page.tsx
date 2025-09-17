import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miguel — Batch #20",
  description: "Builder page for Batch #20",
};

const ADDR = "0x8361F86930Eb48f8AA67e86e190dDD7B230E7777";

function short(a: string) {
  return `${a.slice(0, 6)}…${a.slice(-4)}`;
}

export default function BuilderPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <section className="rounded-2xl border shadow p-6 bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-100">
        <div className="flex items-center gap-5">
          <img
            src="https://github.com/migarci2.png?size=200"
            alt="avatar"
            className="w-20 h-20 rounded-full border border-zinc-700"
          />
          <div>
            <h1 className="text-2xl font-semibold">Miguel García</h1>
            <p className="text-sm text-zinc-400">Batch #20 — Builder</p>
            <p className="text-sm mt-1 font-mono text-zinc-300">{ADDR}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className="px-3 py-1 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition"
                href={`https://arbiscan.io/address/${ADDR}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Arbiscan
              </a>
              <a
                className="px-3 py-1 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition"
                href="https://github.com/migarci2"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="px-3 py-1 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition"
                href="https://x.com/m1guelgr8"
                target="_blank"
                rel="noreferrer"
              >
                X/Twitter
              </a>
            </div>
          </div>
        </div>

        <p className="mt-5 text-zinc-200">
          Computer Engineering student passionate about low-level systems, kernel development, DeFi, and AI. I enjoy
          building fast, useful, and optimized tools.
        </p>

        <div className="mt-6">
          <h2 className="text-sm uppercase tracking-wider text-zinc-400">Focus Areas</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full border border-zinc-700">Security</span>
            <span className="text-xs px-2 py-1 rounded-full border border-zinc-700">Linux Internals</span>
            <span className="text-xs px-2 py-1 rounded-full border border-zinc-700">Smart Contracts</span>
            <span className="text-xs px-2 py-1 rounded-full border border-zinc-700">AI/ML</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-800 p-4">
            <h3 className="font-medium">On-chain</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-300">
              <li>
                Address:{" "}
                <a className="underline" href={`https://arbiscan.io/address/${ADDR}`} target="_blank" rel="noreferrer">
                  {short(ADDR)}
                </a>
              </li>
              <li>
                Network: <span className="text-zinc-400">Arbitrum</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-800 p-4">
            <h3 className="font-medium">Links</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a className="underline" href="https://github.com/migarci2" target="_blank" rel="noreferrer">
                  Recent Repos
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
}
