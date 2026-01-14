import type { Lang, Dictionary } from "@/content/dictionaries";

export default function SectionEscape({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section className="luxe-container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative min-h-[360px] md:min-h-[520px] shadow-soft overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/banquet.jpg)" }} aria-label={dict.sections.escape.imageAlt} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        </div>

        <div className="fade-in">
          <div className="luxe-kicker">{dict.sections.escape.kicker}</div>
          <h2 className="luxe-h2 mt-4">{dict.sections.escape.title}</h2>
          <p className="mt-6 luxe-body whitespace-pre-line">{dict.sections.escape.body}</p>

          <div className="mt-8 flex items-center gap-3">
            <a href={`/${lang}/contact`} className="px-5 py-3 bg-ink text-ivory text-[12px] tracking-[0.18em] uppercase hover:opacity-90 transition">
              {dict.sections.escape.ctaPrimary}
            </a>
            <a href={`/${lang}/collection`} className="px-5 py-3 border border-black/15 text-[12px] tracking-[0.18em] uppercase hover:border-black/30 transition">
              {dict.sections.escape.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
