"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { HTTPException } from "hono/http-exception";
import { PropsWithChildren, useState } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base, baseSepolia } from "wagmi/chains"; // add baseSepolia for testing

import { WagmiProvider, createConfig, http } from "wagmi";
import { coinbaseWallet } from "wagmi/connectors";

const wagmiConfig = createConfig({
  chains: [baseSepolia, base],
  connectors: [
    coinbaseWallet({
      appName: "Creative TV",
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http()
  },
});

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err) => {
            if (err instanceof HTTPException) {
              // global error handling, e.g. toast notification ...
            }
          },
        }),
      })
  );

  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          name: "Creative TV", // Displayed in modal header
          logo: "https://fleek.xyz/favicon.ico", // Displayed in modal header
          mode: "dark", // 'light' | 'dark' | 'auto'
          theme: "default", // 'default' or custom theme
        },
        wallet: {
          display: "modal",
          termsUrl: "https://fleek.xyz/legal/terms-of-service/",
          privacyUrl: "https://fleek.xyz/legal/privacy-policy/",
        },
      }}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </OnchainKitProvider>
  );
};
