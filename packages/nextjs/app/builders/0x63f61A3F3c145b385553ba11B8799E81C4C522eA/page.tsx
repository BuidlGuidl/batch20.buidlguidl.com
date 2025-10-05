import Link from "next/link";
import type { Metadata, NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

export const metadata: Metadata = {
  title: "Om Santoshwar — Batch #20",
  description: "Builder page for Batch #20",
};

const ADDRESS = "0x63f61A3F3c145b385553ba11B8799E81C4C522eA";

const OmSantoshwarPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d] text-zinc-900 dark:text-zinc-100 p-6 font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Sidebar */}
        <div className="md:col-span-2">
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 bg-zinc-50 dark:bg-zinc-900 sticky top-6">
            {/* Avatar & Name */}
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800">
                <img
                  src="https://pbs.twimg.com/profile_images/1960647679467212800/_1yTudqB_400x400.jpg"
                  alt="Om Santoshwar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">Om Santoshwar</h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Batch #20 — Builder</p>
              <div className="flex justify-center mb-4">
                <Address address={ADDRESS} />
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <span>🎓</span>
                <span>IIT (ISM) Dhanbad</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <span>🛡️</span>
                <span>Security Researcher</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <span>🏆</span>
                <span>8x Global Hackathon Winner</span>
              </div>
            </div>

            {/* Tech */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["MERN", "Nextjs", "Ethereum", "Starknet", "Solidity, Cairo, Rust, JS, TS"].map(tech => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">Connect</h3>
              <div className="space-y-2">
                <a
                  href="https://github.com/omsant02"
                  target="_blank"
                  className="block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href="https://x.com/Om_Santoshwar"
                  target="_blank"
                  className="block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Twitter →
                </a>
                <a
                  href="https://www.linkedin.com/in/om-santoshwar-0964a1227/"
                  target="_blank"
                  className="block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  LinkedIn →
                </a>
                <Link
                  href="/"
                  className="block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Batch Home →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-6">
          {/* About */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
              Smart contract auditor in the making. Mechanical Engineering grad from IIT Dhanbad who discovered passion
              in Web3 security. Skipped campus placements to pursue blockchain security research.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Currently mastering DeFi protocols, bridges, and oracles through hands-on building. Next up: CTF
              competitions, audit contests, and securing that security researcher role.
            </p>
          </div>

          {/* Projects */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
            <h2 className="text-xl font-bold mb-5">Featured Work</h2>
            <div className="space-y-4">
              {/* Project 1 */}
              <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 bg-white dark:bg-black hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">🚀</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                      3SIPS: Autonomous DeFi Yield Engine
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      AI-powered investment platform with cross-chain asset management. Features automated DeFi
                      strategies, Chainlink automation, and Eliza AI agents for intelligent portfolio optimization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    Solidity
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    AI
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    Cross-Chain
                  </span>
                </div>
                <a
                  href="https://github.com/omsant02/3SIPS"
                  target="_blank"
                  className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mt-3 inline-block"
                >
                  View Project →
                </a>
              </div>

              {/* Project 2 */}
              <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 bg-white dark:bg-black hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">🔐</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                      zkRail: Trustless Payment Rails
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Decentralized crypto-to-fiat payment infrastructure leveraging intent solver networks and
                      zero-knowledge proofs for private UPI integration. Won at ETHIndia 2024.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    ZKP
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    Foundry
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    Payments
                  </span>
                </div>
                <a
                  href="https://github.com/d4mr/zkrail"
                  target="_blank"
                  className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mt-3 inline-block"
                >
                  View Project →
                </a>
              </div>

              {/* Project 3 */}
              <div className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 bg-white dark:bg-black hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">🤖</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                      StarkPAI: AI-Powered Web3 Wallet
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Smart contract wallet with natural language interface for Starknet. Enables conversational
                      blockchain interactions, transaction signing, and balance management.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    Cairo
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    Starknet
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    AI
                  </span>
                </div>
                <a
                  href="https://github.com/omsant02/AI-Wallet-Integration"
                  target="_blank"
                  className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mt-3 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>

          {/* Journey */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
            <h2 className="text-xl font-bold mb-4">Journey</h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600">→</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  Blockchain Dev Intern @{" "}
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Nethermind</span> (Jan-Apr 2025)
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600">→</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  Open Source @ <span className="font-semibold text-zinc-900 dark:text-zinc-100">OnlyDust</span> - 35+
                  contributions across 15+ projects
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600">→</span>
                <span className="text-zinc-700 dark:text-zinc-300">Starknet Foundation Graduate (Cum Laude)</span>
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600">→</span>
                <span className="text-zinc-700 dark:text-zinc-300">
                  Currently: Uniswap Hook Incubator 6 @ Atrium Academy
                </span>
              </div>
            </div>
          </div>

          {/* Wins */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
            <h2 className="text-xl font-bold mb-4">Recent Wins</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-yellow-500">🥇</span>
                <span>Chainlink Chromion 2025 - Avalanche Track Winner</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-yellow-500">🥇</span>
                <span>ETHBelgrade 2025 - Iexec TEE Track Winner</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-yellow-500">🥇</span>
                <span>Starknet Winter Hackathon 2025 - DeFi Winner</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-orange-500">🏆</span>
                <span>ETHIndia 2024 - Finalist & 3 Track Winner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OmSantoshwarPage;
