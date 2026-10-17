import type { Metadata } from "next";
import Card from "@/components/Card";
import PageHeading from "@/components/PageHeading";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected audio-visual programming projects and case studies by Avspire.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeading title="Portfolio" subtitle="A selection of recent projects and case studies." />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} tag={p.category} />
        ))}
      </div>
    </>
  );
}
