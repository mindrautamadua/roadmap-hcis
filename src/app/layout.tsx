import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roadmap HCIS 2026–2030",
  description: "Human Capital Information System Roadmap — SAP + IHCMIS, Full Hire-to-Retire Transformation",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#060b18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#060b18] text-[#e8ecf4]">
        {children}
      </body>
    </html>
  );
}
