const features = [
  {
    image: 'https://picsum.photos/seed/gastro-romantic/400/300',
    title: 'Romantic Restaurant',
    description:
      'Create unforgettable memories in our elegantly designed dining space with soft lighting and intimate seating.',
  },
  {
    image: 'https://picsum.photos/seed/gastro-food/400/300',
    title: 'Delicious Food',
    description:
      'Our talented chefs craft each dish with passion, using the finest ingredients and traditional Italian recipes.',
  },
  {
    image: 'https://picsum.photos/seed/gastro-wine/400/300',
    title: 'Red Wines You Love',
    description:
      'Discover our carefully curated selection of premium Italian wines, perfectly paired with every meal.',
  },
]

export function Intro() {
  return (
    <section id="gallery">
      {/* Parallax banner */}
      <div
        className="relative flex h-[300px] items-center justify-center bg-cover bg-fixed bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/gastro-parallax/1920/600)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white">
          <p className="font-accent text-2xl">Discover</p>
          <h2 className="mt-2 text-4xl font-bold">Gastronome</h2>
        </div>
      </div>

      {/* Feature cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-20 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="overflow-hidden rounded-[10px]">
            <div className="overflow-hidden">
              <img
                src={f.image}
                alt={f.title}
                className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-gray">{f.description}</p>
              <a
                href="#gallery"
                className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-surface-dark"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
