export function ShopByGender() {
  return (
    <section className="py-12 md:py-16 bg-white" aria-label="Shop by gender">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="#men"
            className="group relative block h-80 md:h-96 overflow-hidden"
            aria-label="Shop Men's Collection"
          >
            <img
              src="https://picsum.photos/seed/kicks-men/800/600"
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-heading text-3xl md:text-4xl text-white font-bold mb-2">
                  Shop Men&rsquo;s Collection
                </h3>
                <span className="text-white/80 text-sm uppercase tracking-wider">Explore Now</span>
              </div>
            </div>
          </a>

          <a
            href="#women"
            className="group relative block h-80 md:h-96 overflow-hidden"
            aria-label="Shop Women's Collection"
          >
            <img
              src="https://picsum.photos/seed/kicks-women/800/600"
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-heading text-3xl md:text-4xl text-white font-bold mb-2">
                  Shop Women&rsquo;s Collection
                </h3>
                <span className="text-white/80 text-sm uppercase tracking-wider">Explore Now</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
