const skills = [
  { name: 'Web Design', pct: 95 },
  { name: 'Coding', pct: 85 },
  { name: 'Developing', pct: 90 },
  { name: 'Java Script', pct: 95 },
  { name: 'Apps Design', pct: 85 },
  { name: 'Graphics', pct: 90 },
] as const

export function Skills() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">Our Skills</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-brand to-brand-light" />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {skills.map(({ name, pct }) => (
            <div key={name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink dark:text-white">{name}</span>
                <span className="text-sm font-bold text-brand">{pct}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-brand-light transition-all"
                  style={{ width: `${pct}%` }}
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${name} skill level`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
