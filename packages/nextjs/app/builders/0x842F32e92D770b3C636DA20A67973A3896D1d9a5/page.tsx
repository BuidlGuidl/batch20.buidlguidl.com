import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const Sahib: NextPage = () => {
  return (
    <div className="flex w-full h-[75vh] flex-col items-center justify-center gap-8">
      <div className="max-w-2xl w-full bg-[var(--color-base-100)]   mt-8 shadow-lg shadow-amber-900 rounded-xl p-8 backdrop-blur-sm transition-all hover:shadow-xl">
        <h1 className="text-center text-4xl font-bold  mb-6">Hi, I&apos;m Netero</h1>
        <p className="text-lg  leading-relaxed">
          Freelancer from Vietnam 🇻🇳
          <br />
          <br />
          My tech stack: Solidity, Rust, Typescript.
          <br />
          <br />
          Currently I&apos;m learning Cairo, and ZK (still stucking with the math lol).
          <br />
          <br />
          I&apos;m really excited to join batch 20 and contribute to the Ethereum ecosystem.
        </p>
      </div>

      <div className="max-w-2xl w-full bg-[var(--color-base-100)] shadow-lg shadow-amber-900 rounded-xl p-8  backdrop-blur-sm transition-all hover:shadow-xl">
        <p className="text-2xl font-bold mb-6 text-center">Connect With Me</p>
        <div className="flex gap-6 items-center justify-center">
          <a href="https://x.com/0xNetero201" target="_blank" className="transition-transform hover:scale-110">
            <Image width={50} height={50} src="/x-icon.png" alt="Twitter" className="rounded-lg" />
          </a>
          <a href="https://github.com/0xNetero" target="_blank" className="transition-transform hover:scale-110">
            <Image width={50} height={50} src="/github-icon.png" alt="GitHub" className="rounded-lg" />
          </a>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Address address="0x842F32e92D770b3C636DA20A67973A3896D1d9a5" />
        </div>
      </div>
    </div>
  );
};
export default Sahib;
