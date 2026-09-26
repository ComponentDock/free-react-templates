const stats = [
  { value: '06', label: 'years of experience' },
  { value: '$40M+', label: 'invested in projects' },
  { value: 'Multiple', label: 'awards won' },
]

export function About() {
  return (
    <section id="about" data-testid="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-3xl font-bold text-maroon">About</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 leading-relaxed text-secondary">
              I&apos;m a passionate digital product designer with over six years of experience
              crafting intuitive and beautiful user experiences. My work spans across mobile apps,
              web platforms, and design systems that scale.
            </p>
            <p className="leading-relaxed text-secondary">
              I believe great design is invisible — it just works. Every pixel, every interaction,
              every transition is an opportunity to make someone&apos;s day a little easier.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/joplin-about/600/700"
              alt="Portrait photo"
              className="w-full max-w-sm rounded object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-maroon">{stat.value}</p>
              <p className="mt-1 text-sm text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
