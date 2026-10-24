import { MapPin } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { specIcons } from '../icons'
import {
  image,
  propertiesHeading,
  propertiesSubtext,
  propertyAddress,
  propertyLoop,
  propertySpecs,
} from '../data'

/** Black Latest Properties band: three unique listings repeated once (six cards). */
export function Properties() {
  return (
    <section id="properties" className="bg-black py-12 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-10 max-w-[560px] text-center">
          <SectionHeading tone="light" align="center">
            {propertiesHeading}
          </SectionHeading>
          <p className="mt-5 text-white">{propertiesSubtext}</p>
        </div>

        <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {propertyLoop.map((property, index) => (
            <li
              key={`${property.seed}-${index}`}
              className="min-w-[290px] flex-1 snap-start"
              data-testid="property-card"
            >
              <a href="#properties" className="block">
                <img
                  src={image(property.seed, 600, 420)}
                  alt={`Listing at ${property.price}`}
                  className="h-[220px] w-full object-cover"
                  loading="lazy"
                />
              </a>
              <div className="bg-panel p-8 text-white">
                <div className="mb-6 flex items-center justify-between text-[13px]">
                  {propertySpecs.map((spec) => {
                    const Icon = specIcons[spec.icon]
                    return (
                      <span key={`${property.seed}-${spec.icon}`} className="flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        {spec.value}
                      </span>
                    )
                  })}
                </div>
                <h3 className="mb-3 text-[1.75rem] leading-tight">
                  <a href="#properties" className="text-white transition-colors hover:text-brand">
                    {property.price}
                  </a>
                </h3>
                <p className="flex items-center gap-3 text-[13px] text-white/70">
                  <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  <span>{propertyAddress}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
