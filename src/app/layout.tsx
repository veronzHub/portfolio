import type { Metadata } from "next";

import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qgl6dif.css" />
      </head>
      <body className="base-100">{children}</body>
    </html>
  );
}
