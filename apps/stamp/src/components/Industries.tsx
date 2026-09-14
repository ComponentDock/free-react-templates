const INDUSTRIES = [
  {
    image: 'https://picsum.photos/seed/stamp-ind1/400/300',
    title: 'Mechanical Engineering',
    description:
      'Set sea kind own creeping a subdue creature signs lights reserved down said joker maid.',
  },
  {
    image: 'https://picsum.photos/seed/stamp-ind2/400/300',
    title: 'Chemical Research',
    description:
      'Set sea kind own creeping a subdue creature signs lights reserved down said joker maid.',
  },
  {
    image: 'https://picsum.photos/seed/stamp-ind3/400/300',
    title: 'Industrial Construction',
    description:
      'Set sea kind own creeping a subdue creature signs lights reserved down said joker maid.',
  },
] as const

export function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-3xl font-semibold text-ink">Our Industries Served</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <div key={industry.title}>
              <img
                src={industry.image}
                alt={industry.title}
                className="mb-4 w-full rounded object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-ink">{industry.title}</h3>
              <p className="mt-2 text-mist leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
