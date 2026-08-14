import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { hero, searchTabs } from '../data'

/** Full-height hero: background photo with a dark overlay, a charcoal search
 *  panel with five property-type radio tabs, a search input + red SEARCH
 *  button, and an italic disclaimer. */
export function Hero() {
  const [tab, setTab] = useState<(typeof searchTabs)[number]>('Buy')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[824px] items-center justify-center bg-cover bg-center pt-32"
      style={{ backgroundImage: `url(${hero.background})` }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-charcoal/83 px-6 py-8 shadow-xl sm:px-12 sm:py-10"
          aria-label="Property search"
        >
          <fieldset>
            <legend className="sr-only">Property type</legend>
            <div className="flex flex-wrap items-center gap-3">
              {searchTabs.map((item) => (
                <label
                  key={item}
                  className={cn(
                    'cursor-pointer px-3 py-2 font-heading text-base font-bold text-white transition-colors',
                    tab === item && 'bg-brand',
                  )}
                >
                  <input
                    type="radio"
                    name="search-type"
                    value={item}
                    checked={tab === item}
                    onChange={() => setTab(item)}
                    className="sr-only"
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder={hero.heading}
                className="h-[71px] w-full bg-white pl-12 pr-4 text-base italic text-input outline-none"
              />
            </div>
            <button
              type="submit"
              className="min-w-[156px] bg-brand px-8 py-5 font-heading text-base font-bold uppercase text-white transition-colors hover:bg-primary-700"
            >
              Search
            </button>
          </div>

          <p className="mt-4 text-xs italic text-muted">{hero.disclaimer}</p>
        </form>
      </div>
    </section>
  )
}
