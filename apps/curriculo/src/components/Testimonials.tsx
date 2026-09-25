const testimonials = [
  {
    quote:
      'Alex delivered an exceptional redesign that increased our conversion rate by 40%. Their attention to detail and user-first approach is outstanding.',
    name: 'Sarah Chen',
    role: 'CEO, TechFlow Inc.',
    seed: 'curriculo-t1',
  },
  {
    quote:
      'Working with Alex was a game-changer for our product. They brought clarity to complex workflows and made our platform intuitive for thousands of users.',
    name: 'Marcus Rivera',
    role: 'CTO, DataPulse',
    seed: 'curriculo-t2',
  },
  {
    quote:
      'The design system Alex created has saved our team hundreds of hours. Consistent, scalable, and beautifully documented.',
    name: 'Emily Watson',
    role: 'Head of Design, ScaleUp',
    seed: 'curriculo-t3',
  },
  {
    quote:
      'Alex has an incredible ability to translate business goals into elegant user experiences. Our users love the new interface.',
    name: 'James Park',
    role: 'Product Lead, CloudBase',
    seed: 'curriculo-t4',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-extralight text-gray-800">
          Client <strong className="font-bold">Testimonial</strong>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-4">
              <img
                src={`https://picsum.photos/seed/${t.seed}/100/100`}
                alt={t.name}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <blockquote>
                <p className="mb-2 text-sm leading-relaxed text-gray-600 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <cite className="text-sm font-semibold not-italic text-gray-800">
                  — {t.name}, {t.role}
                </cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
