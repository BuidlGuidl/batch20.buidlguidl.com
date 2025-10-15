import { Address } from "~~/components/scaffold-eth";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">👋 About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {`I'm`} <span className="font-semibold">Fede</span> from <span className="font-semibold">Argentina</span>. I
            love building real-world solutions and exploring new ideas every day.
          </p>
          <a
            href="https://x.com/fedev_ok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:underline"
          >
            Follow me on X
          </a>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3">💻 Solidity & MVPs</h2>
          <p className="text-gray-700 leading-relaxed">
            {`I'm`} passionate about <span className="font-semibold">Solidity development</span> and always try out new
            MVPs to learn and experiment.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col justify-center col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">🏆 Hackathons</h2>
          <p className="text-gray-700 leading-relaxed">
            I enjoy participating in <span className="font-semibold">hackathons</span>, including several by{" "}
            <span className="font-semibold">ETHGlobal</span>. These experiences push me to build fast, collaborate, and
            learn from other builders.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3">🔗 Ethereum Address</h2>
          <Address address="0xb959B7b6c3c0150CB2Fb72D1304ade0D484F827b" />
        </div>
      </div>
    </main>
  );
}
