import SectionSplit from "@/components/SectionSplit";
import SectionGrid from "@/components/SectionGrid";
import SectionEscape from "@/components/SectionEscape";
import { getDictionary, type Lang } from "@/content/dictionaries";

export default async function HomePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <section className="relative min-h-[82vh] md:min-h-[92vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-spa.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-ivory/90" />
        <div className="relative luxe-container pt-20 md:pt-28">
          <div className="max-w-[520px] fade-in">
            <div className="luxe-kicker">{dict.hero.kicker}</div>
            <h1 className="luxe-h1 mt-4 text-white">{dict.hero.title}</h1>
            <p className="mt-5 luxe-body text-white/85">{dict.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <SectionSplit
        lang={lang}
        dict={dict}
        title={dict.sections.service.title}
        body={dict.sections.service.body}
        image="/images/service-lounger.jpg"
        imageAlt={dict.sections.service.imageAlt}
        reverse={false}
      />

      <SectionSplit
        lang={lang}
        dict={dict}
        title={dict.sections.gifting.title}
        body={dict.sections.gifting.body}
        image="/images/fragrance.jpg"
        imageAlt={dict.sections.gifting.imageAlt}
        reverse={true}
      />

      <SectionGrid lang={lang} dict={dict} />
      <SectionEscape lang={lang} dict={dict} />

      <section className="luxe-container py-16 md:py-24">
        <div className="border-t border-black/10 pt-10 md:pt-12">
          <p className="luxe-kicker">{dict.final.kicker}</p>
          <p className="mt-4 max-w-[680px] luxe-body">{dict.final.body}</p>
        </div>
      </section>
    </>
  );
}
