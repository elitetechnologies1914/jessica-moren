import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Crown, Sparkles } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BookCover from "@/components/book-cover";

export const metadata: Metadata = {
  title: "Books",
  description: "Explore Jessica Moren’s three-book Perimenopausal Princess series, beginning with a candid, funny story of midlife, relationships, and reclaiming identity.",
};

const themes = ["Identity", "Perimenopause", "Marriage", "Motherhood", "Grief", "Boundaries", "Reclamation"];

const faqs = [
  {
    q: "Do I need to read the books in order?",
    a: "Book One begins the emotional journey. Reading guidance for later books will be confirmed as their manuscripts and publication plans are finalized.",
  },
  {
    q: "Are all three books available?",
    a: "No. Books Two and Three are currently presented as in-development placeholders. Confirmed release details will appear here when available.",
  },
  {
    q: "Is this a medical guide?",
    a: "No. The series is personal storytelling and reflection, not individualized medical advice.",
  },
  {
    q: "Where can I buy the books?",
    a: "Verified retailer links have not yet been supplied. Join release updates or contact Jessica for current availability information.",
  },
];

export default function BooksPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="paper-grain relative overflow-hidden bg-[#11100f] px-6 py-20 text-[#f7f1e8] sm:px-8 md:py-28 lg:px-10">
          <Crown className="absolute -right-8 -top-10 h-72 w-72 rotate-12 text-[#d8b76a]/5" strokeWidth={0.65} />
          <div className="relative mx-auto max-w-7xl">
            <p className="eyebrow text-[#d8b76a]">The Books</p>
            <h1 className="editorial-title mt-6 max-w-[12ch] text-[clamp(4rem,8vw,8rem)]">One Princess. Three chapters of absolute chaos.</h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#f7f1e8]/68 sm:text-lg">
              Not a rulebook for aging gracefully. Not a promise that everything turns out tidy. A book series for readers who have learned that becoming yourself can be the messiest, funniest, bravest thing you do.
            </p>
          </div>
        </section>

        <section id="book-one" className="bg-[#f7f1e8] px-6 py-20 sm:px-8 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-32">
              <BookCover className="mx-auto w-full max-w-[430px]" />
              <div className="mx-auto mt-6 max-w-[430px] border-l-2 border-[#a9863e] pl-4 text-xs leading-6 text-[#31251f]/58">
                The displayed jacket title is the current working cover wording and should be confirmed before launch.
              </div>
            </div>
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-[#a9863e]">Book One • The Perimenopausal Princess</span>
                <span className="border border-[#a9863e]/40 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#31251f]">Release updates</span>
              </div>
              <h2 className="font-accent mt-7 max-w-[13ch] text-5xl uppercase leading-[1.02] text-[#11100f] sm:text-6xl lg:text-7xl">The Crown Doesn’t F@$%!@% Fit Anymore</h2>
              <p className="font-display mt-8 text-3xl italic leading-snug text-[#b66e55]">What happens when the woman who kept everything together realizes she no longer recognizes herself?</p>
              <div className="mt-8 h-px w-20 bg-[#a9863e]" />
              <p className="mt-8 text-base leading-8 text-[#31251f]/76 sm:text-lg">
                Jessica remembers a version of herself who was outspoken, adventurous, and impossible to shrink. Somewhere between responsibility, heartbreak, marriage, motherhood, and the exhausting surprises of perimenopause, that woman has begun to feel distant.
              </p>
              <p className="mt-5 text-base leading-8 text-[#31251f]/76 sm:text-lg">
                What starts as a search for answers becomes a confrontation with everything she has swallowed, survived, and laughed her way through. From nights without sleep and the absurdities of modern health advice to marriage, family bonds, and the hard work of saying what she means, Jessica’s journey refuses a neat transformation montage.
              </p>
              <blockquote className="mt-10 border-y border-[#a9863e]/30 py-8 font-display text-3xl italic leading-snug text-[#11100f]">
                For anyone who has ever thought, “I love my life—but where the hell did I go?”
              </blockquote>
              <ul className="mt-8 flex flex-wrap gap-3" aria-label="Book themes">
                {themes.map((theme) => <li key={theme} className="border border-[#a9863e]/35 bg-[#e9ded0]/50 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em]">{theme}</li>)}
              </ul>
              <Link href="/contact" className="focus-ring mt-10 inline-flex min-h-12 items-center gap-3 bg-[#11100f] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f7f1e8] transition-colors hover:bg-[#31251f]">
                Get Release Updates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="paper-grain bg-[#11100f] px-6 py-20 text-[#f7f1e8] sm:px-8 md:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#d8b76a]">What comes next</p>
              <h2 className="editorial-title mt-5 text-5xl sm:text-6xl lg:text-7xl">The story is still being written.</h2>
              <p className="mt-7 text-base leading-8 text-[#f7f1e8]/65">Books Two and Three are intentionally shown without fabricated covers, release dates, or plot claims. These cards will grow with the series.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[
                { n: "Book Two", copy: "The next chapter may explore what happens after honesty: new boundaries, relationships renegotiated, and reinvention beyond the first breakthrough." },
                { n: "Book Three", copy: "A future closing installment may turn toward ownership of voice, joy, desire, purpose, and the freedom of writing your own rules." },
              ].map((book) => (
                <article key={book.n} className="relative min-h-[420px] overflow-hidden border border-[#d8b76a]/25 bg-white/[0.035] p-8 sm:p-10">
                  <Sparkles className="absolute right-8 top-8 h-9 w-9 text-[#d8b76a]/55" strokeWidth={1.2} />
                  <p className="eyebrow text-[#d8b76a]">{book.n}</p>
                  <p className="mt-8 inline-flex items-center gap-2 border border-white/15 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#f7f1e8]/58"><CalendarDays className="h-3.5 w-3.5" /> In development</p>
                  <h3 className="font-display mt-10 text-5xl font-semibold italic">Title to be announced</h3>
                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#f7f1e8]/60">{book.copy}</p>
                  <p className="mt-5 text-xs italic leading-6 text-[#d8b76a]/72">Directional concept only; final manuscript details are pending author approval.</p>
                  <Link href="/contact" className="focus-ring mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d8b76a]">Notify me <ArrowRight className="h-4 w-4" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e9ded0] px-6 py-20 sm:px-8 md:py-28 lg:px-10">
          <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
            <Image src="/images/antique-crown.png" alt="An antique crown resting in a velvet-lined box" fill sizes="42vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e9ded0] via-[#e9ded0]/35 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[#a9863e]"><BookOpen className="h-5 w-5" /><p className="eyebrow">Series FAQ</p></div>
              <h2 className="editorial-title mt-5 text-5xl text-[#11100f] sm:text-6xl">Before you turn the page.</h2>
              <div className="mt-10 divide-y divide-[#a9863e]/25 border-y border-[#a9863e]/25">
                {faqs.map((faq) => (
                  <div key={faq.q} className="py-6">
                    <h3 className="font-display text-2xl font-semibold text-[#11100f]">{faq.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#31251f]/70">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
