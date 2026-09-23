const stats = [
  {
    number: '99.55%',
    title: 'Ratings',
    description: 'Consistently top-rated by clients across all projects.',
  },
  {
    number: '98,000+',
    title: 'Happy Customers',
    description: 'Satisfied customers who trust our creative expertise.',
  },
  {
    number: '99.99%',
    title: 'Server Up time',
    description: 'Reliable infrastructure ensuring maximum availability.',
  },
  {
    number: '1M+',
    title: 'Love by customers',
    description: 'Over a million interactions and counting every day.',
  },
]

export function Achievements() {
  return (
    <section id="about" className="bg-brand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title}>
              <p className="text-3xl font-bold text-navy sm:text-4xl">{stat.number}</p>
              <h3 className="mt-2 text-sm font-semibold text-navy">{stat.title}</h3>
              <p className="mt-1 text-xs text-navy/50">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
