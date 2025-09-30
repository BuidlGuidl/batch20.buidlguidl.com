"use client";

import Image from "next/image";
import { useEnsAvatar } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const ADDRESS = "0x4eD2b3c68BB4fda084ce1591a210F4aC8b71234A" as const;
const ENS_NAME = "timkot.eth" as const;

export function ClientPage() {
  const { data: avatarUrl } = useEnsAvatar({ name: ENS_NAME, chainId: 1 });

  return (
    <div className="min-h-screen bg-base-300 text-base-content font-sans">
      <main className="max-w-4xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Profile Card */}
        <div className="bg-base-100 rounded-2xl p-6 border border-base-200 shadow-lg">
          {/* Avatar */}
          <div className="text-center mb-5">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt="ENS Avatar"
                width={120}
                height={120}
                className="rounded-full border-4 border-primary mx-auto"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center mx-auto text-5xl font-bold text-primary-content">
                T
              </div>
            )}
          </div>

          {/* Name & Title */}
          <div className="text-center mb-7">
            {/* ⬇️ orange in dark mode */}
            <h1 className="text-3xl font-bold mb-2 text-primary dark:text-orange-400">Timkot</h1>
            <p className="text-base-content/80 dark:text-orange-300 text-base">Batch #20 — Builder</p>
          </div>

          {/* Address */}
          <div className="bg-base-200 p-2 rounded-lg mb-5">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-base-content/70 dark:text-orange-300">🔗</span>
              <Address address={ADDRESS} />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <a
              href={`https://arbiscan.io/address/${ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-4 bg-base-200 hover:bg-base-300 rounded-lg !text-base-content dark:!text-orange-300 no-underline text-sm transition-colors"
            >
              🔍 View on Arbiscan
            </a>
            <a
              href="https://github.com/timkot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-4 bg-base-200 hover:bg-base-300 rounded-lg !text-base-content dark:!text-orange-300 no-underline text-sm transition-colors"
            >
              📱 GitHub
            </a>
            <a
              href="https://twitter.com/timkot_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-4 bg-base-200 hover:bg-base-300 rounded-lg !text-base-content dark:!text-orange-300 no-underline text-sm transition-colors"
            >
              🐦 X/Twitter
            </a>
          </div>
        </div>

        {/* Right Column - Content */}
        <div>
          {/* About Me */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-primary dark:text-orange-400">About Me</h2>
            <p className="text-lg leading-relaxed text-base-content dark:text-orange-300 mb-5">
              Web3 Marketing & Community Lead transitioning into Web3 Development. Passionate about building
              decentralized applications and growing Web3 communities.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-orange-400">Experience</h2>
            <div className="flex flex-col gap-3">
              {[
                "Ex Community Lead @ Humandone",
                "Ex Solana Collective CIS Representative",
                "Ex Talent Protocol Product Manager",
                "Ex Assisterr Head of Community",
              ].map((role, index) => (
                <div key={index} className="p-3 bg-base-100 rounded-lg border border-base-200">
                  <p className="text-base-content dark:text-orange-300 text-sm">{role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Focus Areas */}
          <section>
            {/* ⬇️ orange heading in dark mode */}
            <h2 className="text-2xl font-semibold mb-3 text-primary dark:text-orange-400">Focus Areas</h2>
            <div className="flex flex-wrap gap-2">
              {["Web3 Marketing", "Community Management", "Smart Contracts", "DApp Development"].map((skill, index) => (
                <span
                  key={index}
                  /* ⬇️ match Experience card bg + orange text in dark mode */
                  className="py-2 px-3 rounded-full text-sm font-medium bg-base-100 border border-base-200 text-base-content dark:text-orange-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
