import { ShareBill } from "@/modules/share-bill";
import { Metadata, Viewport } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Chia tiền hoá đơn",
    description: "Cái gì cũng phải sòng phằng",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
}

export default function RandomPage() {
  return <ShareBill />;
}
