import type { Metadata } from "next";
import "./globals.css";
import {
  RocknRoll_One,
  Roboto,
  Bangers,
  Luckiest_Guy,
  Sriracha,
  Rampart_One,
  Atma,
  Mogra,
} from "next/font/google";

const rocknRollOne = RocknRoll_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rocknRoll-one",
});

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const mogra = Mogra({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mogra",
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
      className={`${rocknRollOne.variable} ${roboto.variable}  ${mogra.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
