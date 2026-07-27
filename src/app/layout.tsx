import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saroja Polasapalli — Mayor · Leader · Reformer",
  description:
    "Official portfolio of Saroja Polasapalli — India's 4th and Andhra Pradesh's youngest Mayor of the Kakinada Municipal Corporation (2005–2010). A journey of courage, conviction, and service.",
  keywords: [
    "Saroja Polasapalli",
    "Saroja Mayor",
    "Kakinada Mayor",
    "Andhra Pradesh politics",
    "YSRCP",
    "Polasapalli Foundation",
    "youngest mayor India",
    "Kakinada Municipal Corporation",
  ],
  authors: [{ name: "Saroja Polasapalli" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Saroja Polasapalli — Mayor · Leader · Reformer",
    description:
      "India's 4th & AP's Youngest Mayor. A journey of courage, conviction, and service to the people of Andhra Pradesh.",
    siteName: "Saroja Polasapalli",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saroja Polasapalli — Mayor · Leader · Reformer",
    description:
      "India's 4th & AP's Youngest Mayor. A journey of courage, conviction, and service to the people of Andhra Pradesh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${jakarta.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
