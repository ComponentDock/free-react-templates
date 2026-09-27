const testimonials = [
  {
    name: 'Robert Mack',
    role: 'CEO & Founder',
    quote:
      'Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repellendus!',
    avatar: 'tidestone-avatar1',
  },
  {
    name: 'David Alone',
    role: 'CEO & Founder',
    quote:
      'Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repellendus!',
    avatar: 'tidestone-avatar2',
  },
  {
    name: 'Adam Pallin',
    role: 'CEO & Founder',
    quote:
      'Incidunt deleniti blanditiis quas aperiam recusandae consillo ullam quibusdam cum libero illo repellendus!',
    avatar: 'tidestone-avatar3',
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">Our Guest Love Us</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-4 rounded-lg bg-paper p-6">
              <img
                src={`https://picsum.photos/seed/${t.avatar}/80/80`}
                alt={t.name}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="mb-4 text-sm leading-relaxed text-mist italic">"{t.quote}"</p>
                <h4 className="font-display text-base font-semibold text-ink">{t.name}</h4>
                <p className="text-xs text-mist">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
