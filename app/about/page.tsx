import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight,BookOpen,MessageCircleHeart,Mic2 } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthorImage from "@/components/authorImageSection";
export const metadata:Metadata={
    title:"About the Author",
    description:"Meet Jessica Moren, the candid voice behind The Perimenopausal Princess."};
export default function AboutPage(){
    return <><Header/>
    <main id="main-content">
        <section className="grid min-h-[720px] bg-[#11100f] text-white lg:grid-cols-[1.02fr_.98fr]">
            <div className="paper-grain flex items-center px-6 py-20 sm:px-8 lg:px-12">
                <div><p className="eyebrow text-[#d8b76a]">Meet Jessica Moren</p><h1 className="editorial-title mt-6 text-[clamp(4.2rem,8vw,8rem)]">Part Princess. Part pit bull in a tutu.</h1>
                <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">Jessica writes about the bits we are usually told to make prettier: the body that won’t cooperate, complicated love, the family you cannot fix, and the self you sometimes have to fight to remember.</p></div>

                </div>
                
                <div className="relative min-h-[620px]"><Image src="/author/66bafd2d-ff66-493c-883d-62c4155d5595_1080x1080.jpg" alt="Portrait of Jessica Moren" fill priority sizes="(max-width:1024px) 100vw,50vw" className="object-cover"/>
                </div>

                </section>
                <AuthorImage />
                <section className="bg-[#f7f1e8] px-6 py-20 sm:px-8 md:py-28 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.72fr_1.28fr]"><aside><p className="eyebrow text-[#a9863e]">The voice behind the series</p><p className="font-display mt-7 text-3xl italic text-[#b66e55]">Smart. Irreverent. Specific. Intimate. Entirely human.</p></aside><div className="space-y-6 text-base leading-8 text-[#31251f]/78 sm:text-lg"><p>Jessica Moren is the voice behind <em>The Perimenopausal Princess</em>, a candid, irreverent exploration of midlife, love, identity, and the untidy work of becoming yourself.</p><p>Her storytelling makes room for sleepless nights, bodily change, the complicated tenderness of marriage, old family wounds, and the uncomfortable thrill of setting a boundary.</p><p>She finds a laugh in the middle of hard conversations without losing sight of the heart underneath them.</p></div></div></section><section className="paper-grain bg-[#11100f] px-6 py-24 text-center text-white"><MessageCircleHeart className="mx-auto h-9 w-9 text-[#d8b76a]"/><blockquote className="editorial-title mx-auto mt-8 max-w-5xl text-5xl sm:text-6xl lg:text-7xl">Maybe the crown was never too small. Maybe she simply grew tired of pretending it fit.</blockquote><p className="eyebrow mt-7 text-[#d8b76a]">Campaign line • Not a sourced author quotation</p></section><section className="bg-[#e9ded0] px-6 py-20"><div className="mx-auto grid max-w-6xl gap-10 border border-[#a9863e]/30 p-9 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="flex items-center gap-3 text-[#a9863e]"><Mic2 className="h-5 w-5"/><p className="eyebrow">Beyond the page</p></div><h2 className="font-display mt-4 text-4xl font-semibold text-[#11100f]">Podcasts, book clubs, interviews, and reader conversations.</h2></div><div className="flex flex-col gap-3"><Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 bg-[#11100f] px-6 py-4 text-xs font-bold uppercase tracking-[.18em] text-white">Get in Touch <ArrowRight className="h-4 w-4"/></Link><Link href="/books" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#11100f] px-6 py-4 text-xs font-bold uppercase tracking-[.18em]"><BookOpen className="h-4 w-4"/>Explore Books</Link></div></div></section>
                </main><Footer/>
                
                </>}
