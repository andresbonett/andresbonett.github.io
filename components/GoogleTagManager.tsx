"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtm from "../lib/gtm";

export default function GoogleTagManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      gtm.pageview(pathname);
    }
  }, [pathname]);

  return null;
}
