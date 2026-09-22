const TESTIMONIALS = [
  {
    title: 'Nice Accommodation',
    quote:
      'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.',
    author: 'Omeka Lotus',
  },
  {
    title: 'Delicious Food',
    quote:
      'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.',
    author: 'Omeka Lotus',
  },
  {
    title: 'Great Service',
    quote:
      'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.',
    author: 'Omeka Lotus',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-offwhite py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article key={t.title} className="rounded bg-white p-8 shadow-md">
              <h3 className="font-heading text-lg font-bold text-sienna">
                <a href="#" className="transition-colors hover:text-brand">
                  {t.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">&ldquo;{t.quote}&rdquo;</p>
              <span className="mt-4 block text-xs font-semibold text-ink">— {t.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
