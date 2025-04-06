"use client";
import * as React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  randomListCollection,
  randomListRepository,
} from "@/modules/random/databse";
import {
  shareBillCollection,
  shareBillRepository,
} from "@/modules/share-bill/database";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <Flex gap="middle" wrap>
            <Layout>
              <Layout>
                <Content>{children}</Content>
              </Layout>
            </Layout>
          </Flex>
        </QueryClientProvider>
      </body>
    </html>
  );
}
