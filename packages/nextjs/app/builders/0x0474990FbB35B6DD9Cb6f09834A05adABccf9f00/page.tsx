import Image from "next/image";
import type { Metadata, NextPage } from "next";

// Importiere die Image-Komponente

export const metadata: Metadata = {
  title: "Julian — Batch #20",
  description: "Builder page for Batch #20",
};

const JuliansPage: NextPage = () => {
  const address = "0x0474990FbB35B6DD9Cb6f09834A05adABccf9f00";

  const socials = [
    {
      link: "https://x.com/julian_s10",
      src: "https://img.icons8.com/?size=44&id=de4vjQ6J061l&format=png&color=00ff00",
      alt: "Julians Twitter",
    },
    {
      link: "https://github.com/JUlian-co",
      src: "https://img.icons8.com/?size=44&id=3tC9EQumUAuq&format=png&color=00ff00",
      alt: "Julians GitHub",
    },
    {
      link: "https://juliansinn.de",
      src: "https://img.icons8.com/?size=44&id=3685&format=png&color=00ff00",
      alt: "Julians Website",
    },
  ];

  const projects = [
    {
      link: "https://mipotr.vercel.app",
      src: "https://img.icons8.com/?size=36&id=olKh6d6aOG2q&format=png&color=00ff00",
      name: "MiPoTr",
      desc: "Mini portfolio tracker. (A weekend project)",
    },
    {
      link: "https://coinwizard.fun",
      src: "https://coinwizard.fun/_next/image?url=%2FCoinWizard.png&w=96&q=75",
      name: "CoinWizard",
      desc: "Create the next viral memecoin on Solana, without coding.",
    },
    {
      link: "https//brixpay.io",
      src: "https://www.brixpay.io/_next/image?url=%2FBrixLogo.png&w=96&q=75",
      name: "BrixPay",
      desc: "User friendly recurring crypto payments.",
    },
  ];

  return (
    <main className="bg-black selection:bg-[#00ff00]/80 selection:text-black w-full h-screen flex justify-center items-start p-8 text-lg font-mono text-[#00ff00]">
      <div className=" w-full flex items-center justify-center">
        <div className="max-w-2xl w-full flex flex-col justify-center items-center ring-2 ring-[#00ff00] p-8 bg-[#00ff00]/5 shadow-xl shadow-[#00ff00]/40">
          <Image
            src="https://bafybeie4x7zj4nyjfk2icrwjugrff32h7zgjarcbdktdgggqqkpoe5qxii.ipfs.dweb.link?filename=android-chrome-512x512.png"
            alt="Julians Logo"
            width={128}
            height={128}
            className="shadow-xl shadow-[#00ff00]/40"
          />
          <p className="font-semibold text-2xl mt-8 mb-0">Julian Sinn</p>
          <a
            className="flex items-center gap-2 cursor-pointer "
            href={`https://etherscan.io/address/${address}`}
            target="_blank"
          >
            <p className="text-base">
              {address.slice(0, 6)}...{address.slice(-4)}
            </p>
            <Image
              src="https://img.icons8.com/?size=24&id=83168&format=png&color=00ff00"
              alt="View my address in Etherscan"
              width={24}
              height={24}
              className="w-max h-max"
            />
          </a>

          <div className="h-[1px] w-[90%] bg-[#00ff00] mb-8 mt-6" />

          <h2 className="font-semibold mb-4">Bio:</h2>
          <p className="leading-tight text-center mt-0">
            German web3 developer and tech enthusiast. I am currently building BrixPay to enable recurring crypto
            payments for everyone. Happy to be in Batch #20 and get to know you.
          </p>

          <div className="h-[1px] w-[90%] bg-[#00ff00] my-8" />

          <h2 className="font-semibold mb-4">Projects:</h2>
          <div className="flex gap-12">
            {projects.map(project => (
              <a
                className="flex flex-col items-center cursor-pointer shadow-lg shadow-[#00ff00]/60 border-[1px] border-[#00ff00] p-4 hover:-translate-y-1.5 hover:shadow-[#00ff00]/40 hover:shadow-xl transition"
                href={project.link}
                key={project.name}
                target="_blank"
              >
                <Image src={project.src} alt={project.name} width={56} height={56} />
                <p>{project.name}</p>
                <desc className="text-sm leading-tight tracking-tight text-center">{project.desc}</desc>
              </a>
            ))}
          </div>

          <div className="h-[1px] w-[90%] bg-[#00ff00] my-8" />

          <h2 className="font-semibold mb-4">Socials:</h2>
          <div className="flex gap-8">
            {socials.map(social => (
              <a
                className="cursor-pointer hover:-translate-y-1 transition active:scale-95"
                key={social.alt}
                href={social.link}
                target="_blank"
              >
                <Image src={social.src} alt={social.alt} width={44} height={44} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default JuliansPage;
