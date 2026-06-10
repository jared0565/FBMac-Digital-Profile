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
  title: "Ferdinand Macagba | Digital Transformation & Web Development",
  description:
    "Portfolio of Ferdinand Macagba — Web Developer, AI Implementer, and Digital Transformation Specialist building modern web applications and SaaS platforms.",
  keywords: [
    "Ferdinand Macagba",
    "Web Developer",
    "AI Implementation",
    "Digital Transformation",
    "Next.js",
    "React",
    "TypeScript",
    "Cloud",
    "London",
  ],
  authors: [{ name: "Ferdinand Macagba" }],
  openGraph: {
    title: "Ferdinand Macagba | Digital Transformation & Web Development",
    description:
      "Building modern web applications, SaaS platforms, and AI-enabled tools for businesses.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferdinand Macagba | Digital Transformation & Web Development",
    description:
      "Building modern web applications, SaaS platforms, and AI-enabled tools for businesses.",
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
