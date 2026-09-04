import type { Metadata } from "next";
import Preloader from "@/components/preloader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Irena Samantha Evangelista | Finding My Journey",
  description:
    "Discover Finding My Journey, Irena Samantha Evangelista's candid memoir about adoption, bullying, mental-health struggles, recovery, faith, and finding home.",
  keywords: ["Finding My Journey", "Irena Samantha Evangelista", "memoir", "mental health", "recovery"],
  openGraph: {
    title: "Finding My Journey — A memoir of survival, healing, and home",
    description:
      "A candid memoir about loss, silence, recovery, family, faith, and the strength to keep moving forward.",
    type: "website",
    images: ["/images/finding-my-journey-cover.jpg"],
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
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
