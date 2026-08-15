import { featuredItems } from '../data'

export function FeaturedPromos() {
  return (
    <section id="featured-section" className="bg-paper px-6 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
        {featuredItems.map((item) => (
          <figure key={item.image} className="relative border-[3px] border-brand pb-10">
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="absolute -bottom-5 left-1/2 -translate-x-1/2">
              <a
                href={item.href}
                className="inline-flex min-w-[162px] items-center justify-center bg-brand px-8 py-5 text-sm font-semibold uppercase text-white transition-opacity hover:opacity-90"
              >
                {item.button}
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
