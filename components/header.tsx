"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ArrowUpRight, BookOpen, Crown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className="relative grid size-11 shrink-0 place-items-center rounded-full border border-[#d8b76a]/45 bg-[#d8b76a]/10 shadow-[inset_0_0_18px_rgba(216,183,106,0.08)]">
        <Crown
          className="h-5 w-5 text-[#d8b76a]"
          strokeWidth={1.55}
          aria-hidden="true"
        />
        <span className="absolute -bottom-0.5 size-1.5 rounded-full bg-[#d8b76a] ring-2 ring-[#11100f]" />
      </span>
      <span className="min-w-0">
        <span className="font-display block truncate text-xl font-semibold leading-none tracking-[.08em] text-[#f7f1e8] sm:text-[1.4rem]">
          JESSICA MOREN
        </span>
        {!compact && (
          <span className="mt-1.5 hidden text-[.5rem] font-bold uppercase leading-none tracking-[.28em] text-[#d8b76a] min-[390px]:block">
            The Perimenopausal Princess
          </span>
        )}
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#11100f]/90 text-[#f7f1e8] shadow-[0_14px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#11100f]/78">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8b76a]/80 to-transparent" />

      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="Jessica Moren home"
          className="focus-ring shrink-0 rounded-sm"
        >
          <Brand />
        </Link>

        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          <nav
            aria-label="Primary navigation"
            className="flex items-center rounded-full border border-white/[.09] bg-white/[.035] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`focus-ring relative rounded-full px-4 py-3 text-[.64rem] font-bold uppercase tracking-[.19em] transition-colors duration-200 xl:px-5 ${
                    isActive
                      ? "bg-[#f7f1e8] text-[#11100f] shadow-[0_6px_22px_rgba(0,0,0,0.26)]"
                      : "text-[#f7f1e8]/66 hover:bg-white/[.06] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/books"
            className="focus-ring group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#d8b76a] px-5 py-3 text-[.64rem] font-bold uppercase tracking-[.17em] text-[#11100f] shadow-[0_10px_28px_rgba(216,183,106,0.16)] transition-colors hover:bg-[#ead18f]"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Explore Books
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="focus-ring grid size-12 shrink-0 place-items-center rounded-full border border-[#d8b76a]/35 bg-[#d8b76a]/[.07] text-[#f7f1e8] transition-colors hover:border-[#d8b76a]/70 hover:bg-[#d8b76a]/15 lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-[70] lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/72 backdrop-blur-sm transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 flex justify-end">
          <DialogPanel
            transition
            id="mobile-navigation"
            className="paper-grain relative flex h-full w-full max-w-[420px] flex-col overflow-y-auto border-l border-[#d8b76a]/25 bg-[#11100f] p-6 text-[#f7f1e8] shadow-[-28px_0_80px_rgba(0,0,0,0.45)] transition duration-300 ease-out data-closed:translate-x-full sm:p-8"
          >
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#d8b76a]/70 to-transparent" />

            <div className="flex items-center justify-between gap-5">
              <DialogTitle className="min-w-0">
                <Brand compact />
              </DialogTitle>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="focus-ring grid size-12 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[.04] transition-colors hover:border-[#d8b76a]/50 hover:text-[#d8b76a]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-14 flex items-center gap-3 text-[#d8b76a]">
              <span className="h-px w-8 bg-current" />
              <p className="eyebrow">Navigation</p>
            </div>

            <nav aria-label="Mobile navigation" className="mt-5 flex flex-col">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`focus-ring group flex min-h-[68px] items-center gap-5 border-b border-white/[.09] py-4 transition-colors ${
                      isActive
                        ? "text-[#d8b76a]"
                        : "text-white/76 hover:text-white"
                    }`}
                  >
                    <span className="font-accent text-[.63rem] tracking-[.18em] text-white/32">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display flex-1 text-[1.85rem] font-medium leading-none">
                      {item.label}
                    </span>
                    <span
                      className={`size-2 rounded-full border transition-colors ${
                        isActive
                          ? "border-[#d8b76a] bg-[#d8b76a]"
                          : "border-white/25 group-hover:border-[#d8b76a]"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-10">
              <Link
                href="/books"
                onClick={() => setOpen(false)}
                className="focus-ring group flex min-h-14 items-center justify-between gap-4 rounded-full bg-[#d8b76a] px-6 py-4 text-[.68rem] font-bold uppercase tracking-[.18em] text-[#11100f]"
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Explore the Books
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <p className="mt-6 text-center text-[.58rem] uppercase tracking-[.24em] text-white/38">
                The crown is optional. The honesty isn’t.
              </p>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
