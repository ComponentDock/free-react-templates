const cards = [
  {
    title: 'Strategic Partners',
    blurb:
      'Connect your favorite tools and services so your team stays in flow without switching tabs.',
    image: 'https://picsum.photos/seed/boost-more-1/800/600',
  },
  {
    title: 'Business in Mind',
    blurb:
      'Reporting, permissions, and billing built for companies of every size, from startup to enterprise.',
    image: 'https://picsum.photos/seed/boost-more-2/800/600',
  },
] as const

export function MoreFeatures() {
  return (
    <section id="more" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white">More Features</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-mist dark:text-gray-400">
          Deep integrations and enterprise-ready controls, out of the box.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-900"
            >
              <img src={card.image} alt="" className="h-56 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-ink dark:text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {card.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
