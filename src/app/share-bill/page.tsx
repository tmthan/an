import { ShareBill } from "@/modules/share-bill";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Chia tiền hoá đơn",
    description: "Cái gì cũng phải sòng phằng",
  };
}

export default function RandomPage() {
  return <ShareBill />;
}
