"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Message delivery is not connected yet, so nothing was sent. Please check back once the author’s approved inbox is available.");
  }

  const fieldClass = "focus-ring mt-2 min-h-12 w-full border border-[#a9863e]/35 bg-[#fffaf3] px-4 text-sm text-[#11100f] placeholder:text-[#31251f]/38";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-xs font-bold uppercase tracking-[0.16em] text-[#31251f]">
          Full name <span aria-hidden="true" className="text-[#b66e55]">*</span>
          <input name="name" autoComplete="name" required className={fieldClass} />
        </label>
        <label className="text-xs font-bold uppercase tracking-[0.16em] text-[#31251f]">
          Email address <span aria-hidden="true" className="text-[#b66e55]">*</span>
          <input name="email" type="email" autoComplete="email" required className={fieldClass} />
        </label>
      </div>

      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-[#31251f]">
        I’m reaching out about <span aria-hidden="true" className="text-[#b66e55]">*</span>
        <select name="topic" required defaultValue="" className={fieldClass}>
          <option value="" disabled>Select one</option>
          <option>Reader note</option>
          <option>Book club</option>
          <option>Media or interview</option>
          <option>Speaking or event</option>
          <option>Rights or business</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-[#31251f]">
        Subject
        <input name="subject" className={fieldClass} />
      </label>

      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-[#31251f]">
        Message <span aria-hidden="true" className="text-[#b66e55]">*</span>
        <textarea name="message" required rows={7} className={`${fieldClass} py-4`} />
      </label>

      <label className="sr-only" aria-hidden="true">
        Leave this field empty
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-[#11100f] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f7f1e8] transition-colors hover:bg-[#31251f]">
          Send Your Message <Send className="h-4 w-4" strokeWidth={1.7} />
        </button>
        <p className="max-w-sm text-xs leading-6 text-[#31251f]/55">Your details will only be used to respond to your inquiry. Do not include sensitive personal or medical information.</p>
      </div>

      {status ? (
        <p role="status" aria-live="polite" className="border-l-2 border-[#b66e55] bg-[#b66e55]/8 px-4 py-3 text-sm leading-6 text-[#31251f]">
          {status}
        </p>
      ) : null}
    </form>
  );
}
