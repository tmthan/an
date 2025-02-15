"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Flex, Layout, Menu, MenuProps } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
  HeartOutlined,
  HomeOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

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
  const menuItems: MenuProps["items"] = [
    {
      key: "home",
      label: <Link href="/">Trang chủ</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: "random",
      label: <Link href="/random">Món ngẫu nhiên</Link>,
      icon: <QuestionCircleOutlined />,
    },
    {
      key: "share-bill",
      label: <Link href="/share-bill">Chia tiền</Link>,
      icon: <PieChartOutlined />,
    },
    {
      key: "my-favorite",
      label: <Link href="/my-favorite">Quán ngon của tui</Link>,
      icon: <HeartOutlined />,
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Flex gap="middle" wrap>
          <Layout>
            <Sider width="25%">
              <Menu
                mode="inline"
                defaultSelectedKeys={["home"]}
                style={{ height: "100%" }}
                items={menuItems}
              />
            </Sider>
            <Layout>
              <Content>{children}</Content>
            </Layout>
          </Layout>
        </Flex>
      </body>
    </html>
  );
}
