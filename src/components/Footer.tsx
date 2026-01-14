import type { Lang, Dictionary } from "@/content/dictionaries";
import Link from "next/link";

export default function Footer({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <footer className="border-t border-black/10 bg-ivory">
      <div className="luxe-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-serif tracking-[0.18em] text-[13px]">OROSKI</div>
            <p className="mt-4 luxe-body max-w-[360px]">{dict.footer.about}</p>
          </div>

          <div>
            <div className="luxe-kicker">{dict.footer.contactTitle}</div>
            <ul className="mt-4 space-y-2 text-[14px] text-[#1C1C1C]/85">
              <li>{dict.footer.contactLine1}</li>
              <li>{dict.footer.contactLine2}</li>
              <li className="text-stone text-[12px] tracking-[0.16em] uppercase pt-3">{dict.footer.note}</li>
            </ul>
          </div>

          <div>
            <div className="luxe-kicker">{dict.footer.linksTitle}</div>
            <ul className="mt-4 space-y-2 text-[14px] text-[#1C1C1C]/85">
              <li><Link className="hover:opacity-70 transition" href={`/${lang}`}>{dict.nav.home}</Link></li>
              <li><Link className="hover:opacity-70 transition" href={`/${lang}/collection`}>{dict.nav.collection}</Link></li>
              <li><Link className="hover:opacity-70 transition" href={`/${lang}/livraison`}>{dict.nav.delivery}</Link></li>
              <li><Link className="hover:opacity-70 transition" href={`/${lang}/a-propos`}>{dict.nav.about}</Link></li>
              <li><Link className="hover:opacity-70 transition" href={`/${lang}/contact`}>{dict.nav.contact}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[12px] text-stone tracking-[0.14em] uppercase">
          <span>© {new Date().getFullYear()} OROSKI</span>
          <span>{dict.footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
