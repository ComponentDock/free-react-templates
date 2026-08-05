const bars = [
  { label: 'UI Design', value: 90 },
  { label: 'Development', value: 80 },
  { label: 'Marketing', value: 70 },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            About Appy
          </h2>
          <p className="mt-6 leading-relaxed text-muted dark:text-gray-400">
            Appy is a modern landing template crafted for mobile apps — every section is designed to
            help you introduce your product, highlight its strengths, and convert visitors into
            downloads.
          </p>
        </div>

        <div className="rounded-2xl bg-paper p-8 dark:bg-gray-900">
          <h3 className="font-display text-xl font-bold text-ink dark:text-white">Our Progress</h3>
          <div className="mt-8 space-y-6">
            {bars.map((bar) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between text-sm text-muted dark:text-gray-400">
                  <span>{bar.label}</span>
                  <span>{bar.value}%</span>
                </div>
                <div
                  role="progressbar"
                  aria-label={bar.label}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={bar.value}
                  className="mt-2 h-2 rounded-full bg-primary-100 dark:bg-gray-800"
                >
                  <div
                    className="h-full rounded-full bg-primary-600"
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
