import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ferdinand Macagba | AI-Assisted Application Developer",
  description:
    "Human-led, AI-assisted application developer specialising in SaaS, e-commerce and responsible AI. 6 live projects. Based in London, UK.",
  keywords: [
    "Ferdinand Macagba",
    "AI-Assisted Application Developer",
    "SaaS Developer",
    "Responsible AI",
    "Next.js",
    "React",
    "TypeScript",
    "Shopify",
    "London",
  ],
  authors: [{ name: "Ferdinand Macagba" }],
  openGraph: {
    title: "Ferdinand Macagba | AI-Assisted Application Developer",
    description:
      "Human-led, AI-assisted application developer specialising in SaaS, e-commerce and responsible AI. 6 live projects. Based in London, UK.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdinand Macagba | AI-Assisted Application Developer",
    description:
      "Human-led, AI-assisted application developer specialising in SaaS, e-commerce and responsible AI. 6 live projects. Based in London, UK.",
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
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-[#f9fafb]">
        {children}
      </body>
    </html>
  );
}
