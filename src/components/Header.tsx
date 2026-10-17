"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-background/80 backdrop-blur dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Av<span className="text-violet-600">spire</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm hover:text-violet-600">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <button
          type="button"
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm md:hidden dark:border-zinc-700"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-3 border-t border-zinc-200 px-4 py-4 md:hidden dark:border-zinc-800">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm">
              {l.label}
            </Link>
          ))}
          <div>
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
