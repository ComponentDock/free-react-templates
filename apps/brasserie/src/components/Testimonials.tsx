const testimonials = [
  {
    name: 'Robert Jonson',
    role: 'Food Critic',
    quote:
      'An extraordinary dining experience. The flavors are bold, the presentation is art, and the service is impeccable.',
  },
  {
    name: 'Clara Hudson',
    role: 'Regular Guest',
    quote:
      'Every visit feels special. The seasonal menu keeps us coming back, and the ambiance is simply unmatched.',
  },
  {
    name: 'Jane Black',
    role: 'Culinary Blogger',
    quote:
      'From the amuse-bouche to dessert, every course tells a story. This is fine dining at its finest.',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-center text-3xl font-bold uppercase tracking-wide">
          Testimonials
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-gray-800 p-6 text-center">
              <p className="text-sm italic leading-relaxed text-gray-300">"{t.quote}"</p>
              <div className="mt-6">
                <p className="font-heading font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
