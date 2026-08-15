import { properties } from '../data'

export function Properties() {
  return (
    <section id="properties-section" aria-label="Properties" className="py-24">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <a key={property.image} href="#" className="group relative block">
              <div
                className="absolute -bottom-5 -right-5 hidden h-full w-full border-2 border-black transition-transform duration-300 group-hover:block"
                aria-hidden="true"
              />
              <div className="relative bg-white transition-transform duration-300 group-hover:translate-x-[45px]">
                <div className="overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-light uppercase text-black transition-colors duration-300 group-hover:text-white">
                    {property.title}
                  </h3>
                  <p className="mt-1 text-sm text-body transition-colors duration-300 group-hover:text-card-hover">
                    {property.location}
                  </p>
                  <strong className="mt-1 block font-normal text-black transition-colors duration-300 group-hover:text-card-hover">
                    {property.price}
                  </strong>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
