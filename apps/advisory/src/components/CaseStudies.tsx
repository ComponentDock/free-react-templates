const studies = [
  {
    title: 'Starts the automated process.',
    description: 'The automated process starts as soon as your clothes go into the machine.',
    tag: 'Urban',
    image: 'https://picsum.photos/seed/advisory-cs1/400/300',
  },
  {
    title: 'Media planning strategy.',
    description: 'The automated process starts as soon as your clothes go into the machine.',
    tag: 'Corporate',
    image: 'https://picsum.photos/seed/advisory-cs2/400/300',
  },
  {
    title: 'Professional HR solutions.',
    description: 'The automated process starts as soon as your clothes go into the machine.',
    tag: 'Business',
    image: 'https://picsum.photos/seed/advisory-cs3/400/300',
  },
]

export function CaseStudies() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-navy">
            Case studies
          </span>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            Some great stuffs we have done
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-xl border border-gray-100"
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mb-4 text-sm text-text">{s.description}</p>
                <span className="inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
                  {s.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
