const cities = [
  {
    name: 'San Francisco',
    image: 'https://picsum.photos/seed/turnkey-sf/600/400',
    span: 'col-span-1 row-span-2',
  },
  { name: 'New York', image: 'https://picsum.photos/seed/turnkey-ny/800/400', span: 'col-span-2' },
  { name: 'Boston', image: 'https://picsum.photos/seed/turnkey-bos/400/300', span: 'col-span-1' },
  {
    name: 'Los Angeles',
    image: 'https://picsum.photos/seed/turnkey-la/400/300',
    span: 'col-span-1',
  },
]

export function CityGallery() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-heading mb-3">Find Home in Your City</h2>
          <p className="text-body max-w-xl mx-auto">
            It won&apos;t be a bigger problem to find one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${city.span}`}
            >
              <img
                src={city.image}
                alt={`${city.name} properties`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">{city.name} Properties</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
