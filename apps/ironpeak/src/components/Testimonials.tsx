const testimonials = [
  {
    quote:
      'The trainers here are incredible. I have never felt more motivated and confident in my fitness journey. The classes are always challenging and fun.',
    name: 'Mellisa Howard',
    role: 'CEO, XYZ Company',
    image: 'https://picsum.photos/seed/ironpeak-testi1/100/100',
  },
  {
    quote:
      'Joining this gym was the best decision I ever made. The community is supportive, the equipment is top-notch, and the results speak for themselves.',
    name: 'Mike Richardson',
    role: 'CEO, XYZ Company',
    image: 'https://picsum.photos/seed/ironpeak-testi2/100/100',
  },
  {
    quote:
      'I appreciate the variety of classes offered. Whether it is weight training or yoga, there is always something to keep me engaged and progressing.',
    name: 'Charles White',
    role: 'CEO, XYZ Company',
    image: 'https://picsum.photos/seed/ironpeak-testi3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-ink">Testimonial</h2>
        <span className="text-6xl font-extrabold uppercase tracking-wider text-gray-100">
          Testimonial
        </span>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-lg border border-gray-100 p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-muted italic">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="text-sm font-bold text-ink">{t.name}</h4>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
