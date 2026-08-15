import { Star } from 'lucide-react'
import {
  morePlacesHref,
  morePlacesLabel,
  places,
  placesSectionText,
  placesSectionTitle,
} from '../data'

export function Places() {
  return (
    <section id="places" className="bg-soft py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-14 text-center">
          <h2 className="pb-2 font-sans text-[38px] font-normal text-navy">{placesSectionTitle}</h2>
          <p className="mx-auto max-w-2xl font-sans text-base leading-7 text-muted">
            {placesSectionText}
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <li key={place.name}>
              <article className="group overflow-hidden rounded-md bg-white transition-shadow hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                <div className="relative">
                  <img src={place.image} alt={place.name} className="h-60 w-full object-cover" />
                  <span className="absolute left-5 top-5 rounded-full bg-teal px-4 pb-1 pt-1.5 font-sans text-base text-white">
                    {place.price}
                  </span>
                </div>
                <div className="px-5 pb-6 pt-7">
                  <h3 className="font-sans text-[22px] text-navy transition-colors group-hover:text-coral">
                    {place.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-muted">{place.country}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1" aria-label={`${place.name} rating`}>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-3 w-3 fill-star text-star"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ml-1 font-sans text-sm text-muted">{place.review}</span>
                    </span>
                    <span className="font-sans text-sm text-muted">{place.days}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-14 text-center">
          <a
            href={morePlacesHref}
            className="inline-block rounded-md bg-coral px-10 py-[13px] font-sans text-base font-medium capitalize text-white transition-colors hover:bg-teal"
          >
            {morePlacesLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
