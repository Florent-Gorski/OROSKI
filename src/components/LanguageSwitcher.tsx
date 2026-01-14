"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/content/dictionaries";

function swapLang(pathname: string, target: Lang)
{
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  if (parts[0] === "fr" || parts[0] === "en") parts[0] = target;
  else parts.unshift(target);
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({
  currentLang,
  variant = "light"
}: {
  currentLang: Lang;
  variant?: "light" | "dark";
})
{
  const pathname = usePathname() || "/";
  const frHref = swapLang(pathname, "fr");
  const enHref = swapLang(pathname, "en");

  const base =
    "px-2 py-1 text-[12px] tracking-[0.18em] uppercase border transition";

  const styles =
    variant === "dark"
      ? {
        box: "border-white/35 hover:border-white/55",
        active: "bg-white text-ink",
        idle: "bg-transparent text-white/90"
      }
      : {
        box: "border-black/15 hover:border-black/30",
        active: "bg-ink text-ivory",
        idle: "bg-transparent text-ink/85"
      };

  return (
    <div className="flex items-center gap-2">
      <Link
        href={frHref}
        className={[
          base,
          styles.box,
          currentLang === "fr" ? styles.active : styles.idle
        ].join(" ")}
      >
        FR
      </Link>
      <Link
        href={enHref}
        className={[
          base,
          styles.box,
          currentLang === "en" ? styles.active : styles.idle
        ].join(" ")}
      >
        EN
      </Link>
    </div>
  );
}
