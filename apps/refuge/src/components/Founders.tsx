const founders = [
  {
    name: 'Alex Peters',
    title: 'CEO, Co-Founder',
    bio: 'Alex has over 20 years of experience in the insurance industry, having started his career as an underwriter before founding Refuge to bring accessible coverage to everyone.',
    image: 'https://picsum.photos/seed/refuge-founder-1/200/200',
  },
  {
    name: 'Shane Cripton',
    title: 'President, Co-Founder',
    bio: 'Shane brings a background in finance and customer experience to Refuge, ensuring every client interaction reflects the company commitment to trust and transparency.',
    image: 'https://picsum.photos/seed/refuge-founder-2/200/200',
  },
]

export function Founders() {
  return (
    <section className="bg-paper-alt py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            Our Founders
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {founders.map((f) => (
            <div key={f.name} className="text-center">
              <img
                src={f.image}
                alt={f.name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mb-1 text-lg font-semibold text-ink">{f.name}</h3>
              <p className="mb-4 text-sm text-mist">{f.title}</p>
              <p className="mx-auto max-w-md text-mist">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
