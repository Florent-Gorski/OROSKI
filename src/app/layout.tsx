import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "OROSKI",
  description: "Maison d’expériences privées — Private luxury experiences."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
