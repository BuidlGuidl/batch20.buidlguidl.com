"use client";

import { useState } from "react";
import Image from "next/image";
import { Address, Balance } from "~~/components/scaffold-eth";

const walletAddress = "0xe22eCde9e8Cfa57d2623C909237Ae30118428B0D";

const projects = [
  {
    title: "Hypachinko",
    description: "Onchain pachinko experience on HyperEVM with real-time jackpots",
    tech: ["React", "TypeScript", "HyperEVM", "Web3"],
    link: "https://hypachinko.vercel.app/?utm_source=sonny.build&utm_medium=portfolio_website&utm_campaign=referral",
  },
  {
    title: "Chonk Party",
    description: "Original meme token of Neon EVM with community-driven features",
    tech: ["Solidity", "Neon EVM", "DeFi", "Community"],
    link: "https://www.chonk.party/?utm_source=sonny.build&utm_medium=portfolio_website&utm_campaign=referral",
  },
  {
    title: "Chonkpool",
    description: "Liquidity pool and staking platform for $CHONK token",
    tech: ["Solidity", "DeFi", "Liquidity", "Staking"],
    link: "https://www.chonkpool.party/?utm_source=sonny.build&utm_medium=portfolio_website&utm_campaign=referral",
  },
  {
    title: "Milady Colombia",
    description: "Generative NFT collection with Colombian cultural themes",
    tech: ["NFT", "Generative Art", "Ethereum", "IPFS"],
    link: "https://www.miladycolombia.com/?utm_source=sonny.build&utm_medium=portfolio_website&utm_campaign=referral",
  },
];

const experience = [
  {
    period: "11.2024 — 07.2025",
    role: "Full-Stack Developer — SAI",
    company: "ArenaX Labs",
    description:
      "Developed within a pnpm + Turborepo monorepo with Dockerized services. Built APIs, endpoints, and UI flows for model submissions, leaderboard tracking, and benchmarking. Optimized performance and usability to improve platform responsiveness for large-scale ML competitions.",
  },
  {
    period: "11.2021 — 07.2025",
    role: "Full-Stack & Smart Contract Developer — AI Arena",
    company: "ArenaX Labs",
    description:
      "Deployed 8+ ERC721/ERC1155 smart contracts on Arbitrum, integrated Delegate.xyz for AI Arena, and built miners/validators for Bittensor's Synth subnet. Delivered full-stack features boosting performance and enabling large-scale ML competitions.",
  },
  {
    period: "07.2021 — 11.2021",
    role: "Front-end Developer",
    company: "SteakWallet (acquired by Omni)",
    description:
      "Built responsive web applications with React, Next.js, and modern web technologies. Focused on user experience and performance optimization for cryptocurrency wallet platform.",
  },
  {
    period: "2024 — 2024",
    role: "Full-Stack & Smart Contract Developer",
    company: "Milady Colombia",
    description:
      "Developed ERC721 collection with 241 ETH in trading volume. Built smart contracts and full-stack infrastructure for generative NFT collection with Colombian cultural themes.",
  },
  {
    period: "2023 — 2023",
    role: "Smart Contract Developer — $CHONK Meme Coin",
    company: "Chonk Ecosystem",
    description:
      "Developed smart contracts for original meme token of Neon EVM. Helped $CHONK reach $1M market cap through community-driven features and DeFi integration.",
  },
  {
    period: "2023 — 2023",
    role: "Full-Stack & Smart Contract Developer — Chonkpool Staking dApp",
    company: "Chonk Ecosystem",
    description:
      "Built liquidity pool and staking platform for $CHONK token. Created DeFi protocols with Solidity, focusing on liquidity provision and staking mechanisms.",
  },
];

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Left Sidebar */}
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="border-0 rounded-lg bg-card">
          <div className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 mb-4 rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src="https://avatars.githubusercontent.com/u/65030730?v=4"
                  alt="Sonny Castro"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-semibold mb-1">Sonny Castro</h1>
              <p className="text-muted-foreground mb-4">Full Stack Web3 Developer</p>

              {/* Social Links */}
              <div className="flex gap-2 mb-4">
                <a
                  href="https://github.com/sonnycastro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-md bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors text-lg"
                >
                  🐙
                </a>
                <a
                  href="https://x.com/corleone_gmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-md bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors text-lg"
                >
                  𝕏
                </a>
                <a
                  href="https://t.me/sonnyeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-md bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors text-lg"
                >
                  📱
                </a>
                <a
                  href="https://www.sonny.build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-md bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors text-lg"
                >
                  🌐
                </a>
              </div>

              {/* Wallet Address */}
              <div className="w-full">
                <p className="text-xs text-muted-foreground mb-2">Wallet Address</p>
                <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                  <Address address={walletAddress} />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  <Balance address={walletAddress} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-0 rounded-lg bg-card">
          <div className="p-4">
            <nav className="space-y-1">
              {[
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    activeTab === tab.id ? "bg-secondary text-secondary-foreground" : "hover:bg-muted"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-2">
        <div className="border-0 rounded-lg bg-card">
          <div className="p-8">
            {activeTab === "about" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">About</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I&apos;m a passionate full-stack developer with expertise in Web3 technologies and never stops
                      learning. I love soccer and building innovative solutions that push the boundaries of what&apos;s
                      possible in decentralized technology.
                    </p>
                    <p>
                      Currently working at ArenaX Labs, where I develop cutting-edge DeFi protocols and onchain gaming
                      experiences. I&apos;m particularly interested in smart contract development, NFT collections, and
                      creating seamless user experiences in the Web3 space.
                    </p>
                    <p>
                      When I&apos;m not coding, you can find me contributing to open source projects, exploring new
                      blockchain technologies, or watching soccer matches. I believe in the power of decentralized
                      technology to create a more open and accessible internet.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Node.js",
                      "Solidity",
                      "Web3.js",
                      "Ethers.js",
                      "Hardhat",
                      "Foundry",
                      "DeFi",
                      "NFTs",
                      "Smart Contracts",
                      "Tailwind CSS",
                    ].map(skill => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Projects</h2>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pb-6 last:pb-0 hover:bg-muted/50 rounded-lg p-4 -m-4 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium">{project.title}</h3>
                        <span className="text-sm">🔗</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map(tech => (
                          <span key={tech} className="text-xs px-2 py-1 rounded border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-b border-border pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium">{exp.role}</h3>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
