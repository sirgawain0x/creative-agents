import type { Metadata } from "next";
import { Providers } from "./components/providers";
import SimpleNavigation from "./components/SimpleNavigation";

import "./globals.css";
import "@coinbase/onchainkit/styles.css";

export const metadata: Metadata = {
  title: "Creative TV",
  description: "The way content should be.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <Providers>
          <SimpleNavigation />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
