const testimonials = [
  {
    quote:
      'Digger transformed our mining operation with their expertise and dedication. Highly recommended!',
    name: 'Michael Torres',
    role: 'Mining Director, OreCorp',
    image: 'https://picsum.photos/seed/digger-test1/100/100',
  },
  {
    quote:
      'Professional, reliable, and innovative. Digger delivered our project on time and within budget.',
    name: 'Lisa Chen',
    role: 'Project Manager, BuildCo',
    image: 'https://picsum.photos/seed/digger-test2/100/100',
  },
  {
    quote: 'The best in the business. Their safety record and quality of work speaks for itself.',
    name: 'Robert Johnson',
    role: 'Operations VP, MineWorks',
    image: 'https://picsum.photos/seed/digger-test3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center p-6">
              <p className="text-body italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-bold text-heading">{t.name}</h4>
              <p className="text-xs text-secondary">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
