import fs from "fs";
import path from "path";
import { Address, createPublicClient, decodeEventLog, getAddress, http } from "viem";
import { arbitrum } from "viem/chains";
import { Address as AddressComponent } from "~~/components/scaffold-eth";
import externalContracts from "~~/contracts/externalContracts";

const BATCH_REGISTRY = externalContracts[arbitrum.id]?.BatchRegistry?.address as Address;

const BatchRegistryAbi = [
  {
    type: "event",
    name: "CheckedIn",
    inputs: [
      { name: "first", type: "bool", indexed: false },
      { name: "builder", type: "address", indexed: false },
      { name: "checkInContract", type: "address", indexed: false },
    ],
    anonymous: false,
  },
] as const;

const client = createPublicClient({
  chain: arbitrum,
  transport: http("https://arb1.arbitrum.io/rpc"),
});

function findBuilderPagePath(addr: string): string | null {
  const variations = [
    addr.toLowerCase(),
    addr.toUpperCase(),
    getAddress(addr), // checksummed
    addr, // original
  ];

  for (const variation of variations) {
    const p = path.join(process.cwd(), "app", "builders", variation, "page.tsx");
    if (fs.existsSync(p)) {
      return variation;
    }
  }

  return null;
}

async function getBuildersFromEvents(): Promise<string[]> {
  const logs = await client.getLogs({
    address: BATCH_REGISTRY,
    fromBlock: 379755149n,
    toBlock: "latest",
  });

  const firstTimeBuilders = new Set<string>();

  for (const log of logs) {
    try {
      if (!log.topics || log.topics.length === 0) continue;

      const decoded = decodeEventLog({
        abi: BatchRegistryAbi,
        data: log.data,
        topics: log.topics as [signature: `0x${string}`, ...args: `0x${string}`[]],
      });

      if (decoded.eventName === "CheckedIn") {
        const { first, builder } = decoded.args as {
          first: boolean;
          builder: Address;
          checkInContract: Address;
        };
        if (first) {
          firstTimeBuilders.add(builder.toLowerCase());
        }
      }
    } catch {}
  }
  return Array.from(firstTimeBuilders).sort();
}

export default async function BuildersPage() {
  const builders = await getBuildersFromEvents();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-8 bg-gradient-to-b from-zinc-600 to-zinc-800 rounded-full"></div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Batch #20 Builders</h1>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Fetched from{" "}
            <code className="font-mono text-xs sm:text-sm bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
              {BATCH_REGISTRY}
            </code>{" "}
            (Arbitrum) via{" "}
            <code className="font-mono text-xs sm:text-sm bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
              CheckedIn
            </code>{" "}
            events.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <div className="bg-white dark:bg-zinc-900/50 rounded-2xl p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                {builders.length}
              </div>
              <div className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                Builders Registered
              </div>
            </div>
          </div>
        </div>

        {/* Builders List */}
        {builders.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-zinc-500 dark:text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400">No builders found yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {builders.map(addr => {
              const resolvedPagePath = findBuilderPagePath(addr);

              return (
                <div
                  key={addr}
                  className="group bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/20 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left side - Address and Profile */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 min-w-0 flex-1">
                      <div className="flex-shrink-0">
                        <AddressComponent address={addr as Address} />
                      </div>
                      {resolvedPagePath && (
                        <a
                          className="inline-flex items-center gap-2 text-sm bg-zinc-800 dark:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-xl hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-all duration-200 font-medium border border-zinc-700 dark:border-zinc-600 w-fit"
                          href={`/builders/${resolvedPagePath}`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          View Profile
                        </a>
                      )}
                    </div>

                    {/* Right side - Arbiscan link */}
                    <a
                      className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-200 font-medium w-fit"
                      href={`https://arbiscan.io/address/${addr}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Arbiscan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
