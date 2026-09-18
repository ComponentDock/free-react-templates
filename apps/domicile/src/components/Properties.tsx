const properties = [
  {
    title: '853 S Lucerne Blvd',
    location: 'Los Angeles, CA',
    price: '$2,250,500',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    img: 'domicile-p1',
  },
  {
    title: '625 S. Berendo St',
    location: 'Los Angeles, CA',
    price: '$1,850,000',
    beds: 3,
    baths: 2,
    sqft: '2,400',
    img: 'domicile-p2',
  },
  {
    title: '320 Oak Avenue',
    location: 'Beverly Hills, CA',
    price: '$3,500,000',
    beds: 5,
    baths: 4,
    sqft: '4,100',
    img: 'domicile-p3',
  },
  {
    title: '115 Maple Drive',
    location: 'Santa Monica, CA',
    price: '$2,100,000',
    beds: 3,
    baths: 2,
    sqft: '2,800',
    img: 'domicile-p4',
  },
  {
    title: '890 Sunset Blvd',
    location: 'West Hollywood, CA',
    price: '$1,650,000',
    beds: 2,
    baths: 2,
    sqft: '1,900',
    img: 'domicile-p5',
  },
  {
    title: '456 Palm Street',
    location: 'Malibu, CA',
    price: '$4,200,000',
    beds: 6,
    baths: 5,
    sqft: '5,200',
    img: 'domicile-p6',
  },
]
export function Properties() {
  return (
    <section className="py-16" id="properties">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading">Wide Range of Properties</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <article
              key={p.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div
                className="relative h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${p.img}/600/400)` }}
              >
                <span className="absolute top-3 left-3 bg-brand text-white text-xs font-bold px-3 py-1 rounded">
                  For Sale
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-heading group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted flex items-center gap-1 mt-1">
                  <span className="fa fa-map-marker text-brand" aria-hidden="true" />
                  {p.location}
                </p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted">
                  <span>
                    <span className="fa fa-bed" aria-hidden="true" /> {p.beds} Beds
                  </span>
                  <span>
                    <span className="fa fa-bath" aria-hidden="true" /> {p.baths} Baths
                  </span>
                  <span>
                    <span className="fa fa-square" aria-hidden="true" /> {p.sqft} sqft
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-brand">{p.price}</span>
                  <a
                    href="#"
                    className="text-sm font-semibold text-heading hover:text-brand transition-colors"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
