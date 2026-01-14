import { getDictionary, type Lang } from "@/content/dictionaries";

export default async function CollectionPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <section className="luxe-container py-16 md:py-24">
      <div className="max-w-[820px]">
        <div className="luxe-kicker">OROSKI</div>
        <h1 className="luxe-h1 mt-4">{dict.pages.collection.title}</h1>
        <p className="mt-7 luxe-body whitespace-pre-line">{dict.pages.collection.body}</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { src: "/images/fragrance.jpg", label: lang === "fr" ? "Fragrances" : "Fragrances" },
            { src: "/images/experience-2.jpg", label: lang === "fr" ? "Objets" : "Objects" },
            { src: "/images/experience-3.jpg", label: lang === "fr" ? "Rituels" : "Rituals" }
          ].map((it) => (
            <div key={it.src} className="overflow-hidden shadow-soft bg-ivory">
              <div className="h-[220px] bg-cover bg-center" style={{ backgroundImage: `url(${it.src})` }} aria-label={it.label} />
              <div className="p-6">
                <div className="text-[12px] tracking-[0.18em] uppercase text-stone">{dict.brand.tagline}</div>
                <div className="mt-2 font-serif text-[18px] leading-snug">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
