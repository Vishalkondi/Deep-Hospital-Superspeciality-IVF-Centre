import type { Metadata } from "next";

import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileActionBar } from "@/components/ui/MobileActionBar";
import { HOSPITAL_STRUCTURED_DATA } from "@/lib/constants";

const playfairDisplay = { variable: "--font-display-stub" };
const inter = { variable: "--font-sans-stub" };

export const metadata: Metadata = {
  title: {
    default:
      "Deep Superspeciality Hospital & Solapur Test Tube Baby Centre | Expert Care in Solapur",
    template: "%s | Deep Superspeciality Hospital Solapur",
  },
  description:
    "Deep Superspeciality Hospital & Solapur Test Tube Baby Centre — Premier IVF, Critical Care, Urology, and Surgical care in Solapur, Maharashtra. 5000+ successful IVF cycles. 24/7 emergency care.",
  keywords: [
    "IVF Solapur",
    "Test Tube Baby Centre Solapur",
    "hospital Solapur",
    "fertility clinic Solapur",
    "urology Solapur",
    "critical care Solapur",
    "IVF centre Maharashtra",
    "gynaecologist Solapur",
    "Dr Archana Shah",
    "Dr Harshit Shah",
  ],
  openGraph: {
    title:
      "Deep Superspeciality Hospital & Solapur Test Tube Baby Centre",
    description:
      "Premier IVF, Critical Care, Urology, and Surgical care in Solapur, Maharashtra.",
    url: "https://deephospital.in",
    siteName: "Deep Superspeciality Hospital",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(HOSPITAL_STRUCTURED_DATA),
          }}
        />
      </head>
      <body className="font-sans bg-warm-white text-text-primary antialiased pb-14 md:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
