const STATS = [
  { value: '12', label: 'Years Experience' },
  { value: '350', label: 'Projects Completed' },
  { value: '200', label: 'Clients' },
  { value: '15', label: 'Awards Won' },
]

export function About() {
  return (
    <section id="about-section" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-4xl font-bold text-gold">{stat.value}</span>
                <span className="mt-2 block text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-gold">
              About Me
            </span>
            <h2 className="mb-6 text-3xl font-semibold leading-snug md:text-4xl">
              A UI/UX Designer &amp; Web Developer Based in San Francisco
            </h2>
            <p className="mb-4 text-muted">
              I design and build beautiful, functional websites and applications. With over a decade
              of experience, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-muted">
              My passion lies at the intersection of design and technology. I believe great products
              start with understanding users and crafting experiences that feel natural and
              delightful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
