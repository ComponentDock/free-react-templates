const ministries = [
  {
    title: 'Prayer & Devotional for Children',
    category: 'Children Ministries',
    date: 'May 12, 2018',
    description:
      'Join our dedicated prayer sessions designed for young hearts and minds. Building faith foundations through guided devotionals.',
    image: 'https://picsum.photos/seed/liturgy-min-1/120/120',
  },
  {
    title: 'We Must Walk In The Middle of The Road',
    category: 'Missions',
    date: 'May 12, 2018',
    description:
      'Our missions outreach brings hope and support to communities around the world. Be part of something bigger.',
    image: 'https://picsum.photos/seed/liturgy-min-2/120/120',
  },
  {
    title: 'Tracts Giving',
    category: 'Care Ministry',
    date: 'May 12, 2018',
    description:
      'Providing care and support to those in need through our dedicated care ministry programs.',
    image: 'https://picsum.photos/seed/liturgy-min-3/120/120',
  },
]

export function Ministries() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block bg-golden-400 px-4 py-0.5 text-[11px] uppercase tracking-[0.2em] text-white">
            Ministries
          </span>
          <h2 className="font-heading text-3xl text-charcoal-800">Events & Ministries</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div key={ministry.title} className="flex gap-4">
              <img
                src={ministry.image}
                alt={ministry.title}
                className="h-[120px] w-[120px] flex-shrink-0 object-cover"
              />
              <div>
                <h3 className="mb-1 font-heading text-lg leading-snug text-charcoal-800">
                  <a href="#" className="transition-opacity hover:opacity-80">
                    {ministry.title}
                  </a>
                </h3>
                <p className="mb-2 text-[11px] uppercase tracking-[0.1em] text-charcoal-400">
                  {ministry.date},{' '}
                  <a href="#" className="text-charcoal-800 transition-opacity hover:opacity-80">
                    {ministry.category}
                  </a>
                </p>
                <p className="text-sm leading-relaxed text-charcoal-400">{ministry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
