import { getDictionary, type Lang } from "@/content/dictionaries";

export default async function DeliveryPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <section className="luxe-container py-16 md:py-24">
      <div className="max-w-[820px]">
        <div className="luxe-kicker">OROSKI</div>
        <h1 className="luxe-h1 mt-4">{dict.pages.delivery.title}</h1>
        <p className="mt-7 luxe-body whitespace-pre-line">{dict.pages.delivery.body}</p>
      </div>
    </section>
  );
}
