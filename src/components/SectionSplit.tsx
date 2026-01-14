import type { Lang, Dictionary } from "@/content/dictionaries";

export default function SectionSplit({
  title,
  body,
  image,
  imageAlt,
  reverse
}: {
  lang: Lang;
  dict: Dictionary;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="luxe-container py-16 md:py-24">
      <div className={`grid md:grid-cols-2 gap-10 md:gap-14 items-stretch ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="fade-in">
          <div className="luxe-kicker">OROSKI</div>
          <h2 className="luxe-h2 mt-4">{title}</h2>
          <p className="mt-6 luxe-body whitespace-pre-line">{body}</p>
        </div>

        <div className="relative min-h-[360px] md:min-h-[520px] shadow-soft overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-label={imageAlt} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
