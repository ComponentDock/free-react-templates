const classes = [
  {
    name: 'Ashtanga Foundations',
    price: '$29.99',
    image: 'https://picsum.photos/seed/asana-class1/600/400',
  },
  {
    name: 'Surya Vinyasa',
    price: '$32.99',
    image: 'https://picsum.photos/seed/asana-class2/600/400',
  },
  {
    name: 'Chandra Vinyasa',
    price: '$22.99',
    image: 'https://picsum.photos/seed/asana-class3/600/400',
  },
  {
    name: 'Yinyasa',
    price: '$34.99',
    image: 'https://picsum.photos/seed/asana-class4/600/400',
  },
]

export function FeaturedClasses() {
  return (
    <section id="classes" className="py-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Featured Classes</h2>
            <p className="text-gray-500 leading-relaxed">
              Explore our most popular yoga sessions led by experienced instructors. Each class is
              designed to nurture your practice and deepen your connection to body and breath.
            </p>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              className="px-5 py-2 border-2 border-brand-500 text-brand-500 font-semibold hover:bg-brand-500 hover:text-white transition-colors"
              aria-label="Previous classes"
            >
              Previous
            </button>
            <button
              className="px-5 py-2 border-2 border-brand-500 text-brand-500 font-semibold hover:bg-brand-500 hover:text-white transition-colors"
              aria-label="Next classes"
            >
              Next
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls) => (
            <a key={cls.name} href="#" className="group relative block overflow-hidden rounded-lg">
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white/80 text-sm font-medium">{cls.price}</span>
                <h3 className="text-white text-lg font-bold">{cls.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
