import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Kalam } from "next/font/google";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

const nunito = Nunito({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Veronica Coulombe - Front-End Web Developer",
  description:
    "Veronica Coulombe is a Front-End Web Developer based in Seattle, Washington.",
  openGraph: {
    images: "/og-1200x630.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${nunito.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
