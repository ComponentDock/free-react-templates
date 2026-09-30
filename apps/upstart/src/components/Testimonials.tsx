interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: readonly Testimonial[] = [
  {
    name: 'Steve Jobs',
    role: 'Co-Founder',
    image: 'https://picsum.photos/seed/upstart-person-1/160/160',
    quote:
      '“They cared about the details we could not even name yet — the result speaks for itself.”',
  },
  {
    name: 'John Doe',
    role: 'Co-Founder',
    image: 'https://picsum.photos/seed/upstart-person-2/160/160',
    quote: '“A small team that moves like a big one. Clear process, sharp design, on schedule.”',
  },
  {
    name: 'John Smith',
    role: 'Co-Founder',
    image: 'https://picsum.photos/seed/upstart-person-3/160/160',
    quote: '“Working with them reset how our whole company thinks about product design.”',
  },
]

/** Testimonials: three quoted cards — 80px round avatar, Oswald name,
 *  muted "Co-Founder" role and a quoted blockquote. */
export function Testimonials() {
  return (
    <section className="bg-white py-[3em]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-5 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto mb-[30px] h-20 w-20 rounded-full"
              />
              <h3 className="font-heading text-[20px] text-black">{testimonial.name}</h3>
              <span className="block text-muted">{testimonial.role}</span>
              <blockquote className="mt-4 text-muted">{testimonial.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
