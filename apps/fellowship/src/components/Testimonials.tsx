const TESTIMONIALS = [
  {
    text: 'Fellowship has truly changed my life. The community here is so welcoming and the sermons have deepened my faith in ways I never expected.',
    image: 'https://picsum.photos/seed/fellowship-person-1/100/100',
    name: 'Sarah Johnson',
    location: 'Austin, TX',
  },
  {
    text: 'I found a home at Fellowship. The ministries here have helped me grow as a person and as a believer. I am grateful for this church family.',
    image: 'https://picsum.photos/seed/fellowship-person-2/100/100',
    name: 'Michael Brown',
    location: 'Portland, OR',
  },
  {
    text: 'The youth program is outstanding. My children love coming to church and have made lifelong friends here. Thank you, Fellowship.',
    image: 'https://picsum.photos/seed/fellowship-person-3/100/100',
    name: 'Emily Davis',
    location: 'Denver, CO',
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-light py-20" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-heading text-3xl font-medium text-gray-900 md:text-4xl">
          Change Lives
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <blockquote className="mb-6 text-sm leading-relaxed text-text-muted">
                "{t.text}"
              </blockquote>
              <img
                src={t.image}
                alt={t.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
              />
              <p className="font-heading text-sm font-medium text-gray-900">{t.name}</p>
              <p className="text-xs text-text-muted">{t.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
