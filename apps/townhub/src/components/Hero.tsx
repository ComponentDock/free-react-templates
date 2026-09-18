import { ChevronDown } from 'lucide-react'
import { heroScriptText, heroHeading, searchPlaceholder, searchCategories } from '../data'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat pb-20 pt-32 lg:min-h-[700px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,1,2,0.45), rgba(0,1,2,0.45)), url(https://picsum.photos/seed/townhub-hero/1920/900)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Script accent */}
        <span className="mb-4 block font-script text-4xl text-accent md:text-5xl">
          {heroScriptText}
        </span>

        {/* Main heading */}
        <h1 className="mb-10 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          {heroHeading}
        </h1>

        {/* Search bar */}
        <form
          className="mx-auto flex max-w-3xl flex-col overflow-hidden rounded-full border-[6px] border-white/20 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          {/* Search input */}
          <div className="relative flex-1 border-b sm:border-b-0 sm:border-r border-white/20">
            <input
              type="text"
              placeholder={searchPlaceholder}
              aria-label="Search query"
              className="h-14 w-full bg-white px-6 text-[15px] text-body placeholder:text-muted focus:outline-none"
            />
          </div>

          {/* Category select */}
          <div className="relative border-b sm:border-b-0 sm:border-r border-white/20 sm:w-[200px]">
            <select
              aria-label="Category"
              className="h-14 w-full appearance-none bg-white px-5 pr-10 text-[15px] text-muted focus:outline-none"
            >
              {searchCategories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            />
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="h-14 bg-brand px-10 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
