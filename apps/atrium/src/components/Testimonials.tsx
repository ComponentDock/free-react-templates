const testimonials = [
  {
    quote:
      'Atrium translated our brief into a building that feels twice its size — light, calm, and perfectly in step with how we actually work.',
    name: 'Mithila Rahman',
    role: 'Designer at Atrium',
    avatar: 'https://picsum.photos/seed/atrium-avatar-1/100/100',
  },
  {
    quote:
      'The team listened first and drew second. Every detail — from the stair to the switch plate — was considered and beautifully resolved.',
    name: 'Jonas Keller',
    role: 'Project Architect',
    avatar: 'https://picsum.photos/seed/atrium-avatar-2/100/100',
  },
  {
    quote:
      'Our office was finished on time and on budget, and the spaces still surprise us with how well they work a year later.',
    name: 'Priya Nair',
    role: 'Interior Stylist',
    avatar: 'https://picsum.photos/seed/atrium-avatar-3/100/100',
  },
] as const

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <img
        src="https://picsum.photos/seed/atrium-testimonial/1600/700"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl space-y-14 px-4 sm:px-6">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="text-center">
            <blockquote className="font-serif text-xl leading-relaxed text-white sm:text-2xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8">
              <img
                src={testimonial.avatar}
                alt=""
                className="mx-auto h-14 w-14 rounded-full object-cover"
              />
              <span className="mt-4 block text-base font-medium text-white">
                {testimonial.name}
              </span>
              <span className="mt-1 block font-serif text-sm text-white/70">
                {testimonial.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
