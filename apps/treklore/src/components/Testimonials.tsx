const testimonials = [
  {
    text: '"Treklore made planning our honeymoon effortless. Every detail was perfect — from the boutique hotel to the private sunset cruise."',
    author: 'Sarah & James',
    role: 'Honeymooners',
  },
  {
    text: '"The guided tours were phenomenal. Our guide knew every hidden gem in the city and made the trip truly unforgettable."',
    author: 'Michael Chen',
    role: 'Solo Traveler',
  },
  {
    text: '"Best value for a family vacation we have ever experienced. The kids loved every minute and we got to relax too!"',
    author: 'The Martinez Family',
    role: 'Family Vacation',
  },
]

const navItems = ['City Breaks Clients 01', 'Cruises Clients 02', 'All Inclusive Clients 03']

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="relative py-24">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/treklore-testimonial/1920/800)' }}
      />
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
            simply amazing places
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-white">
            Testimonials
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Testimonials list */}
          <div className="flex-1 space-y-8">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded bg-white/10 p-6 backdrop-blur-sm">
                <p className="mb-4 text-sm leading-relaxed text-white/90 italic">{t.text}</p>
                <footer className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue font-display text-sm font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-display text-sm font-semibold text-white">
                      {t.author}
                    </cite>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Side nav */}
          <aside className="flex flex-col gap-4 lg:w-64">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded bg-white/5 p-4 text-sm font-display font-semibold uppercase tracking-wide text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
