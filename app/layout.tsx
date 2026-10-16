import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Oswald } from "next/font/google";
import Preloader from "@/components/preloader";
import "./globals.css";

const display=Cormorant_Garamond({variable:"--font-display",subsets:["latin"],weight:["400","500","600","700"],style:["normal","italic"]});
const body=Manrope({variable:"--font-body",subsets:["latin"],weight:["400","500","600","700"]});
const accent=Oswald({variable:"--font-accent",subsets:["latin"],weight:["500","600","700"]});

export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL??"http://localhost:3000"),title:{default:"Jessica Moren | The Perimenopausal Princess",template:"%s | Jessica Moren"},description:"Meet Jessica Moren and discover The Perimenopausal Princess, a wickedly funny and candid series about midlife, marriage, identity, and finding your voice again.",openGraph:{title:"Jessica Moren | The Perimenopausal Princess",description:"The crown is optional. The honesty isn’t.",type:"website",images:["/book-mockup/asaas.png"]}};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} ${accent.variable}`}><body><a href="#main-content" className="focus-ring fixed left-4 top-4 z-[120] -translate-y-24 bg-[#d8b76a] px-5 py-3 text-sm font-bold text-[#11100f] transition-transform focus:translate-y-0">Skip to content</a><Preloader/>{children}</body></html>}
