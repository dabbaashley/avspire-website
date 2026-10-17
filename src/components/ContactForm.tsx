"use client";

import { useState } from "react";
import { company } from "@/lib/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} <${data.get("email")}>`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 dark:border-zinc-700";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block text-sm font-medium">
        Name
        <input name="name" required className={field} />
      </label>
      <label className="block text-sm font-medium">
        Email
        <input name="email" type="email" required className={field} />
      </label>
      <label className="block text-sm font-medium">
        Message
        <textarea name="message" required rows={5} className={field} />
      </label>
      <button type="submit" className="rounded-md bg-violet-600 px-5 py-2.5 font-medium text-white hover:bg-violet-700">
        Send message
      </button>
      {sent && <p role="status" className="text-sm text-green-600">Opening your email client…</p>}
    </form>
  );
}
