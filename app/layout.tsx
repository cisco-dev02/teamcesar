import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muay Thai Kids em Natal | Team Cesar",
  description:
    "Aulas de Muay Thai para crianças de 5 a 11 anos em Natal/RN. Desenvolva disciplina, coordenação e confiança. Consulte horários e condições. Aula experimental gratuita.",
  openGraph: {
    title: "Muay Thai Kids | Team Cesar",
    description:
      "Disciplina, respeito e evolução através do esporte. Conheça nossas turmas em Natal.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
