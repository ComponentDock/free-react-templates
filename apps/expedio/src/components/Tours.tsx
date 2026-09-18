import { Clock } from 'lucide-react'

const tours = [
  {
    name: 'Paris Tour',
    duration: '5 days offer',
    price: '$65/day',
    seed: 'expedio-tour-1',
  },
  {
    name: 'Bali Escape',
    duration: '7 days offer',
    price: '$85/day',
    seed: 'expedio-tour-2',
  },
  {
    name: 'Tokyo Adventure',
    duration: '6 days offer',
    price: '$95/day',
    seed: 'expedio-tour-3',
  },
  {
    name: 'Santorini Retreat',
    duration: '4 days offer',
    price: '$110/day',
    seed: 'expedio-tour-4',
  },
]

export function Tours() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-32">
      <div className="mb-12 text-center lg:text-left">
        <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
          We offer worldwide tour plan recently
        </h2>
        <p className="mt-3 text-sm text-smoke">
          Make she&apos;d moved divided air. Whose tree that hath own upon them it multiply was
          blessed
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {tours.map((tour) => (
          <div key={tour.name} className="group relative overflow-hidden rounded-2xl">
            <img
              src={`https://picsum.photos/seed/${tour.seed}/700/400`}
              alt={tour.name}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{tour.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-300">
                    <Clock size={12} />
                    <span>{tour.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-display text-lg font-bold text-primary-400">
                    {tour.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
