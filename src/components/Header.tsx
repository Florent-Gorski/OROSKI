"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Lang, Dictionary } from "@/content/dictionaries";

export default function Header({
  lang,
  dict
}: {
  lang: Lang;
  dict: Dictionary;
})
{
  const [scrolled, setScrolled] = useState(false);

  useEffect(() =>
  {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = useMemo(() =>
  {
    // Avant scroll: overlay luxe
    // Après scroll: glass + bordure, très premium
    return [
      "fixed top-0 left-0 right-0 z-50",
      "transition-all duration-300",
      scrolled
        ? "backdrop-blur bg-ivory/82 border-b border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
        : "bg-transparent border-b border-transparent"
    ].join(" ");
  }, [scrolled]);

  const textClass = scrolled
    ? "text-[#1C1C1C]/90"
    : "text-white/90";

  const mutedClass = scrolled
    ? "text-stone"
    : "text-white/70";

  return (
    <header className={headerClass}>
      <div className="luxe-container h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-baseline gap-2">
          <span className={`font-serif tracking-[0.18em] text-[13px] ${textClass}`}>
            OROSKI
          </span>
          <span className={`text-[11px] hidden sm:inline ${mutedClass}`}>
            {dict.brand.tagline}
          </span>
        </Link>

        <nav
          className={`hidden md:flex items-center gap-7 text-[12px] tracking-[0.18em] uppercase ${textClass}`}
        >
          <Link href={`/${lang}`} className="hover:opacity-70 transition">
            {dict.nav.home}
          </Link>
          <Link href={`/${lang}/collection`} className="hover:opacity-70 transition">
            {dict.nav.collection}
          </Link>
          <Link href={`/${lang}/livraison`} className="hover:opacity-70 transition">
            {dict.nav.delivery}
          </Link>
          <Link href={`/${lang}/a-propos`} className="hover:opacity-70 transition">
            {dict.nav.about}
          </Link>
          <Link href={`/${lang}/contact`} className="hover:opacity-70 transition">
            {dict.nav.contact}
          </Link>
        </nav>

        <LanguageSwitcher currentLang={lang} variant={scrolled ? "light" : "dark"} />
      </div>
    </header>
  );
}
