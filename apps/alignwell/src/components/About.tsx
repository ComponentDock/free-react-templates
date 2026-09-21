const counters = [
  { target: 45, label: 'Years of Experience' },
  { target: 2342, label: 'Happy Customers' },
  { target: 30, label: 'Awards Winning' },
] as const

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/alignwell-about/800/600"
              alt="About AlignWell"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Welcome to AlignWell
            </span>
            <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">About AlignWell</h2>
            <p className="mt-4 text-mist leading-relaxed">
              We are a dedicated team of chiropractic professionals committed to improving your
              quality of life. With decades of combined experience, we provide personalized care
              plans that address the root cause of your discomfort, not just the symptoms.
            </p>
            <p className="mt-4 text-mist leading-relaxed">
              Our state-of-the-art facility combines modern technology with time-tested techniques
              to deliver the highest standard of chiropractic care. Your well-being is our mission.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {counters.map((c) => (
                <div key={c.label} className="text-center">
                  <div className="text-4xl font-bold text-brand">{c.target}+</div>
                  <p className="mt-2 text-sm text-mist">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
