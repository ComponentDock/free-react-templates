const features = [
  {
    title: 'Creative Design',
    description:
      'Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard in the workplace.',
    image: 'https://picsum.photos/seed/kinetic-f1/400/250',
  },
  {
    title: 'Appropriate UX',
    description:
      'There are advances being made in science and technology everyday, and a good example of this is the evolution of digital interfaces.',
    image: 'https://picsum.photos/seed/kinetic-f2/400/250',
  },
  {
    title: 'Super Clean Code',
    description:
      'Software is a name that over time has established itself as a hallmark of quality and reliability in the technology industry.',
    image: 'https://picsum.photos/seed/kinetic-f3/400/250',
  },
]

export function Features() {
  return (
    <section id="services" className="bg-gradient-to-r from-primary-400 to-teal-400 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-medium text-white">Our Exclusive Features</h2>
          <p className="text-sm font-light leading-relaxed text-white/90">
            Living in today&apos;s metropolitan world of cellular phones, mobile computers and other
            high-tech gadgets is not just hectic but very demanding.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto mb-6 h-48 w-full rounded object-cover"
                loading="lazy"
              />
              <h4 className="mb-3 text-lg font-medium text-white">{feature.title}</h4>
              <p className="mb-4 text-sm font-light leading-relaxed text-white/90">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white px-5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
