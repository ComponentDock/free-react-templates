const BRANDS = ['Dell', 'HP', 'Apple', 'Samsung', 'Lenovo']

export function Brands() {
  return (
    <section className="py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {BRANDS.map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-bold text-[#222] tracking-wider">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
