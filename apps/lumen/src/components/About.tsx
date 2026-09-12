const STATS = [
  { label: 'Awards Received', value: '15' },
  { label: 'Cups of Coffee', value: '1200' },
  { label: 'Projects Completed', value: '95' },
]

export function About() {
  return (
    <section id="about" className="bg-surface-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-400">
            Hello There
          </h2>
          <h3 className="mt-3 font-display text-3xl font-bold text-text-dark md:text-4xl">
            We Are Lumen
          </h3>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-text-muted">
            We are a creative agency specializing in branding, web design, and digital experiences.
            Our team brings together diverse perspectives to craft meaningful solutions that
            resonate with audiences and drive results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-display text-4xl font-bold text-primary-400">{stat.value}</span>
              <p className="mt-2 font-display text-sm font-medium uppercase tracking-wider text-text-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
