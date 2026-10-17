import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeading from "@/components/PageHeading";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Avspire about your audio-visual programming project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeading title="Contact" subtitle="Tell us about your project and we'll get back to you." />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        <ContactForm />
        <address className="space-y-3 not-italic">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p><a href={`mailto:${company.email}`} className="text-violet-600 hover:underline">{company.email}</a></p>
          <p>{company.phone}</p>
          <p>{company.location}</p>
        </address>
      </div>
    </>
  );
}
