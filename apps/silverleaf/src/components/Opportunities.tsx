const opportunities = [
  {
    image: 'https://picsum.photos/seed/silverleaf-opp1/600/300',
    title: 'Join Our Community',
    description:
      'Experience a fulfilling lifestyle with our comprehensive care programs and vibrant community.',
  },
  {
    image: 'https://picsum.photos/seed/silverleaf-opp2/600/300',
    title: 'Volunteer With Us',
    description:
      'Make a difference in the lives of our residents through meaningful volunteer opportunities.',
  },
]

export function Opportunities() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {opportunities.map((opp) => (
            <div key={opp.title} className="flex flex-col overflow-hidden sm:flex-row">
              {/* Image panel */}
              <div
                className="h-48 bg-cover bg-center sm:h-auto sm:w-1/2"
                style={{ backgroundImage: `url(${opp.image})` }}
              />
              {/* Text panel */}
              <div className="flex flex-1 flex-col justify-center bg-brand px-6 py-8 sm:w-1/2">
                <h3 className="mb-3 font-display text-xl font-bold text-white">{opp.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/80">{opp.description}</p>
                <a
                  href="#"
                  className="inline-block w-fit rounded-full border border-white px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
