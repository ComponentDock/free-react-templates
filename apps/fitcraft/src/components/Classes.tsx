const CLASSES = [
  {
    title: 'Weightlifting',
    category: 'Strength',
    image: 'https://picsum.photos/seed/fitcraft-class1/400/300',
  },
  {
    title: 'Indoor cycling',
    category: 'Cardio',
    image: 'https://picsum.photos/seed/fitcraft-class2/400/300',
  },
  {
    title: 'Kettlebell power',
    category: 'Strength',
    image: 'https://picsum.photos/seed/fitcraft-class3/400/300',
  },
  {
    title: 'Indoor cycling',
    category: 'Cardio',
    image: 'https://picsum.photos/seed/fitcraft-class4/400/300',
  },
  {
    title: 'Boxing',
    category: 'Training',
    image: 'https://picsum.photos/seed/fitcraft-class5/400/300',
  },
]

export function Classes() {
  return (
    <section id="classes" className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 font-[Muli] text-sm font-semibold uppercase tracking-[3px] text-primary-400">
            Our Classes
          </p>
          <h2 className="font-[Oswald] text-3xl font-bold uppercase text-ink md:text-4xl">
            What we can offer
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CLASSES.map((cls) => (
            <div
              key={`${cls.title}-${cls.category}`}
              className="group relative overflow-hidden rounded-sm"
            >
              <img
                src={cls.image}
                alt={cls.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-ink/80 to-transparent p-4">
                <h3 className="mb-1 font-[Oswald] text-lg font-semibold uppercase text-white">
                  {cls.title}
                </h3>
                <span className="font-[Muli] text-xs font-semibold uppercase tracking-wider text-primary-400">
                  {cls.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
