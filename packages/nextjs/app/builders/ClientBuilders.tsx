"use client";

import { Address } from "viem";
import { Address as AddressComponent } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

type Props = { existingSlugMap: Record<string, string> };

type CheckedInArgs = {
  first: boolean;
  builder: Address;
  checkInContract: Address;
};

const CONTRACT_NAME = "BatchRegistry";
const EVENT_NAME = "CheckedIn";
const FROM_BLOCK = 379755149n;

export default function ClientBuilders({ existingSlugMap }: Props) {
  const {
    data: logs,
    isLoading,
    error,
  } = useScaffoldEventHistory({
    contractName: CONTRACT_NAME,
    eventName: EVENT_NAME,
    watch: true,
    fromBlock: FROM_BLOCK,
    blocksBatchSize: 500_000,
  });

  const builders = (() => {
    const set = new Set<string>();
    (logs ?? []).forEach(l => {
      const args = l.args as unknown as CheckedInArgs;
      if (args?.first && args?.builder) set.add(args.builder.toLowerCase());
    });
    return Array.from(set).sort();
  })();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-8 bg-gradient-to-b from-zinc-600 to-zinc-800 rounded-full" />
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Batch #20 Builders</h1>
          </div>
        </div>

        {isLoading && <div className="text-center py-12 text-zinc-500 dark:text-zinc-400">Loading events…</div>}
        {error && (
          <div className="text-center py-12 text-red-600 dark:text-red-400">
            Error reading events: {String((error as any)?.message ?? error)}
          </div>
        )}

        {!isLoading && !error && (
          <>
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400">No builders found yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {builders.map(addrLower => {
                  const slug = existingSlugMap[addrLower];
                  return (
                    <div
                      key={addrLower}
                      className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 min-w-0 flex-1">
                          <div className="flex-shrink-0">
                            <AddressComponent address={("0x" + addrLower.replace(/^0x/, "")) as Address} />
                          </div>
                          {slug && (
                            <a
                              className="inline-flex items-center gap-2 text-sm bg-zinc-800 dark:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-xl hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-all duration-200 font-medium border border-zinc-700 dark:border-zinc-600 w-fit"
                              href={`/builders/${slug}`}
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
                        <a
                          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-200 font-medium w-fit"
                          href={`https://arbiscan.io/address/${addrLower}`}
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
          </>
        )}
      </main>
    </div>
  );
}
