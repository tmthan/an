"use client";
import * as React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  randomListCollection,
  randomListRepository,
} from "@/modules/random/databse";
import {
  shareBillCollection,
  shareBillRepository,
} from "@/modules/share-bill/database";
import "./global.css";

const queryClient = new QueryClient();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isInitDb, setIsInitDb] = React.useState(false);

  async function initDatabase() {
    const randomList = await randomListRepository.getRandomList();
    randomListCollection.insert(randomList);
    const shareBill = await shareBillRepository.getShareBill();
    shareBillCollection.insert(shareBill);
    queryClient.invalidateQueries();
  }

  React.useEffect(() => {
    if (!isInitDb) {
      initDatabase();
      setIsInitDb(true);
    }
  }, [isInitDb]);

  return (
    <html lang="en">
      <body
        style={{ overflow: "hidden", padding: 0, margin: 0 }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#945034",
                borderRadius: 12,

                // Alias Token

                colorLink: "#945034",
              },
            }}
          >
            {children}
          </ConfigProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
