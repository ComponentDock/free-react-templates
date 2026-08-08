const testimonials = [
  {
    author: 'Cloe Marena',
    role: 'Homeowner',
    quote:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam qui expedita.',
  },
  {
    author: 'Nathalie Channie',
    role: 'Interior Architect',
    quote:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam qui expedita.',
  },
  {
    author: 'Will Turner',
    role: 'Property Developer',
    quote:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam qui expedita.',
  },
  {
    author: 'Nicolas Stainer',
    role: 'Design Consultant',
    quote:
      'Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum numquam ducimus quo ab laboriosam qui expedita.',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[3px] text-brand-dark">
          Happy clients
        </p>
        <h2 className="mt-3 text-center font-display text-4xl font-black uppercase text-ink dark:text-white">
          Testimonials
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-black/5 bg-paper p-8 dark:border-white/10 dark:bg-gray-900"
            >
              <blockquote className="text-sm leading-relaxed text-mist dark:text-gray-400">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-display text-base font-black text-ink"
                  aria-hidden="true"
                >
                  {t.author.charAt(0)}
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase text-ink dark:text-white">
                    {t.author}
                  </h3>
                  <p className="text-xs text-mist dark:text-gray-400">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
