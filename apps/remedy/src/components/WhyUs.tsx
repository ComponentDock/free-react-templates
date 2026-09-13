const reasons = [
  {
    number: 1,
    title: 'Quality Assured',
    description:
      'Every product undergoes rigorous quality testing before reaching our shelves. We partner only with trusted manufacturers.',
  },
  {
    number: 2,
    title: 'Expert Guidance',
    description:
      'Our team of pharmacists and nutrition experts is always available to help you choose the right products for your needs.',
  },
  {
    number: 3,
    title: 'Best Prices',
    description:
      'We offer competitive prices on all our products without compromising on quality. Save more with our membership discounts.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-paper py-16 md:py-20" data-testid="why-us">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink md:text-4xl">Why Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.number} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-black text-white">
                {r.number}
              </div>
              <h3 className="mb-3 text-lg font-bold text-ink">{r.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
