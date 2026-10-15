import { Crown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About the Author", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="paper-grain relative overflow-hidden bg-[#11100f] text-[#f7f1e8]">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.4fr_0.6fr_0.75fr] md:py-20 lg:px-10">
        <div className="max-w-xl">
          <Link href="/" className="focus-ring inline-flex items-center gap-3" aria-label="Jessica Moren home">
            <Crown className="h-8 w-8 text-[#d8b76a]" strokeWidth={1.4} />
            <span className="font-display text-3xl font-semibold tracking-[0.06em]">JESSICA MOREN</span>
          </Link>
          <p className="mt-6 max-w-lg font-display text-2xl italic leading-relaxed text-[#f7f1e8]/78">
            The crown was never the point. The woman wearing it is.
          </p>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#f7f1e8]/58">
            Honest stories about midlife, identity, marriage, family, and finding your voice again.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="eyebrow text-[#d8b76a]">Navigate</h2>
          <ul className="mt-6 space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring text-sm text-[#f7f1e8]/70 transition-colors hover:text-[#d8b76a]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-[#d8b76a]">Continue</h2>
          <div className="mt-6 space-y-4">
            <Link href="/books" className="focus-ring group flex items-center gap-2 text-sm text-[#f7f1e8]/70 transition-colors hover:text-[#d8b76a]">
              Explore the series <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/contact" className="focus-ring group flex items-center gap-2 text-sm text-[#f7f1e8]/70 transition-colors hover:text-[#d8b76a]">
              Send a note <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-[0.68rem] uppercase tracking-[0.18em] text-[#f7f1e8]/45 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Jessica Moren. All rights reserved.</p>
          <p>Stories and personal experiences are not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
