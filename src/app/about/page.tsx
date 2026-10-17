import type { Metadata } from "next";
import Card from "@/components/Card";
import PageHeading from "@/components/PageHeading";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Avspire, our story and the audio-visual programmers behind it.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About Avspire" subtitle="Audio-visual programmers who care about craft, reliability and creativity." />
      <section className="mx-auto max-w-3xl px-4 py-12 text-zinc-700 dark:text-zinc-300">
        <p>
          Avspire was founded by programmers who spent years on show floors, in control rooms and on installation
          sites. We saw how much great AV hinges on well-written software, and built a company around doing that
          part exceptionally well.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-bold">Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {team.map((m) => (
            <Card key={m.name} title={m.name} description={m.role} />
          ))}
        </div>
      </section>
    </>
  );
}
