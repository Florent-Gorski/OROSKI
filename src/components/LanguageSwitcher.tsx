"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/content/dictionaries";

function swapLang(pathname: string, target: Lang) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  if (parts[0] === "fr" || parts[0] === "en") parts[0] = target;
  else parts.unshift(target);
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  const pathname = usePathname() || "/";
  const frHref = swapLang(pathname, "fr");
  const enHref = swapLang(pathname, "en");

  return (
    <div className="flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase">
      <Link
        href={frHref}
        className={`px-2 py-1 border border-black/15 hover:border-black/30 transition ${currentLang === "fr" ? "bg-black text-ivory" : "bg-transparent"}`}
      >
        FR
      </Link>
      <Link
        href={enHref}
        className={`px-2 py-1 border border-black/15 hover:border-black/30 transition ${currentLang === "en" ? "bg-black text-ivory" : "bg-transparent"}`}
      >
        EN
      </Link>
    </div>
  );
}
