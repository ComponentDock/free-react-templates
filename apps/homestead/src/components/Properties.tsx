import { ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from 'lucide-react'
import { properties } from '../data'
import { SectionHeading } from './SectionHeading'

/** Three property cards with photo, overlapping white text block and pink corner arrow. */
export function Properties() {
  return (
    <section id="properties" className="bg-white py-24">
      <div className="mx-auto max-w-[1250px] px-4">
        <SectionHeading label="What we offer" title="Exclusive Offer For You" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <article key={property.title} className="group mb-14">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.alt}
                  className="h-[250px] w-full object-cover"
                />
                <div className="relative -mt-12 ml-5 w-3/4 bg-white p-4 shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)] transition-shadow group-hover:shadow-[0px_5px_39px_-14px_rgba(0,0,0,0.26)]">
                  <p className="mb-2 text-base font-semibold text-ink">
                    <span className="mr-2 text-base font-normal text-black/60 line-through">
                      {property.oldPrice}
                    </span>
                    {property.price}
                    <span className="ml-1 text-sm text-black/40">{property.per}</span>
                  </p>
                  <ul className="mb-2 flex items-center gap-4 text-base text-ink">
                    <li className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4" aria-hidden="true" /> {property.beds}
                    </li>
                    <li className="flex items-center gap-1">
                      <Bath className="h-4 w-4" aria-hidden="true" /> {property.baths}
                    </li>
                    <li className="flex items-center gap-1">
                      <Ruler className="h-4 w-4" aria-hidden="true" /> {property.sqft} sqft
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-ink">{property.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-body">
                    <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                    {property.location}
                  </p>
                  <a
                    href="#contact"
                    aria-label={`View ${property.title}`}
                    className="absolute right-0 bottom-0 flex h-10 w-10 items-center justify-center rounded-[50%_0_0_0] bg-brand text-white transition-colors hover:bg-black"
                  >
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
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
