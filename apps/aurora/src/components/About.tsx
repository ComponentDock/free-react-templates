const stats = [
  { value: '10+', label: 'Years of experience' },
  { value: '120+', label: 'Projects completed' },
  { value: '80+', label: 'Happy clients' },
] as const

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">About me</h2>
        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-400">
          I&apos;m a full-stack developer and designer with a passion for clean, accessible
          interfaces. Over the past decade I&apos;ve helped startups launch products, redesign
          legacy systems, and turn rough ideas into polished experiences.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center dark:border-gray-800 dark:bg-gray-950"
            >
              <p className="text-3xl font-extrabold text-primary-600 dark:text-primary-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
