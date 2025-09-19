import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

// Move builderAddress outside component for better performance
const builderAddress = "0xdE2bDb0F443CAda8102A73940CC8E27079c513D4";

const KCProfile: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-8">
      <div className="px-5">
        <div className="flex justify-center items-center space-x-2">
          <h1 className="text-4xl font-bold">Builder Profile</h1>
        </div>
      </div>

      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
        <div className="flex justify-center items-center gap-12 flex-col lg:flex-row">
          {/* Main Profile Card */}
          <div className="flex flex-col bg-base-100 px-8 py-8 text-center items-center w-full max-w-md rounded-3xl shadow-xl">
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full mb-6 overflow-hidden shadow-lg">
              <Image
                src="/kc-profile.jpg"
                alt="KC Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Title */}
            <h2 className="text-4xl font-bold mb-3 text-base-content">KC</h2>
            <p className="text-xl text-primary mb-6">Full Stack Web3 Developer</p>

            {/* Location */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-base-content">🍀 Ireland</span>
            </div>

            {/* Address Component */}
            <div className="mb-8 w-full">
              <p className="text-sm opacity-70 mb-3">Wallet Address</p>
              <div className="bg-base-200 p-3 rounded-lg">
                <Address address={builderAddress} />
              </div>
            </div>

            {/* Quote/Motto */}
            <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl w-full border border-primary/20">
              <p className="text-sm italic text-base-content text-center font-medium">
                &ldquo;Always be learning &rdquo;
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-6 w-full max-w-lg">
            {/* Bio Card */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-base-content">About Me</h3>
              <p className="text-base leading-relaxed text-base-content">
                Irish developer passionate about web3 innovation and building decentralized solutions. Active in the
                Base & BuidlGuidl community and always exploring new blockchain technologies.
              </p>
            </div>

            {/* Skills Card */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-base-content">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-lg text-white bg-orange-500 border-orange-500">Solidity</span>
                <span className="badge badge-lg text-white bg-blue-600 border-blue-600">React</span>
                <span className="badge badge-lg text-white bg-blue-700 border-blue-700">TypeScript</span>
                <span className="badge badge-lg text-white bg-green-600 border-green-600">Node.js</span>
                <span className="badge badge-lg text-white bg-purple-600 border-purple-600">Ethereum</span>
                <span className="badge badge-lg text-white bg-yellow-600 border-yellow-600">Hardhat</span>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-base-content">Currently Building</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🚀</span>
                  <span className="text-base-content">BuidlGuidl Batch 20 challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎯</span>
                  <span className="text-base-content">Learning Scaffold-ETH 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌐</span>
                  <span className="text-base-content">DeFi & Web3 Projects</span>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-base-content">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/KCEire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm justify-start gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://x.com/stellarextinct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm justify-start gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>

                <a
                  href="https://farcaster.xyz/kc-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm justify-start gap-2"
                >
                  <Image src="/farcaster-white-black.png" alt="Farcaster" width={20} height={20} className="w-5 h-5" />
                  Farcaster
                </a>

                <a
                  href="https://kc8.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm justify-start gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KCProfile;
