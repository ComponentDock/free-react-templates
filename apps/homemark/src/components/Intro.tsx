import { introHouses } from '../data'

/** "Our Houses" section with two alternating image+text rows. */
export function Intro() {
  return (
    <section className="bg-white py-20" data-testid="intro">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy">Our Houses</h2>

        {introHouses.map((house, i) => (
          <div
            key={house.title}
            className={`mb-12 flex flex-col gap-8 ${
              i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Image */}
            <div className="md:w-2/3">
              <h4 className="mb-3 text-lg font-bold text-navy">{house.title}</h4>
              <img
                src={house.image}
                alt={house.title}
                className="h-80 w-full rounded object-cover"
                loading="lazy"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-end md:w-1/3">
              <p className="mb-4 text-sm leading-relaxed text-body">{house.text}</p>
              <a
                href="#"
                className="inline-block rounded-full border-2 border-brand px-6 py-3 text-center text-sm font-bold uppercase text-brand transition-colors hover:bg-brand hover:text-white"
              >
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
