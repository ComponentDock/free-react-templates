import { categories } from '../data'

/* Reference: section.items-product1 — three square photo cards with a dark
   bottom gradient overlay (rgba(41,38,33,0) -> #292621, 40% height), a white
   title and "Shop Now" link at bottom 40px; cards scale to 1.02 on hover. */
export function CategoryCards() {
  return (
    <section aria-label="Shop by category" className="bg-white pb-[95px] pt-[30px]">
      <div className="mx-auto grid max-w-[1320px] gap-6 px-4 md:grid-cols-3">
        {categories.map((category) => (
          <a key={category.title} href="#trending" className="group relative block overflow-hidden">
            <img
              src={category.image}
              alt={category.alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-charcoal to-transparent" />
            <div className="absolute inset-x-0 bottom-10 text-center">
              <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
              <span className="mt-1 inline-block text-base font-light text-white underline-offset-4 group-hover:underline">
                Shop Now
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
