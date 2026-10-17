export default function PageHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-gradient-to-br from-violet-600/10 to-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      </div>
    </section>
  );
}
