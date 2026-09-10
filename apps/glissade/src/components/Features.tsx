const features = [
  {
    title: 'Creative Design',
    description:
      'Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard in design and technology.',
    image: 'https://picsum.photos/seed/glissade-feat1/400/250',
  },
  {
    title: 'Appropriate UX',
    description:
      'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD screens are uniquely modern.',
    image: 'https://picsum.photos/seed/glissade-feat2/400/250',
  },
  {
    title: 'Super Clean Code',
    description:
      "Sony laptops are among the most well known laptops on today's market. Sony is a name that over time has established itself as a trusted brand.",
    image: 'https://picsum.photos/seed/glissade-feat3/400/250',
  },
] as const

export function Features() {
  return (
    <section className="bg-gradient-to-b from-brand-start to-brand-end py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Our Exclusive Features</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/90">
            Living in today&apos;s metropolitan world of cellular phones, mobile computers and other
            high-tech gadgets is not just hectic but very demanding.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="h-48 w-full overflow-hidden rounded-lg">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-6 text-lg font-medium text-white">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{f.description}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center rounded-full border border-white px-6 py-2 text-sm font-medium text-white transition-all hover:border-transparent hover:bg-white/20"
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
