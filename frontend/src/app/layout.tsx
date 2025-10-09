
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "../styles/globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vivaldi Marketing",
    template: "%s | Vivaldi Marketing",
  },
  description:
    "Marketing solutions for translation and manufacturing businesses. We specialize in SEO, Ads, and content strategy.",
  icons: {
    icon: "/vivaldi-logo.svg", 
  },
  openGraph: {
    title: "Vivaldi Marketing",
    description:
      "Helping translation and manufacturing businesses grow with tailored marketing strategies.",
    url: "https://vivaldimkt.com", 
    siteName: "Vivaldi Marketing",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://vivaldimkt.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.variable}>
        {children}
      </body>
    </html>
  );
}
