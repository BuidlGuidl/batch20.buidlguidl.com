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

const TelegramIcon = () => (
  <svg
    className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
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
    href: "https://t.me/Einarmig",
    label: "Telegram",
    handle: "Einarmig",
    icon: <TelegramIcon />,
  },
];

const CERTIFICATIONS = [
  {
    name: "ETH KIPU",
    org: "Talento Tech & ETH KIPU",
    date: "Aug 2025",
    highlight: "Top 10 student by final grade",
    color: "cyan",
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
    color: "green",
  },
];

const EinamigPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-96 h-96 bg-violet-300/20 dark:bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 relative">
        {/* Header Section - 3 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left: Description */}
          <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur p-6 shadow-lg flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-4">
              Einarmig
            </h1>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Junior Solidity developer passionate about Zero‑Knowledge Proofs and privacy‑preserving technologies.
              Building secure smart contracts with modern Web3 stack.
            </p>
          </div>

          {/* Center: Avatar & Address */}
          <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur p-6 shadow-lg flex flex-col items-center justify-center">
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <Image
                src="https://avatars.githubusercontent.com/u/90649616?v=4"
                alt="avatar"
                width={140}
                height={140}
                className="relative w-32 h-32 rounded-2xl object-cover border-4 border-white dark:border-zinc-800"
              />
              <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
                Batch #20
              </div>
            </div>
            <div className="w-full mb-4 flex justify-center">
              <Address address={ADDRESS} />
            </div>
            <div className="flex items-center justify-center gap-3">
              {SOCIALS.map(s => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="group w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/50 dark:to-violet-900/50 border border-purple-200 dark:border-purple-700 flex items-center justify-center hover:scale-110 hover:border-purple-400 dark:hover:border-purple-500 transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Tech Stack & Languages */}
          <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur p-6 shadow-lg flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <span className="text-white text-lg">⚡</span>
              </div>
              <h2 className="text-lg font-bold">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {TECH_STACK.map(item => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 border border-purple-200 dark:border-purple-700 text-sm font-medium text-purple-700 dark:text-purple-300 hover:scale-105 transition-transform"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700">
              <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
                Languages
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Spanish</span>
                  <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded text-xs font-semibold">
                    Native
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">English</span>
                  <span className="px-2 py-0.5 bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 rounded text-xs font-semibold">
                    B2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - 2 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Certifications */}
          <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-white text-lg">🏆</span>
              </div>
              <h2 className="text-lg font-bold">Certifications</h2>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => {
                const getColorClasses = () => {
                  if (cert.isZK) {
                    return "border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20";
                  }
                  if (cert.color === "cyan") {
                    return "border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20";
                  }
                  if (cert.color === "green") {
                    return "border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20";
                  }
                  return "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50";
                };

                return (
                  <article
                    key={idx}
                    className={`group rounded-xl border-2 p-4 transition-all hover:scale-[1.02] ${getColorClasses()}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-sm">{cert.name}</h3>
                        <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{cert.org}</p>
                        {cert.highlight && (
                          <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700">
                            <span className="text-sm">🏆</span>
                            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                              {cert.highlight}
                            </span>
                          </div>
                        )}
                        {cert.isZK && (
                          <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-600 text-white text-xs font-bold shadow-lg">
                            <span>✨</span>
                            <span>ZK Specialization</span>
                          </div>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <div className="px-2 py-1 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-xs font-semibold">
                          {cert.date}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right: Current Project */}
          <div className="rounded-2xl border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 backdrop-blur p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                <span className="text-white text-lg">🚀</span>
              </div>
              <h2 className="text-lg font-bold">Current Project</h2>
              <span className="ml-auto px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-xs font-bold">
                In Progress
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">ZK Anonymous Surveys</h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Building a privacy-preserving survey platform using Zero-Knowledge proofs. The MVP leverages{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">Noir</span> for ZK circuit
                  development and <span className="font-semibold text-purple-600 dark:text-purple-400">Garaga</span> to
                  verify proofs on Starknet, ensuring complete anonymity for respondents.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-200 dark:border-purple-800">
                <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Noir", "Garaga", "Starknet", "Cairo", "TypeScript"].map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-purple-200/50 dark:bg-purple-800/30 border border-purple-300 dark:border-purple-700 text-xs font-medium text-purple-700 dark:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-200 dark:border-purple-800">
                <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
                  Event
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="font-bold text-sm">Starknet Re:Solve Hackathon</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Building the future of privacy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EinamigPage;
