import type { Metadata } from "next";
import Card from "@/components/Card";
import PageHeading from "@/components/PageHeading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Show control, audio DSP, video mapping, interactive media and AV integration services from Avspire.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeading title="Services" subtitle="From concept to commissioning, we program the systems that bring audio-visual experiences to life." />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} {...s} />
        ))}
      </div>
    </>
  );
}
