const FEATURES = [
  {
    image: 'https://picsum.photos/seed/artwave-feat1/360/240',
    title: 'Creative Design',
    description:
      'Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard in the workplace.',
  },
  {
    image: 'https://picsum.photos/seed/artwave-feat2/360/240',
    title: 'Appropriate UX',
    description:
      'There are advances being made in science and technology every day, and a good example of this is the LCD monitor. LCD displays continue to evolve.',
  },
  {
    image: 'https://picsum.photos/seed/artwave-feat3/360/240',
    title: 'Super Clean Code',
    description:
      "Sony laptops are among the most well-known laptops on today's market. Sony is a name that over time has established itself as a reliable brand.",
  },
]

export function FeaturedArea() {
  return (
    <section className="bg-gradient-to-t from-brand-blue to-brand-cyan py-20" id="services">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <h2 className="mb-4 text-[30px] font-medium text-white">Our Exclusive Features</h2>
          <p className="text-sm font-light leading-relaxed text-white/90">
            Living in today&apos;s metropolitan world of cellular phones, mobile computers and other
            high-tech gadgets is not just hectic but very exhausting.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="text-center">
              <div
                className="mb-6 h-[200px] rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${feat.image})` }}
              />
              <h4 className="mb-3 text-base font-medium text-white">{feat.title}</h4>
              <p className="mb-4 text-sm font-light leading-relaxed text-white/90">
                {feat.description}
              </p>
              <a
                href="#"
                className="inline-block rounded-[20px] border border-white/50 px-5 py-2 text-sm font-light text-white transition hover:border-transparent hover:bg-white/10"
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
