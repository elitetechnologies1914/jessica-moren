import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, MessageCircleHeart, Mic2 } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About the Author",
  description: "Get to know Jessica Moren, the candid voice behind The Perimenopausal Princess and its honest, darkly funny view of midlife.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="grid min-h-[720px] bg-[#11100f] text-[#f7f1e8] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="paper-grain flex items-center px-6 py-20 sm:px-8 md:py-28 lg:px-12 xl:pl-[max(3rem,calc((100vw-1280px)/2))]">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#d8b76a]">Meet Jessica Moren</p>
              <h1 className="editorial-title mt-6 text-[clamp(4.2rem,8vw,8rem)]">Part Princess. Part pit bull in a tutu.</h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#f7f1e8]/70 sm:text-lg">
                Jessica Moren writes about the bits we are usually told to make prettier: the body that won’t cooperate, the marriage that can make you laugh and lose your mind, the family you love but cannot fix, and the self you sometimes have to fight to remember.
              </p>
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden">
            <Image src="/images/rainy-cafe.png" alt="A rain-soaked café window beside coffee and an open book" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11100f]/45 to-transparent lg:from-[#11100f]/60" />
            <div className="absolute bottom-8 right-8 max-w-sm border border-[#d8b76a]/45 bg-[#11100f]/85 p-6 backdrop-blur">
              <p className="font-display text-2xl italic leading-snug">Fearless about the punch line. Careful with the heart underneath it.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1e8] px-6 py-20 sm:px-8 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <aside>
              <p className="eyebrow text-[#a9863e]">The voice behind the series</p>
              <div className="mt-7 h-px w-20 bg-[#a9863e]" />
              <p className="font-display mt-7 text-3xl italic leading-snug text-[#b66e55]">Smart. Irreverent. Specific. Intimate. Entirely human.</p>
            </aside>
            <div className="space-y-6 text-base leading-8 text-[#31251f]/78 sm:text-lg">
              <p>Jessica Moren is the voice behind <em>The Perimenopausal Princess</em>, a candid, irreverent exploration of midlife, love, identity, and the untidy work of becoming yourself.</p>
              <p>Her storytelling makes room for the things women are often encouraged to keep private: sleepless nights, the absurdities of bodily change, the complicated tenderness of marriage, old family wounds, and the uncomfortable thrill of setting a boundary.</p>
              <p>With a talent for finding a laugh in the middle of the hardest conversations, Jessica approaches the mess of being human without pretending it can be neatly solved. The result is a voice that is fearless about the punch line and careful with the heart underneath it.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#e9ded0] px-6 py-20 sm:px-8 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] min-h-[520px] overflow-hidden">
              <Image src="/images/journaling.png" alt="A hand closing a notebook on a warm wood desk" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
              <div className="absolute inset-5 border border-[#d8b76a]/70" />
            </div>
            <div>
              <p className="eyebrow text-[#a9863e]">Why these stories matter</p>
              <h2 className="editorial-title mt-5 text-5xl text-[#11100f] sm:text-6xl lg:text-7xl">Because “I’m fine” is not a personality.</h2>
              <p className="mt-8 text-base leading-8 text-[#31251f]/76 sm:text-lg">
                A woman can laugh while she grieves. Love her family and need space. Want her old confidence back and discover that the new version has something worth saying. Jessica’s work lives in those contradictions.
              </p>
              <p className="mt-5 text-base leading-8 text-[#31251f]/76 sm:text-lg">
                The point is not to deliver a polished lesson from the mountaintop. It’s to tell the truth while the whole thing is still happening.
              </p>
            </div>
          </div>
        </section>

        <section className="paper-grain bg-[#11100f] px-6 py-20 text-center text-[#f7f1e8] sm:px-8 md:py-28 lg:px-10">
          <MessageCircleHeart className="mx-auto h-9 w-9 text-[#d8b76a]" strokeWidth={1.4} />
          <blockquote className="editorial-title mx-auto mt-8 max-w-5xl text-5xl sm:text-6xl lg:text-7xl">Maybe the crown was never too small. Maybe she simply grew tired of pretending it fit.</blockquote>
          <p className="eyebrow mt-7 text-[#d8b76a]">Campaign line • Not a sourced author quotation</p>
        </section>

        <section className="bg-[#f7f1e8] px-6 py-20 sm:px-8 md:py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 border border-[#a9863e]/30 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-[#a9863e]"><Mic2 className="h-5 w-5" /><p className="eyebrow">Beyond the page</p></div>
              <h2 className="font-display mt-4 text-4xl font-semibold text-[#11100f] sm:text-5xl">Podcasts, book clubs, interviews, and reader conversations.</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#31251f]/68">Hosting an honest conversation about midlife, relationships, or finding your voice again? Tell us about your audience and what you have in mind.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 bg-[#11100f] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f7f1e8]">Get in Touch <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/books" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#11100f] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#11100f]"><BookOpen className="h-4 w-4" /> Explore the Books</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
