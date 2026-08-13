import { useState, type FormEvent } from 'react'
import { MapPin } from 'lucide-react'
import { hero } from '../data'

/** Full hero over a city photo with a dark overlay: a location pin, a huge
 *  white city heading, and a translucent search panel with category +
 *  location dropdowns and a pink "Search Now" button. */
export function Hero() {
  const [searched, setSearched] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearched(true)
  }

  return (
    <section id="home" aria-label="Hero" className="relative flex min-h-[700px] items-end">
      <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-40 text-center">
        <MapPin className="mx-auto h-10 w-10 text-white" strokeWidth={1.5} />
        <h1 className="mt-2 text-6xl font-black text-white md:text-[96px] md:leading-none">
          {hero.city}
        </h1>

        {searched ? (
          <p
            role="status"
            className="mx-auto mt-10 max-w-xl bg-white/15 px-6 py-5 text-lg text-white"
          >
            {hero.successMessage}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative mx-auto mt-8 max-w-4xl px-8 pb-8 pt-5"
            aria-label="Search listings"
          >
            <div className="absolute inset-0 bg-white/45" />
            <div className="relative z-10 flex flex-col items-stretch gap-6 md:flex-row">
              <div className="flex-1 text-left">
                <label
                  htmlFor="hoodly-category"
                  className="mb-3 block text-lg font-black text-white"
                >
                  Search Category
                </label>
                <select
                  id="hoodly-category"
                  name="category"
                  className="h-[50px] w-full border-0 bg-transparent pl-8 text-base text-white [&>option]:bg-dark [&>option]:text-white"
                >
                  {hero.categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 text-left">
                <label
                  htmlFor="hoodly-location"
                  className="mb-3 block text-lg font-black text-white"
                >
                  Your Location
                </label>
                <select
                  id="hoodly-location"
                  name="location"
                  className="h-[50px] w-full border-0 bg-transparent pl-8 text-base text-white [&>option]:bg-dark [&>option]:text-white"
                >
                  {hero.locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="self-end border border-brand bg-brand px-12 py-3 text-base text-white transition-colors hover:bg-transparent hover:text-brand md:absolute md:right-8 md:top-14"
              >
                {hero.searchLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
