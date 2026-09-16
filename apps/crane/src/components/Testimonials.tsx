const testimonials = [
  {
    name: 'Jordan Adams',
    role: 'Client',
    quote:
      'Our program is guided by the developmental milestones which embrace the six most important learning domains in education.',
    avatar: 'https://picsum.photos/seed/crane-test1/80/80',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Project Manager',
    quote:
      'Outstanding work quality and professional team. They delivered our project on time and exceeded expectations.',
    avatar: 'https://picsum.photos/seed/crane-test2/80/80',
  },
  {
    name: 'David Chen',
    role: 'Architect',
    quote:
      'Creative solutions and attention to detail. The construction process was smooth from start to finish.',
    avatar: 'https://picsum.photos/seed/crane-test3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <h4 className="text-lg font-bold text-heading">{t.name}</h4>
              <span className="mb-4 block text-sm text-smoke">{t.role}</span>
              <p className="text-body">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
