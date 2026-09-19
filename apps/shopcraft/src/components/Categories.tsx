export function Categories() {
  return (
    <section id="category" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-heading">Shop for Different Categories</h2>
          <p className="mt-2 text-body">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2 sm:row-span-2">
            <div className="group relative overflow-hidden">
              <img
                src="https://picsum.photos/seed/shopcraft-women/600/600"
                alt="Product for Women"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
              <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Product for Women
              </h3>
            </div>
          </div>
          <div>
            <div className="group relative overflow-hidden">
              <img
                src="https://picsum.photos/seed/shopcraft-couple/400/400"
                alt="Product for Couple"
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
              <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Product for Couple
              </h3>
            </div>
          </div>
          <div className="sm:col-span-1 sm:row-span-2">
            <div className="group relative overflow-hidden">
              <img
                src="https://picsum.photos/seed/shopcraft-men/400/800"
                alt="Product For Men"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                width={400}
                height={800}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
              <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Product For Men
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
