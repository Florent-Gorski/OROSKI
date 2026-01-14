import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Lang, Dictionary } from "@/content/dictionaries";

/**
 * Header luxe constant :
 * - Background navy (stable sur toutes les pages)
 * - Logo centré
 * - Nav gauche + Nav droite
 * - Switch FR/EN à droite
 */
export default function Header({
  lang,
  dict
}: {
  lang: Lang;
  dict: Dictionary;
})
{
  return (
    <header className="oroski-header">
      <div className="luxe-container oroski-header__inner">
        {/* Nav gauche */}
        <nav className="oroski-header__nav oroski-header__nav--left" aria-label="Primary">
          <Link className="oroski-header__link" href={`/${lang}`}>
            {dict.nav.home}
          </Link>
          <Link className="oroski-header__link" href={`/${lang}/collection`}>
            {dict.nav.collection}
          </Link>
          <Link className="oroski-header__link" href={`/${lang}/livraison`}>
            {dict.nav.delivery}
          </Link>
        </nav>

        {/* Logo centré */}
        <Link href={`/${lang}`} className="oroski-header__brand" aria-label="OROSKI Home">
          <span className="oroski-header__mark" aria-hidden="true" />
          <span className="oroski-header__wordmark">OROSKI</span>
          <span className="oroski-header__tagline">{dict.brand.tagline}</span>
        </Link>

        {/* Nav droite + switch */}
        <div className="oroski-header__right">
          <nav className="oroski-header__nav oroski-header__nav--right" aria-label="Secondary">
            <Link className="oroski-header__link" href={`/${lang}/a-propos`}>
              {dict.nav.about}
            </Link>
            <Link className="oroski-header__link" href={`/${lang}/contact`}>
              {dict.nav.contact}
            </Link>
          </nav>

          <div className="oroski-header__lang">
            <LanguageSwitcher currentLang={lang} variant="navy" />
          </div>
        </div>
      </div>
    </header>
  );
}
