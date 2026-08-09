import { ButtonLink } from '@free-react-templates/ui'

const cars = [
  { brand: 'Audi' },
  { brand: 'Ford' },
  { brand: 'Mercedes' },
  { brand: 'BMW' },
  { brand: 'Toyota' },
  { brand: 'Honda' },
  { brand: 'Chevrolet' },
  { brand: 'Nissan' },
] as const

export function Cars() {
  return (
    <section id="cars" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            What we offer
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Choose Your Car
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car, index) => (
            <article
              key={car.brand}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="relative h-44 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://picsum.photos/seed/roadly-car-${index + 1}/600/400')`,
                }}
              >
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-coal/70 px-4 py-3 text-white">
                  <span className="text-2xl font-extrabold text-brand">$25</span>
                  <p className="text-sm text-white/80">From /Day</p>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-bold text-ink">
                  <a href="#cars" className="transition-colors hover:text-brand">
                    Mercedes Grand Sedan
                  </a>
                </h3>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-mist">
                  {car.brand}
                </span>
                <div className="mt-4 flex justify-center gap-2">
                  <ButtonLink
                    href="#cars"
                    variant="outline"
                    size="sm"
                    className="border-coal/20 text-coal hover:bg-coal hover:text-white"
                  >
                    Book now
                  </ButtonLink>
                  <ButtonLink
                    href="#cars"
                    variant="outline"
                    size="sm"
                    className="border-coal/20 text-coal hover:bg-coal hover:text-white"
                  >
                    Details
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
