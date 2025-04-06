import { Random } from "@/modules/random";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Chọn món ngẫu nhiên",
    description: "Dành cho mấy đứa không biết ăn gì",
  };
}

export default function RandomPage() {
  return <Random />;
}
