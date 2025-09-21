import Image from "next/image";
import type { Metadata, NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

// Importiere die Image-Komponente

export const metadata: Metadata = {
  title: "Julian — Batch #20",
  description: "Builder page for Batch #20",
};

const JuliansPage: NextPage = () => {
  const ADDRESS = "0x0474990FbB35B6DD9Cb6f09834A05adABccf9f00";

  const socials = [
    {
      link: "https://x.com/julian_s10",
      src: "/x.png",
      alt: "Julians Twitter",
    },
    {
      link: "https://github.com/JUlian-co",
      src: "/github.png",
      alt: "Julians GitHub",
    },
    {
      link: "https://juliansinn.de",
      src: "/globe.png",
      alt: "Julians Website",
    },
  ];

  const projects = [
    {
      link: "https://mipotr.vercel.app",
      src: "/piechart.png",
      name: "MiPoTr",
      desc: "Mini portfolio tracker. (A weekend project)",
    },
    {
      link: "https://coinwizard.fun",
      src: "/CoinWizard.png",
      name: "CoinWizard",
      desc: "Create the next viral memecoin on Solana, without coding.",
    },
    {
      link: "https//brixpay.io",
      src: "/BrixLogo.png",
      name: "BrixPay",
      desc: "User friendly recurring crypto payments.",
    },
  ];

  return (
    <main className="bg-white dark:bg-black selection:bg-[#00ff00]/80 selection:text-black w-full h-screen flex justify-center items-start p-8 text-lg font-mono dark:text-[#00ff00] text-black">
      <div className=" w-full flex items-center justify-center">
        <div className="max-w-2xl w-full flex flex-col justify-center items-center ring-2 ring-black dark:ring-[#00ff00] p-8 bg-[#00ff00]/5 shadow-xl shadow-[#00ff00]/40">
          <Image
            src="https://avatars.githubusercontent.com/u/175946832?v=4"
            alt="Julians Logo"
            width={128}
            height={128}
            className="shadow-xl shadow-[#00ff00]/40"
          />
          <p className="font-semibold text-2xl mt-8 mb-0">Julian Sinn</p>

          <Address address={ADDRESS} />

          <div className="h-[1px] w-[90%] bg-black dark:bg-[#00ff00] mb-8 mt-6" />

          <h2 className="font-semibold mb-4">Bio:</h2>
          <p className="leading-tight text-center mt-0">
            German web3 developer and tech enthusiast. I am currently building BrixPay to enable recurring crypto
            payments for everyone. Happy to be in Batch #20 and get to know you.
          </p>

          <div className="h-[1px] w-[90%] bg-black dark:bg-[#00ff00] my-8" />

          <h2 className="font-semibold mb-4">Projects:</h2>
          <div className="flex gap-12">
            {projects.map(project => (
              <a
                className="flex flex-col items-center cursor-pointer shadow-lg shadow-black/60 dark:shadow-[#00ff00]/60 border-[1px] border-black dark:border-[#00ff00] p-4 hover:-translate-y-1.5 hover:shadow-[#00ff00]/40 hover:shadow-xl transition"
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

          <div className="h-[1px] w-[90%] bg-black dark:bg-[#00ff00] my-8" />

          <h2 className="font-semibold mb-4">Socials:</h2>
          <div className="flex gap-8">
            {socials.map(social => (
              <a
                className="cursor-pointer hover:-translate-y-1 transition active:scale-95 dark:invert-0 invert"
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
