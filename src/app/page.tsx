import Link from "next/link";
import Card from "@/components/Card";
import { services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-600/20 via-transparent to-fuchsia-500/10">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            We program <span className="text-violet-600">sound, light and video</span> experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Avspire is a team of audio-visual programmers building reliable control systems, immersive media and
            custom integrations for events, venues and brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-md bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-700">
              Start a project
            </Link>
            <Link href="/portfolio" className="rounded-md border border-zinc-300 px-6 py-3 font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
              View our work
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">What we do</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
        <Link href="/services" className="mt-6 inline-block text-violet-600 hover:underline">
          All services →
        </Link>
      </section>
      <section className="bg-violet-600 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-12 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold">Have an idea? Let&apos;s make it run.</h2>
          <Link href="/contact" className="rounded-md bg-white px-6 py-3 font-medium text-violet-700 hover:bg-violet-50">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
