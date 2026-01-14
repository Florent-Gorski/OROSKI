import type { Lang, Dictionary } from "@/content/dictionaries";

export default function SectionGrid({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section className="bg-sand/35">
      <div className="luxe-container py-16 md:py-24">
        <div className="max-w-[740px] fade-in">
          <div className="luxe-kicker">{dict.sections.experiences.kicker}</div>
          <h2 className="luxe-h2 mt-4">{dict.sections.experiences.title}</h2>
          <p className="mt-6 luxe-body">{dict.sections.experiences.body}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-7">
          {[
            { src: "/images/experience-1.jpg", label: dict.sections.experiences.cards[0] },
            { src: "/images/experience-2.jpg", label: dict.sections.experiences.cards[1] },
            { src: "/images/experience-3.jpg", label: dict.sections.experiences.cards[2] }
          ].map((it) => (
            <div key={it.src} className="overflow-hidden shadow-soft bg-ivory">
              <div className="h-[220px] bg-cover bg-center" style={{ backgroundImage: `url(${it.src})` }} aria-label={it.label} />
              <div className="p-6">
                <div className="text-[12px] tracking-[0.18em] uppercase text-stone">{dict.brand.tagline}</div>
                <div className="mt-2 font-serif text-[18px] leading-snug">{it.label}</div>
                <a className="mt-5 inline-block text-[12px] tracking-[0.18em] uppercase text-ink/80 hover:text-ink transition" href={`/${lang}/contact`}>
                  {dict.sections.experiences.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
