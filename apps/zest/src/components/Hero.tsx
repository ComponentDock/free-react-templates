const counts = [
  { value: 10, label: 'total pages' },
  { value: 6, label: 'home pages' },
  { value: 4, label: 'blog pages' },
] as const

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-white" aria-label="Hero">
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 30%, rgba(242,99,103,0.35), transparent 45%), radial-gradient(circle at 75% 70%, rgba(114,71,148,0.4), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          SaaS &amp; App Landing Template
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Zest is a SaaS &amp; App Landing Startups Template
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
          A ready-to-use React app landing template with ten distinct page layouts — six modern home
          variants and four blog layouts — each rebuilt with React, Tailwind CSS, and TypeScript.
        </p>
        <a
          href="#demos"
          className="mt-9 inline-block bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Purchase Now
        </a>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6">
          {counts.map((count) => (
            <div
              key={count.label}
              className="rounded-[3px] bg-white px-4 py-8 text-center shadow-[0_0_19px_rgba(0,0,0,0.25)]"
            >
              <dd className="block text-5xl font-black leading-none text-ink-strong">
                {count.value}
              </dd>
              <dt className="mt-3 block text-xs font-semibold uppercase tracking-wide text-mist">
                {count.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
