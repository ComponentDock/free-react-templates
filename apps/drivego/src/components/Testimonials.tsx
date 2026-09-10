const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Mike Fisher',
    role: 'Owner Ford',
    avatar: 'drivego-avatar-1',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Jean Stanley',
    role: 'Traveler',
    avatar: 'drivego-avatar-2',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Katie Rose',
    role: 'Customer',
    avatar: 'drivego-avatar-3',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-black text-ink">Testimonials</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-xl bg-white p-6 shadow-sm border-b-4 border-brand"
              style={{ borderRadius: '7px' }}
            >
              <blockquote className="text-sm leading-relaxed text-mist">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${testimonial.avatar}/100/100`}
                  alt={testimonial.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <span className="block font-display text-sm font-bold text-ink">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-mist">{testimonial.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
