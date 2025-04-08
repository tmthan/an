"use client";
import * as React from "react";
import { useSize } from "ahooks";
import { useEffect } from "react";

export const useIsDesktop = () => {
  const [documentBody, setDocumentBody] = React.useState<HTMLElement | null>(
    null
  );
  const size = useSize(documentBody);
  const isDesktop = (size?.width ?? 0) >= 768;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDocumentBody(window?.document?.body);
    }
  }, []);

  return isDesktop;
};
