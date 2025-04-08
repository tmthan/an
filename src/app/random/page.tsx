import { Random } from "@/modules/random";
import { Metadata, Viewport } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Hôm nay ăn gì?",
    description: "Dành cho mấy đứa không biết ăn gì",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RandomPage() {
  return <Random />;
}
