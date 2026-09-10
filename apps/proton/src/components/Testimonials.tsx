const testimonials = [
  {
    quote:
      'Proton delivered exactly what we needed — a clean, modern website that converts visitors into customers.',
    author: 'Sarah Mitchell',
    role: 'CEO, TechStart',
  },
  {
    quote:
      'Working with the Proton team was seamless. They understood our vision and brought it to life beautifully.',
    author: 'James Chen',
    role: 'Founder, GreenLeaf',
  },
  {
    quote:
      'The attention to detail and quality of design exceeded our expectations. Highly recommended.',
    author: 'Emily Rodriguez',
    role: 'Marketing Director, Atlas Corp',
  },
]

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="mb-6 block text-[100px] leading-none text-proton-500/20">&ldquo;</span>
        <blockquote>
          <p className="mb-8 text-lg italic leading-relaxed text-gray-600">
            {testimonials[0]!.quote}
          </p>
          <div>
            <p className="font-bold text-gray-900">{testimonials[0]!.author}</p>
            <p className="text-sm text-gray-500">{testimonials[0]!.role}</p>
          </div>
        </blockquote>
      </div>
    </section>
  )
}
