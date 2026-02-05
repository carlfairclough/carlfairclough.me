"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const Nav: FC = () => {
  const path = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="px-[4vw] py-1 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-3 hover:opacity-70 transition-opacity ${
            path === "/" ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className="w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat -ml-4"
            style={{ backgroundImage: "url(/portrait.png)" }}
          />
          <span className="font-mono text-base text-black">
            Carl Fairclough
          </span>
        </Link>
        <Link
          href="/writing"
          className="ml-auto mr-8 text-slate-700 hover:text-blue-700"
        >
          Writing
        </Link>
        <div>
          <span className="bold mr-2">→</span>
          <a
            href="mailto:hi@carl.fyi"
            className="decoration-wavy decoration-blue-700 text-blue-700 underline decoration-1 hover:scale-105"
          >
            hi@carl.fyi
          </a>
        </div>
      </div>
    </nav>
  );
};
