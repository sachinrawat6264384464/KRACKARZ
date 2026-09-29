import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krackerz | World's First Sales Course for Designers",
  description: "Learn how to pitch your work, win clients, and convince any room. Built for UX, product, and brand designers ready to level up.",
  keywords: ["sales course for designers", "UX design presentation", "design soft skills", "portfolio review", "designer career growth", "Krackerz"],
  openGraph: {
    title: "Krackerz | World's First Sales Course for Designers",
    description: "Learn how to pitch your work, win clients, and convince any room. Built for UX, product, and brand designers ready to level up.",
    url: "https://krackerz.com/",
    siteName: "Krackerz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krackerz | Sales Course for Designers",
    description: "Learn how to pitch your work, win clients, and convince any room.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Changa+One&family=Titan+One&family=Dela+Gothic+One&family=Inter:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#C8FF2E] selection:text-[#161616]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
