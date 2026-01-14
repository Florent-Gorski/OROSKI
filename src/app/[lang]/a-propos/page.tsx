import { getDictionary, type Lang } from "@/content/dictionaries";

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <section className="luxe-container py-16 md:py-24">
      <div className="max-w-[820px]">
        <div className="luxe-kicker">OROSKI</div>
        <h1 className="luxe-h1 mt-4">{dict.pages.about.title}</h1>
        <p className="mt-7 luxe-body whitespace-pre-line">{dict.pages.about.body}</p>

        <div className="mt-12 border-t border-black/10 pt-8">
          <p className="text-[12px] tracking-[0.18em] uppercase text-stone">Signature</p>
          <p className="mt-3 font-serif text-[18px] leading-snug">
            {lang === "fr" ? "Une esthétique du calme. Une précision invisible." : "An aesthetic of calm. Invisible precision."}
          </p>
        </div>
      </div>
    </section>
  );
}
