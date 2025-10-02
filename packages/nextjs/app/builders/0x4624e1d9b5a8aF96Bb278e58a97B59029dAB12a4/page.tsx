import Image from "next/image";
import Link from "next/link";
import type { Metadata, NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

export const metadata: Metadata = {
  title: "Einarmig — Batch #20",
  description: "Builder page for Batch #20 - Junior Solidity Developer",
};

const ADDRESS = "0x4624e1d9b5a8aF96Bb278e58a97B59029dAB12a4";

const TECH_STACK = ["Solidity", "TypeScript", "Cairo", "Hardhat", "Next.js", "OpenZeppelin"] as const;

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

const TwitterIcon = () => (
  <svg
    className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const SOCIALS: Array<{
  href: string;
  label: string;
  handle: string;
  icon: React.ReactElement;
}> = [
  {
    href: "https://github.com/Einarmig",
    label: "GitHub",
    handle: "Einarmig",
    icon: <GithubIcon />,
  },
  {
    href: "https://twitter.com/Einarmig",
    label: "Twitter",
    handle: "Einarmig",
    icon: <TwitterIcon />,
  },
  {
    href: "mailto:0xeinarmig@gmail.com",
    label: "Email",
    handle: "0xeinarmig@gmail.com",
    icon: <MailIcon />,
  },
];

const CERTIFICATIONS = [
  {
    name: "ETH KIPU",
    org: "Talento Tech & ETH KIPU",
    date: "Aug 2025",
    highlight: "Top 10 student by final grade",
  },
  {
    name: "Fundamentals of Zero-Knowledge Proofs",
    org: "Cyfrin",
    date: "Jul 2025",
    isZK: true,
  },
  {
    name: "Smart Contract Security",
    org: "Cyfrin",
    date: "Jun 2025",
  },
];

const LuchessiPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950 text-zinc-900 dark:text-zinc-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(139,92,246,0.25),transparent)] dark:bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(139,92,246,0.15),transparent)]" />
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-24 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <Image
              src="https://avatars.githubusercontent.com/u/90649616?v=4"
              alt="avatar"
              width={140}
              height={140}
              className="w-28 h-28 md:w-36 md:h-36 rounded-2xl ring-1 ring-zinc-300/60 dark:ring-zinc-700/60 shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Einarmig
                <span className="ml-3 text-lg align-middle font-medium text-zinc-500 dark:text-zinc-400">
                  Batch #20
                </span>
              </h1>
              <div className="mt-2">
                <Address address={ADDRESS} />
              </div>
              <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
                Junior Solidity developer passionate about Zero‑Knowledge Proofs and privacy‑preserving technologies.
                <br />
                Building secure smart contracts with modern Web3 stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 -mt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <aside className="md:col-span-1 space-y-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-5 shadow-sm">
              <h2 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Contact</h2>
              <div className="mt-3 space-y-2">
                {SOCIALS.map(s => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                    className="group flex items-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 px-3 py-2 transition"
                  >
                    {s.icon}
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium">{s.label}</span>
                      <span className="text-xs text-zinc-500 truncate">{s.handle}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-5 shadow-sm">
              <h2 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Languages</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Spanish</span>
                  <span className="font-medium">Native</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">English</span>
                  <span className="font-medium">B2</span>
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

          <section className="md:col-span-2">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6 shadow-sm h-full">
              <h2 className="text-lg font-semibold">Certifications</h2>
              <div className="mt-4 grid grid-cols-1 gap-5">
                {CERTIFICATIONS.map((cert, idx) => (
                  <article
                    key={idx}
                    className={`rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 ${cert.isZK ? "ring-2 ring-purple-200 dark:ring-purple-800" : ""}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium">{cert.name}</h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{cert.org}</p>
                        {cert.highlight && (
                          <p className="mt-1 text-xs text-amber-600 dark:text-amber-400 font-medium">
                            🏆 {cert.highlight}
                          </p>
                        )}
                        {cert.isZK && (
                          <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                            ZK Specialization
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{cert.date}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default LuchessiPage;
