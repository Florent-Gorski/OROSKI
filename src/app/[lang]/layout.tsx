import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, type Lang } from "@/content/dictionaries";

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main>{children}</main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
