const services = [
  {
    title: 'Planing',
    description:
      'Crafting thoughtful spatial strategies that align with your vision, budget, and lifestyle needs from concept to completion.',
    number: '01',
  },
  {
    title: 'Architecture',
    description:
      'Blending form and function into striking structural designs that stand the test of time and exceed expectations.',
    number: '02',
  },
  {
    title: '3D Design',
    description:
      'Bringing your project to life with photorealistic renders and immersive walkthroughs before a single wall goes up.',
    number: '03',
  },
] as const

export function ServicesStrip() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="relative">
              <h3 className="text-xl font-bold text-primary">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <span className="absolute -bottom-8 right-0 text-[120px] font-bold leading-none text-primary/5">
                {service.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
