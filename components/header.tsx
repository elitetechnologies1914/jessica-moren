"use client";

import { Dialog, DialogBackdrop, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { BiBookOpen } from "react-icons/bi";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import Link from "next/link";
import { Fragment, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#intro" },
  { label: "The Book", href: "#book-details" },
  { label: "The Journey", href: "#journey" },
  { label: "About Raina. S.E", href: "#author" },
  { label: "Reader Care", href: "#reader-care" },
];

function navLinkClassName(active?: boolean) {
  return `rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
    active
      ? "bg-[#d6a35a]/18 text-[#fff8ed] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
      : "text-[#fff8ed]/76 hover:bg-white/9 hover:text-[#fff8ed]"
  }`;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6">
        <div className="relative mx-auto h-[76px] max-w-[1320px] overflow-hidden rounded-[2rem] border border-[#e8cba8]/20 bg-[rgba(110,23,20,0.82)] shadow-[0_20px_70px_rgba(38,34,35,0.28)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,248,237,0.18),rgba(255,248,237,0.06)_34%,rgba(214,163,90,0.14)_67%,rgba(38,34,35,0.16))]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ffff]/38 to-transparent" />

          <div className="relative mx-auto flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-7">
              <Link
                href="/"
                className="group flex items-center"
                aria-label="Home"
              >
                <span className="flex flex-col leading-none text-[#fff8ed] transition-opacity duration-200 group-hover:opacity-90">
                  <span className="font-serif text-lg tracking-[0.08em] sm:text-xl">RAINA. S.E</span>
                  <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-[#e8cba8]">Finding My Journey</span>
                </span>
              </Link>

              <div className="hidden items-center gap-3 md:flex">
                <nav
                  aria-label="Primary"
                  className="flex items-center gap-5 lg:gap-7"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      className={navLinkClassName(item.active)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <Link
                  href="#platforms"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#d6a35a]/55 bg-[#b82d26] px-4 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#fff8ed] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-300 hover:border-[#fff8ed]/75 hover:bg-[#9c4a2d]"
                >
                  <BiBookOpen className="text-[1rem] transition-transform duration-300 group-hover:scale-110" />
                  Get the Book
                </Link>
              </div>

              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-white/8 text-[#fff8ed] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-200 hover:border-[#d6a35a]/55 hover:bg-[#b82d26]/30 md:hidden"
              >
                <HiOutlineBars3 className="text-[1.3rem]" />
              </button>
          </div>
        </div>
      </header>

      <Transition appear as={Fragment} show={mobileMenuOpen}>
        <Dialog as="div" className="relative z-[60] md:hidden" onClose={setMobileMenuOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-[rgba(110,23,20,0.56)] backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 flex justify-end px-3 pb-4 pt-24">
            <TransitionChild
              as={Fragment}
              enter="transition duration-250 ease-out"
              enterFrom="translate-x-6 opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition duration-200 ease-in"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-6 opacity-0"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-[1.5rem] border border-white/16 bg-[rgba(110,23,20,0.94)] p-5 shadow-[0_24px_80px_rgba(38,34,35,0.42)] backdrop-blur-2xl">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,248,237,0.13),rgba(156,74,45,0.2)_42%,rgba(38,34,35,0.68))]" />
                <div className="relative flex items-center justify-between">
                  <span className="flex flex-col leading-none text-[#fff8ed]">
                    <span className="font-serif text-base tracking-[0.08em]">RAINA. S.E.</span>
                    <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.24em] text-[#e8cba8]">Finding My Journey</span>
                  </span>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/8 text-[#fff8ed] transition-colors duration-200 hover:bg-white/14"
                  >
                    <HiOutlineXMark className="text-[1.1rem]" />
                  </button>
                </div>

                <div className="relative mt-6 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-200 ${
                        item.active
                          ? "bg-[#b82d26]/35 font-semibold text-[#fff8ed]"
                          : "bg-white/7 text-[#fff8ed]/82 hover:bg-white/12 hover:text-[#fff8ed]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href="#platforms"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative mt-5 flex items-center justify-center gap-3 rounded-2xl border border-[#d6a35a]/45 bg-[#b82d26] px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#fff8ed] transition-all duration-200 hover:bg-[#9c4a2d]"
                >
                  <BiBookOpen className="text-[1.1rem]" />
                  Get the Book
                </Link>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <div aria-hidden="true" className="h-24 sm:h-28" />
    </>
  );
}
