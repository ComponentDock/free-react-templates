const countries = [
  {
    name: 'Canada',
    image: 'https://picsum.photos/seed/passage-canada/400/300',
    description:
      'Explore immigration pathways to Canada including Express Entry and Provincial Nominee Programs.',
    link: '#',
  },
  {
    name: 'Australia',
    image: 'https://picsum.photos/seed/passage-australia/400/300',
    description: 'Discover skilled migration and study visa options for Australia.',
    link: '#',
  },
  {
    name: 'United States',
    image: 'https://picsum.photos/seed/passage-usa/400/300',
    description: 'Navigate the US immigration system with expert guidance and support.',
    link: '#',
  },
  {
    name: 'United Kingdom',
    image: 'https://picsum.photos/seed/passage-uk/400/300',
    description: 'Learn about UK work visas, study permits, and settlement routes.',
    link: '#',
  },
]

export function ServiceCards() {
  return (
    <section id="countries" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand">
            Popular Countries
          </span>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">Immigration Destinations</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-heading">{country.name}</h3>
                <p className="mb-4 text-sm text-muted">{country.description}</p>
                <a
                  href={country.link}
                  className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
