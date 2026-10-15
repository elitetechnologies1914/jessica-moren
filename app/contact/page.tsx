import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Mail, Mic2, ShieldCheck, UsersRound } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jessica Moren regarding her books, interviews, book clubs, media inquiries, and general messages.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative isolate min-h-[610px] overflow-hidden bg-[#11100f] text-[#f7f1e8]">
          <Image src="/images/reading-nook.png" alt="An inviting velvet chair beside a brass lamp and open notebook" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#11100f_0%,rgba(17,16,15,0.88)_50%,rgba(17,16,15,0.32)_100%)]" />
          <div className="paper-grain absolute inset-0 opacity-35" />
          <div className="relative mx-auto flex min-h-[610px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#d8b76a]">Send a note</p>
              <h1 className="editorial-title mt-6 text-[clamp(4.2rem,8vw,8rem)]">Got a question? A story? A very strong opinion?</h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#f7f1e8]/72 sm:text-lg">
                Whether you want to talk books, invite Jessica to a conversation, or share a line that made you feel less alone, this is the place. Be thoughtful, be specific, and don’t worry about sounding perfectly polished.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1e8] px-6 py-20 sm:px-8 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-[#a9863e]"><Mail className="h-5 w-5" /><p className="eyebrow">Write to Jessica</p></div>
              <h2 className="font-display mt-5 text-4xl font-semibold text-[#11100f] sm:text-5xl">Come as you are.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#31251f]/65">Complete the form below. Message delivery is shown transparently until an author-approved inbox and secure email provider are connected.</p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6 lg:pt-16">
              <div className="paper-grain bg-[#11100f] p-8 text-[#f7f1e8] sm:p-10">
                <Mic2 className="h-7 w-7 text-[#d8b76a]" strokeWidth={1.5} />
                <h2 className="font-accent mt-6 text-3xl uppercase">Press, podcasts & book clubs</h2>
                <p className="mt-5 text-sm leading-7 text-[#f7f1e8]/65">Hosting an honest conversation about midlife, relationships, or finding your voice again? Tell us about your audience and what you have in mind.</p>
                <div className="mt-7 border-t border-white/12 pt-7 text-xs leading-6 text-[#d8b76a]/78">
                  The public business email and verified social profiles will appear here once approved.
                </div>
              </div>

              <div className="border border-[#a9863e]/30 bg-[#e9ded0] p-8">
                <h2 className="eyebrow text-[#a9863e]">Helpful details</h2>
                <ul className="mt-6 space-y-5 text-sm leading-6 text-[#31251f]/72">
                  <li className="flex gap-3"><UsersRound className="mt-0.5 h-5 w-5 shrink-0 text-[#b66e55]" /> Include your audience size or book-club format.</li>
                  <li className="flex gap-3"><BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#b66e55]" /> Mention the book or series topic you want to discuss.</li>
                  <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#b66e55]" /> Avoid sending sensitive personal or medical information.</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
