const classes = [
  {
    name: 'Body Building',
    price: '$30.99',
    image: 'https://picsum.photos/seed/ironpeak-class1/400/400',
  },
  {
    name: 'Yoga Pilates',
    price: '$30.99',
    image: 'https://picsum.photos/seed/ironpeak-class2/400/400',
  },
  {
    name: 'Cardio Blast',
    price: '$30.99',
    image: 'https://picsum.photos/seed/ironpeak-class3/400/400',
  },
  {
    name: 'Power Lift',
    price: '$30.99',
    image: 'https://picsum.photos/seed/ironpeak-class4/400/400',
  },
]

export function FeaturedClasses() {
  return (
    <section id="classes" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-ink">
          Featured Classes
        </h2>
        <span className="text-6xl font-extrabold uppercase tracking-wider text-gray-100">
          The Classes
        </span>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4 sm:px-6 lg:px-8">
        {classes.map((cls) => (
          <a key={cls.name} href="#" className="group relative block overflow-hidden">
            <img
              src={cls.image}
              alt={cls.name}
              className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-sm font-bold uppercase text-brand">{cls.price}</p>
              <h3 className="text-lg font-bold text-white">{cls.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
