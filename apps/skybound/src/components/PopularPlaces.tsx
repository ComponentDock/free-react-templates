import { MapPin } from 'lucide-react'
import { POPULAR } from '../data/content'

export function PopularPlaces() {
  const [primary, secondary, tertiary] = POPULAR.images

  return (
    <section id="popular" className="section-gap bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10">
        <div className="relative h-[420px] sm:h-[520px]">
          <img
            src={primary.src}
            alt={primary.alt}
            className="absolute left-0 top-0 h-[78%] w-[78%] object-cover"
          />
          <img
            src={secondary.src}
            alt={secondary.alt}
            className="absolute right-0 top-[30%] h-[44%] w-[44%] object-cover shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          />
          <img
            src={tertiary.src}
            alt={tertiary.alt}
            className="absolute bottom-0 left-[22%] h-[38%] w-[44%] object-cover shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          />
        </div>

        <div>
          <h1 className="section-title">
            {POPULAR.titleFirst}
            <br />
            {POPULAR.titleSecond}
          </h1>
          <p className="mb-12 max-w-xl">{POPULAR.text}</p>

          <div className="counter-grid">
            {POPULAR.destinations.map(({ place, count }) => (
              <article key={place} className="counter-card">
                <MapPin aria-hidden="true" className="h-8 w-8 text-azure" />
                <h4 className="text-2xl">{place}</h4>
                <p>{count}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
