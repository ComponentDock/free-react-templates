export function Categories() {
  return (
    <section className="py-16" data-testid="categories">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large hero card */}
          <div className="md:row-span-2 relative rounded-lg overflow-hidden group">
            <img
              src="https://picsum.photos/seed/greenplate-veg-hero/600/600"
              alt="Vegetables"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <span className="text-white text-2xl font-bold font-serif">Vegetables</span>
            </div>
          </div>

          {/* Top row: Fruits */}
          <div className="relative rounded-lg overflow-hidden group h-[200px]">
            <img
              src="https://picsum.photos/seed/greenplate-fruits/400/300"
              alt="Fruits"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <span className="text-white text-xl font-bold font-serif">Fruits</span>
            </div>
          </div>

          {/* Top row: Vegetables small */}
          <div className="relative rounded-lg overflow-hidden group h-[200px]">
            <img
              src="https://picsum.photos/seed/greenplate-veg-small/400/300"
              alt="Vegetables"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <span className="text-white text-xl font-bold font-serif">Vegetables</span>
            </div>
          </div>

          {/* Bottom row: Juices */}
          <div className="relative rounded-lg overflow-hidden group h-[200px]">
            <img
              src="https://picsum.photos/seed/greenplate-juices/400/300"
              alt="Juices"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <span className="text-white text-xl font-bold font-serif">Juices</span>
            </div>
          </div>

          {/* Bottom row: Dried */}
          <div className="relative rounded-lg overflow-hidden group h-[200px]">
            <img
              src="https://picsum.photos/seed/greenplate-dried/400/300"
              alt="Dried"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <span className="text-white text-xl font-bold font-serif">Dried</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
