import SectionSplit from "@/components/SectionSplit";
import SectionGrid from "@/components/SectionGrid";
import SectionEscape from "@/components/SectionEscape";
import { getDictionary, type Lang } from "@/content/dictionaries";

export default async function HomePage({
  params
}: {
  params: Promise<{ lang: Lang }>;
})
{
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      {/* HERO — lisibilité premium + rendu luxe */}
      <section className="relative min-h-[82vh] md:min-h-[92vh]">
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-spa.jpg)" }}
        />

        {/* Overlays : contraste stable sans effet "pub" */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-ivory/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

        <div className="relative luxe-container pt-28 md:pt-32">
          <div className="max-w-[560px] fade-in">
            <div className="luxe-kicker text-white/70">{dict.hero.kicker}</div>

            <h1 className="luxe-h1 mt-4 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              {dict.hero.title}
            </h1>

            <p className="mt-5 luxe-body text-white/88 max-w-[520px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              {dict.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Service d’Excellence */}
      <SectionSplit
        lang={lang}
        dict={dict}
        title={dict.sections.service.title}
        body={dict.sections.service.body}
        image="/images/service-lounger.jpg"
        imageAlt={dict.sections.service.imageAlt}
        reverse={false}
      />

      {/* L’art d’offrir */}
      <SectionSplit
        lang={lang}
        dict={dict}
        title={dict.sections.gifting.title}
        body={dict.sections.gifting.body}
        image="/images/fragrance.jpg"
        imageAlt={dict.sections.gifting.imageAlt}
        reverse={true}
      />

      {/* Expériences privées */}
      <SectionGrid lang={lang} dict={dict} />

      {/* Évadez-vous */}
      <SectionEscape lang={lang} dict={dict} />

      {/* Final band */}
      <section className="luxe-container py-16 md:py-24">
        <div className="border-t border-black/10 pt-10 md:pt-12">
          <p className="luxe-kicker">{dict.final.kicker}</p>
          <p className="mt-4 max-w-[680px] luxe-body">{dict.final.body}</p>
        </div>
      </section>
    </>
  );
}
