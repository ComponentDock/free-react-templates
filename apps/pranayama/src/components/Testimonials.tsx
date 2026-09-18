const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Yoga Student',
    quote:
      'Pranayama has completely transformed my approach to fitness. The instructors are knowledgeable and the community is incredibly supportive.',
  },
  {
    name: 'Michael Chen',
    role: 'Fitness Instructor',
    quote:
      'As a fitness professional, I appreciate the depth and authenticity of the classes here. The yoga program is one of the best I have experienced.',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: image */}
          <div>
            <img
              src="https://picsum.photos/seed/pranayama-testi/600/500"
              alt="Yoga practice session"
              className="w-full rounded-2xl object-cover shadow-lg"
              width={600}
              height={500}
            />
          </div>

          {/* Right: testimonial cards */}
          <div className="flex flex-col gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-ink-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-mist">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
