import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#intro" },
  { label: "The Book", href: "#book-details" },
  { label: "The Journey", href: "#journey" },
  { label: "About Raina", href: "#author" },
  { label: "Reader Care", href: "#reader-care" },
];

const purchaseLinks = [
  { label: "Get the Book", href: "#platforms" },
  { label: "Join the Journey", href: "#reader-care" },
  { label: "Reader Care", href: "#reader-care" },
  { label: "A Note from Raina", href: "#letters" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#6e1714] text-[#fff8ed]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(214,163,90,0.24),transparent_36%),linear-gradient(180deg,rgba(110,23,20,0.92)_0%,rgba(38,34,35,1)_64%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d6a35a]/60 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.25fr_0.75fr_0.8fr] md:gap-14 md:py-20 lg:px-12">
        <div className="max-w-xl">
          <Link
            href="#intro"
            className="inline-block transition-opacity duration-200 hover:opacity-90"
            aria-label="Back to intro"
          >
            <span className="flex flex-col leading-none text-[#fff8ed]">
              <span className="font-serif text-2xl tracking-[0.08em]">RAINA SAMANTHA</span>
              <span className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#e8cba8]">Author of Finding My Journey</span>
            </span>
          </Link>
          <p className="mt-6 max-w-[34rem] text-base font-light leading-8 text-[#e8cba8]/82 sm:text-lg">
            Finding your way home starts with one honest step.
          </p>

          <Link
            href="#book-details"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d6a35a]/55 bg-[#b82d26]/35 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#fff8ed] transition-all duration-300 hover:border-[#fff8ed] hover:bg-[#b82d26]"
          >
            <BiBookOpen className="text-base" />
            Get the Book
          </Link>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-bold uppercase tracking-[0.32em] text-[#d6a35a]">
            Navigate
          </h2>
          <ul className="mt-6 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#fff8ed]/72 transition-colors hover:text-[#fff8ed]"
                >
                  {link.label}
                  <FiArrowUpRight className="text-[0.8rem] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.32em] text-[#d6a35a]">
            Continue
          </h2>
          <ul className="mt-6 space-y-3">
            {purchaseLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] text-[#fff8ed]/72 transition-colors hover:text-[#fff8ed]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-[#fff8ed]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs uppercase tracking-[0.2em] text-[#e8cba8]/72 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>Copyright {year} Raina Samantha Evangelista. All rights reserved.</p>
          <p>You are loved. You are enough.</p>
        </div>
      </div>
    </footer>
  );
}
