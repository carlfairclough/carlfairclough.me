"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const BackBar: FC = () => {
  const pathname = usePathname()
    .replace(/^\/+|\/+$/g, "")
    .split("/");
  if (pathname.length === 1 || pathname[0] === "projects") {
    return (
      <div className="mt-[8em] max-w-[50em] px-[4vw] mb-[2em]">
        <Link href="/" className="text-blue-700 inline-block">
          ← Home
        </Link>
      </div>
    );
  }

  if (pathname[0] === "writing") {
    return (
      <div className="mt-[8em] max-w-[50em] px-[4vw] mb-[2em]">
        <Link href="/writing" className="text-blue-700 inline-block">
          ← Writing
        </Link>
      </div>
    );
  }
  return null;
};
