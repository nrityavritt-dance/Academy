import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nrityavritt.vercel.app'),
  title: "Nrityavritt | Academy of Classical Kathak Dance - New Delhi",
  description: "Nrityavritt (नृत्यवृत्त) is an institute dedicated to the preservation and teaching of Jaipur Gharana Kathak, founded by Namita Dwivedi (Alankar Poorna, Gandharva Mahavidyalaya; Disciple of Smt. Monisa Nayak ji & Guru Shri Dheerendra Tiwari ji; MA, B.Ed).",
  keywords: [
    "Nrityavritt",
    "Kathak dance academy Delhi",
    "Namita Dwivedi kathak",
    "Jaipur Gharana Kathak classes",
    "Indian classical dance classes South Ganesh Nagar",
    "Weekend Kathak batch Delhi",
    "Gandharva Mahavidyalaya Alankar Poorna Kathak",
    "Prayag Sangeet Sameeti Kathak certification",
    "Learn Kathak online Delhi"
  ],
  openGraph: {
    title: "Nrityavritt | Academy of Classical Kathak Dance",
    description: "Preserving and teaching Jaipur Gharana Kathak under the pedagogical direction of Namita Dwivedi (Alankar Poorna, Gandharva Mahavidyalaya). Weekend batches at South Ganesh Nagar, Delhi.",
    url: "https://www.instagram.com/nrityavritt",
    siteName: "Nrityavritt Dance Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/intro_hero_main.jpeg",
        width: 1200,
        height: 630,
        alt: "Nrityavritt Classical Kathak Academy",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0c0507] text-[#fcf8f2] min-h-screen selection:bg-rose-900 selection:text-amber-100">
        {children}
      </body>
    </html>
  );
}
