import { getDictionary, type Lang } from "@/content/dictionaries";

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <section className="luxe-container py-16 md:py-24">
      <div className="max-w-[820px]">
        <div className="luxe-kicker">OROSKI</div>
        <h1 className="luxe-h1 mt-4">{dict.pages.contact.title}</h1>
        <p className="mt-7 luxe-body whitespace-pre-line">{dict.pages.contact.body}</p>

        <form className="mt-12 grid gap-4 max-w-[560px]">
          <input className="w-full border border-black/15 bg-ivory px-4 py-3 text-[14px] outline-none focus:border-black/30"
                 placeholder={lang === "fr" ? "Nom" : "Name"} aria-label={lang === "fr" ? "Nom" : "Name"} />
          <input className="w-full border border-black/15 bg-ivory px-4 py-3 text-[14px] outline-none focus:border-black/30"
                 placeholder="Email" aria-label="Email" />
          <textarea className="w-full min-h-[140px] border border-black/15 bg-ivory px-4 py-3 text-[14px] outline-none focus:border-black/30"
                    placeholder={lang === "fr" ? "Votre message" : "Your message"}
                    aria-label={lang === "fr" ? "Votre message" : "Your message"} />
          <button type="button" className="w-fit px-6 py-3 bg-ink text-ivory text-[12px] tracking-[0.18em] uppercase hover:opacity-90 transition">
            {lang === "fr" ? "Envoyer" : "Send"}
          </button>
          <p className="text-[12px] text-stone tracking-[0.08em] mt-2">
            {lang === "fr" ? "Formulaire vitrine : branchement email/API à faire ensuite." : "Showcase form: email/API wiring to be added next."}
          </p>
        </form>
      </div>
    </section>
  );
}
