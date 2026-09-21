const dishes = [
  {
    title: 'Birthday Catering',
    description:
      'Custom birthday catering services with a curated menu of appetizers, mains, and desserts tailored to your celebration.',
    image: 'https://picsum.photos/seed/zestly-dish1/400/300',
  },
  {
    title: 'Corporate Events',
    description:
      'Professional catering for corporate gatherings, conferences, and business meetings with elegant presentation.',
    image: 'https://picsum.photos/seed/zestly-dish2/400/300',
  },
  {
    title: 'Family Gatherings',
    description:
      'Warm and hearty meal packages designed for family reunions, holidays, and special occasions together.',
    image: 'https://picsum.photos/seed/zestly-dish3/400/300',
  },
]

export function Dishes() {
  return (
    <section id="dishes" className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {dishes.map((dish) => (
            <article key={dish.title} className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img src={dish.image} alt={dish.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="font-body text-xl font-bold text-body">{dish.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-secondary">
                {dish.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
