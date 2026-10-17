export default function Card({ title, description, tag }: { title: string; description: string; tag?: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
      {tag && <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-violet-600">{tag}</p>}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}
