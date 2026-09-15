const testimonials = [
  {
    quote:
      'Stratum has been instrumental in helping us modernize our mining operations. Their expertise and dedication are unmatched in the industry.',
    name: 'Ricky Fisher',
    image: 'https://picsum.photos/seed/stratum-testi1/100/100',
  },
  {
    quote:
      'Working with the Stratum team has been a pleasure. Their professional approach and technical knowledge make them a trusted partner.',
    name: 'Ken Davis',
    image: 'https://picsum.photos/seed/stratum-testi2/100/100',
  },
  {
    quote:
      'The results speak for themselves. Stratum helped us increase our output by 40% while maintaining the highest safety standards.',
    name: 'Mellisa Griffin',
    image: 'https://picsum.photos/seed/stratum-testi3/100/100',
  },
  {
    quote:
      'Outstanding service and attention to detail. Stratum is the go-to company for any mining or industrial project.',
    name: 'Robert Steward',
    image: 'https://picsum.photos/seed/stratum-testi4/100/100',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f8f9fa] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading uppercase text-black mb-4">Testimonial</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <blockquote className="mb-4 text-[#939393] italic text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-lg text-black">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
