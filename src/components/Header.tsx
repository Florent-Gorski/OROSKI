import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Lang, Dictionary } from "@/content/dictionaries";

export default function Header({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ivory/75 border-b border-black/10">
      <div className="luxe-container h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-baseline gap-2">
          <span className="font-serif tracking-[0.18em] text-[13px]">OROSKI</span>
          <span className="text-[11px] text-stone hidden sm:inline">{dict.brand.tagline}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[12px] tracking-[0.18em] uppercase text-[#1C1C1C]/90">
          <Link href={`/${lang}`} className="hover:opacity-70 transition">{dict.nav.home}</Link>
          <Link href={`/${lang}/collection`} className="hover:opacity-70 transition">{dict.nav.collection}</Link>
          <Link href={`/${lang}/livraison`} className="hover:opacity-70 transition">{dict.nav.delivery}</Link>
          <Link href={`/${lang}/a-propos`} className="hover:opacity-70 transition">{dict.nav.about}</Link>
          <Link href={`/${lang}/contact`} className="hover:opacity-70 transition">{dict.nav.contact}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
