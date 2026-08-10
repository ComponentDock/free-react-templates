import { cn } from '@free-react-templates/ui'
import { imgUrl, placeCards, readMoreLabel } from '../data'

export function PlacesGrid() {
  return (
    <section aria-label="Different places" className="bg-white py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-[50px] max-w-[510px] font-display text-5xl leading-tight font-bold text-ink">
          Let Us Find Your Places Within a Sec.
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {placeCards.map((place) => (
            <article key={place.seed} className={cn('text-center', place.offset)}>
              <div className="group relative overflow-hidden bg-ink">
                <img
                  src={imgUrl(place.seed, 600, 450)}
                  alt=""
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                  <h3 className="px-4 font-display text-2xl font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {place.title}
                  </h3>
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                <a
                  href="#"
                  className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {place.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{place.excerpt}</p>
              <a
                href="#"
                className="mt-3 inline-block text-[15px] font-medium text-ink transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {readMoreLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
