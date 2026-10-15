"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { BookOpen, Crown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About the Author", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8b76a]/20 bg-[#11100f]/95 text-[#f7f1e8] shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex h-[88px] max-w-[1320px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Jessica Moren home" className="focus-ring group flex items-center gap-3">
          <Crown className="h-7 w-7 text-[#d8b76a] transition-transform duration-200 group-hover:-rotate-6" strokeWidth={1.45} />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-[0.08em] sm:text-2xl">JESSICA MOREN</span>
            <span className="mt-1.5 text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#d8b76a] sm:text-[0.58rem]">
              The Perimenopausal Princess
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-7">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`focus-ring relative py-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] transition-colors ${active ? "text-[#d8b76a]" : "text-[#f7f1e8]/72 hover:text-[#f7f1e8]"}`}
                >
                  {item.label}
                  {active ? <span className="absolute inset-x-0 bottom-0 h-px bg-[#d8b76a]" /> : null}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/books"
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#d8b76a] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#11100f] transition-colors hover:bg-[#f7f1e8]"
          >
            <BookOpen className="h-4 w-4" strokeWidth={1.75} />
            Explore the Books
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="focus-ring grid h-11 w-11 place-items-center border border-[#d8b76a]/35 text-[#f7f1e8] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-[70] lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="fixed inset-0 flex justify-end">
          <DialogPanel className="paper-grain flex h-full w-full max-w-sm flex-col border-l border-[#d8b76a]/30 bg-[#11100f] p-6 text-[#f7f1e8] shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl tracking-[0.08em]">JESSICA MOREN</span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
                className="focus-ring grid h-11 w-11 place-items-center border border-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="mt-16 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`focus-ring border-b border-white/10 py-5 text-sm font-bold uppercase tracking-[0.2em] ${pathname === item.href ? "text-[#d8b76a]" : "text-[#f7f1e8]/80"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/books"
              onClick={() => setOpen(false)}
              className="focus-ring mt-auto inline-flex min-h-12 items-center justify-center gap-2 bg-[#d8b76a] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#11100f]"
            >
              <BookOpen className="h-4 w-4" />
              Explore the Books
            </Link>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
