const features = [
  {
    title: 'Clean & Modern',
    description:
      'We bring a fresh approach to interior design, combining contemporary aesthetics with timeless principles to create spaces that inspire.',
  },
  {
    title: 'Professional Services',
    description:
      'Our team of experienced designers and architects work closely with you to transform your vision into reality with precision and care.',
  },
  {
    title: 'Creative Solutions',
    description:
      'From concept to completion, we offer innovative design solutions tailored to your lifestyle, budget, and personal taste.',
  },
] as const

export function OurInfo() {
  return (
    <section id="about" className="relative bg-dark-navy py-24">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/chamfer-info-bg/1920/600')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
