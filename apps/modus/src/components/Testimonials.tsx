const testimonials = [
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic. Their design transformed our office space beautifully.',
    author: '— Robert',
    avatar: 'https://picsum.photos/seed/modus-testi1/80/80',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic. Exceptional attention to detail and creative vision.',
    author: '— Sarah',
    avatar: 'https://picsum.photos/seed/modus-testi2/80/80',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic. They brought our home renovation to life.',
    author: '— David',
    avatar: 'https://picsum.photos/seed/modus-testi3/80/80',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {testimonials.map((t) => (
            <div key={t.author} className="mb-12 last:mb-0">
              <div className="mx-auto mb-6 h-12 w-12 overflow-hidden rounded-full">
                <img
                  src={t.avatar}
                  alt={`Photo of ${t.author.replace('— ', '')}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <blockquote className="text-base leading-relaxed text-mist dark:text-gray-400">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-display text-sm font-bold text-ink dark:text-white">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
