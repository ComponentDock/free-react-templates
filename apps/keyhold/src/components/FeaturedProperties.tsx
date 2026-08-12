import { ArrowUpRight, Bath, BedDouble, Eye, Heart, MapPin, Ruler } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const properties = [
  {
    title: 'Blue View Home',
    price: '$3,050',
    oldPrice: '$800,000',
    location: '2854 Meadow View Drive, Hartford, USA',
    beds: 3,
    baths: 2,
    sqft: '1,878 sqft',
    image: 'https://picsum.photos/seed/keyhold-2/640/480',
    alt: 'Modern living room with large windows',
  },
  {
    title: 'Sunset Ridge House',
    price: '$2,800',
    oldPrice: '$720,000',
    location: '910 Oakwood Lane, Austin, USA',
    beds: 4,
    baths: 3,
    sqft: '2,450 sqft',
    image: 'https://picsum.photos/seed/keyhold-3/640/480',
    alt: 'Bright open-plan kitchen with island',
  },
  {
    title: 'Maple Court Villa',
    price: '$3,450',
    oldPrice: '$950,000',
    location: '66 Maple Court, Denver, USA',
    beds: 5,
    baths: 4,
    sqft: '3,120 sqft',
    image: 'https://picsum.photos/seed/keyhold-4/640/480',
    alt: 'Cozy bedroom with soft natural light',
  },
] as const

/**
 * FeaturedProperties — "Exclusive Offer For You" cards (source
 * `.property-wrap`): photo with an agent strip (avatar + name + Bookmark /
 * Compare buttons), old struck-through price + gold price with /mo, title,
 * location pin, and a beds/baths/sqft icon row. A gold circular link icon
 * appears over the photo on hover and the shadow deepens.
 */
export function FeaturedProperties() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading subheading="What we offer" title="Exclusive Offer For You" />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.title}
              className="group relative overflow-hidden rounded-[3px] bg-white shadow-[0_5px_21px_-14px_rgba(0,0,0,0.14)] transition-shadow duration-300 hover:shadow-[0_5px_39px_-14px_rgba(0,0,0,0.26)]"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                {/* Agent strip over the photo bottom */}
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-white/95 px-3 py-2">
                  <img
                    src="https://picsum.photos/seed/keyhold-agent/64/64"
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold text-ink">Ben Ford</span>
                  <span className="ml-auto flex items-center gap-1">
                    <button
                      type="button"
                      aria-label="Save property"
                      className="rounded-full p-1.5 text-soft transition-colors hover:text-brand"
                    >
                      <Heart className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label="Compare property"
                      className="rounded-full p-1.5 text-soft transition-colors hover:text-brand"
                    >
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </span>
                </div>
                {/* Hover link circle */}
                <a
                  href="#listing"
                  aria-label="View property"
                  className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>

              <div className="p-5">
                <p className="flex items-baseline gap-2">
                  <s className="text-sm text-muted">{property.oldPrice}</s>
                  <span className="text-xl font-bold text-brand">
                    {property.price} <small className="text-sm font-normal">/mo</small>
                  </span>
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{property.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {property.location}
                </p>
                <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4 text-sm text-soft">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-brand" aria-hidden="true" />
                    {property.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-brand" aria-hidden="true" />
                    {property.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler className="h-4 w-4 text-brand" aria-hidden="true" />
                    {property.sqft}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
