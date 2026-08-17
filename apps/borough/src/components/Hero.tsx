import { ChevronDown, MapPin, Search } from 'lucide-react'
import {
  heroSubtitle,
  heroTitle,
  searchFieldPlaceholder,
  searchLocationPlaceholder,
  searchOptions,
} from '../data'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[750px] w-full items-center justify-center bg-cover bg-center py-24"
    >
      <img
        src="https://picsum.photos/seed/borough-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-[40px] font-bold leading-[1.2] text-white lg:text-[64px]">
          {heroTitle}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[16px] text-white/80">{heroSubtitle}</p>

        <form
          role="search"
          aria-label="Search listings"
          onSubmit={(event) => event.preventDefault()}
          className="mt-10 grid grid-cols-1 gap-y-4 rounded-[5px] bg-white p-4 text-left shadow-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:p-0"
        >
          <label className="flex items-center gap-3 px-4 py-4 lg:border-r lg:border-black/10">
            <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-neutral-400" />
            <span className="sr-only">What are you looking for?</span>
            <input
              type="text"
              placeholder={searchFieldPlaceholder}
              aria-label={searchFieldPlaceholder}
              className="w-full bg-transparent text-[14px] text-neutral-800 outline-none placeholder:text-black/40"
            />
          </label>

          <label className="flex items-center gap-3 px-4 py-4 lg:border-r lg:border-black/10">
            <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-neutral-400" />
            <span className="sr-only">Search Location</span>
            <input
              type="text"
              placeholder={searchLocationPlaceholder}
              aria-label={searchLocationPlaceholder}
              className="w-full bg-transparent text-[14px] text-neutral-800 outline-none placeholder:text-black/40"
            />
          </label>

          <label className="flex items-center gap-3 px-4 py-4 lg:border-r lg:border-black/10">
            <span className="sr-only">All Categories</span>
            <select
              aria-label="All Categories"
              defaultValue={searchOptions[0]}
              className="w-full cursor-pointer bg-transparent text-[14px] text-neutral-800 outline-none [&>option]:text-neutral-800"
            >
              {searchOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-neutral-400" />
          </label>

          <div className="flex items-stretch lg:p-3">
            <button
              type="submit"
              className="w-full rounded-[4px] bg-brand px-6 py-4 text-[16px] font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
