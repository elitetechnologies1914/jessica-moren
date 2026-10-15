import Link from "next/link";
import { ArrowRight, BookOpen, Mail, UserRound } from "lucide-react";

const cards = [
  { title: "Explore the Series", detail: "Meet Book One and preview what comes next.", href: "/books", icon: BookOpen },
  { title: "Meet Jessica", detail: "Get to know the candid voice behind the crown.", href: "/about", icon: UserRound },
  { title: "Send a Note", detail: "Reader, book-club, press, and media inquiries.", href: "/contact", icon: Mail },
];

export default function BrandAva() {
  return (
    <section className="bg-[#e9ded0] px-6 py-20 sm:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow text-[#a9863e]">Welcome to the royal mess</p>
          <h2 className="editorial-title mt-5 text-5xl text-[#11100f] sm:text-6xl">No fairy tale. No filter.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#31251f]/72">A wickedly funny, emotionally candid series about identity, perimenopause, marriage, family, boundaries, and rediscovering the woman under everyone else’s expectations.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="focus-ring group flex min-h-48 flex-col justify-between border border-[#a9863e]/25 bg-[#f7f1e8] p-7 shadow-[0_15px_35px_rgba(49,37,31,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#a9863e]/55 hover:shadow-[0_20px_45px_rgba(49,37,31,0.1)]">
              <card.icon className="h-7 w-7 text-[#b66e55]" strokeWidth={1.5} />
              <div className="mt-8">
                <h3 className="font-display text-3xl font-semibold text-[#11100f]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#31251f]/65">{card.detail}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#a9863e]">Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
