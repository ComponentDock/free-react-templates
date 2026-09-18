const volunteers = [
  { name: 'Sarah Johnson', image: 'https://picsum.photos/seed/givingheart-vol1/400/500' },
  { name: 'Michael Chen', image: 'https://picsum.photos/seed/givingheart-vol2/400/500' },
  { name: 'Emily Davis', image: 'https://picsum.photos/seed/givingheart-vol3/400/500' },
  { name: 'James Wilson', image: 'https://picsum.photos/seed/givingheart-vol4/400/500' },
]

export function Volunteers() {
  return (
    <section className="bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Our Volunteers</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Meet the incredible people who dedicate their time and energy to making a difference.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {volunteers.map((vol) => (
            <div key={vol.name} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={vol.image}
                  alt={vol.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Hover gradient overlay with name */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#f40f68] via-[#f86e3d] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-center text-sm font-bold text-white">{vol.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
