import { Bath, BedDouble, Square, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const properties = [
  {
    price: '$849,200',
    baths: 2,
    beds: 4,
    sqft: 120,
    location: '2 Zwar Place, Florey',
    img: 'nestled-p1',
  },
  {
    price: '$900,295',
    baths: 2,
    beds: 4,
    sqft: 120,
    location: '15 Kangaroo St, Bruce',
    img: 'nestled-p2',
  },
  {
    price: '$2,013,920',
    baths: 3,
    beds: 5,
    sqft: 200,
    location: '78 Northbourne Ave, Canberra',
    img: 'nestled-p3',
  },
  {
    price: '$1,150,000',
    baths: 2,
    beds: 3,
    sqft: 150,
    location: '32 Sturt Ave, Griffith',
    img: 'nestled-p4',
  },
  {
    price: '$750,000',
    baths: 1,
    beds: 2,
    sqft: 85,
    location: '9 Gladstone St, Turner',
    img: 'nestled-p5',
  },
  {
    price: '$1,890,000',
    baths: 3,
    beds: 5,
    sqft: 250,
    location: '45 Empire Cir, Yarralumla',
    img: 'nestled-p6',
  },
]

export function Properties() {
  return (
    <section className="py-16 bg-light" id="buy">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-heading">Properties</h2>
          <div className="flex gap-2">
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors"
              aria-label="Previous properties"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors"
              aria-label="Next properties"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {properties.map((p) => (
            <article
              key={p.location}
              className="min-w-[300px] w-[300px] snap-start bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${p.img}/600/400)` }}
              />
              <div className="p-5">
                <p className="text-secondary font-bold text-lg mb-1">{p.price}</p>
                <div className="flex items-center gap-4 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Bath size={14} aria-hidden="true" /> {p.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble size={14} aria-hidden="true" /> {p.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square size={14} aria-hidden="true" /> {p.sqft} m²
                  </span>
                </div>
                <div className="flex items-center justify-between border-t pt-3">
                  <div>
                    <span className="text-xs text-muted block">location:</span>
                    <h3 className="text-sm font-bold text-heading flex items-center gap-1">
                      <MapPin size={14} className="text-brand" aria-hidden="true" />
                      {p.location}
                    </h3>
                  </div>
                  <a
                    href="#"
                    className="text-brand hover:text-brand-dark transition-colors"
                    aria-label={`View ${p.location}`}
                  >
                    <ChevronRight size={20} />
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
