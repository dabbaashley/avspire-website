import Link from "next/link";
import { company, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{company.name}</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Audio-visual programming for live events, installations and integrated spaces.
          </p>
        </div>
        <ul className="space-y-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-violet-600">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <address className="space-y-2 text-sm not-italic">
          <p><a href={`mailto:${company.email}`} className="hover:text-violet-600">{company.email}</a></p>
          <p>{company.phone}</p>
          <p>{company.location}</p>
        </address>
      </div>
      <p className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500 dark:border-zinc-800">
        © {company.name}. All rights reserved.
      </p>
    </footer>
  );
}
