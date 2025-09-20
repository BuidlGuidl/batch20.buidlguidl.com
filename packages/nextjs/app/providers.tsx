"use client";

import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, arbitrum } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, arbitrum],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: "Batch20 Profile" },
    }),
    new WalletConnectConnector({
      chains,
      options: { projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID! },
    }),
  ],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}

