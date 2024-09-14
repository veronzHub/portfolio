import type { Metadata } from "next";

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
      <body className="base-100">{children}</body>
    </html>
  );
}
