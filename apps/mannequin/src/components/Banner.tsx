import { bannerCards } from '../data'

/** Category banner: three image cards with a name + season label overlaid
 *  top-left; a periwinkle wash + "Shop Now" link reveal on hover. */
export function Banner() {
  return (
    <section className="bg-white px-6 pb-[50px] pt-20 lg:px-16">
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
        {bannerCards.map((card) => (
          <a
            key={card.name}
            href="#products"
            className="group relative block overflow-hidden border border-[#e6e6e6]"
          >
            <img
              src={card.image}
              alt={card.name}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand/0 transition-colors duration-300 group-hover:bg-brand/80">
              <div className="flex h-full flex-col justify-start p-[30px]">
                <span className="text-[28px] font-bold text-ink-soft">{card.name}</span>
                <span className="mt-1 text-[14px] text-[#555]">{card.info}</span>
                <span className="mt-3 inline-block w-fit translate-y-4 border-b-2 border-white pb-1 text-[15px] font-medium uppercase text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Shop Now
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
