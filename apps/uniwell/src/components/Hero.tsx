import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  'Category Courses',
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Business',
]

const priceTypes = ['Select Price Type', 'Free', 'Paid', 'Subscription']

export function Hero() {
  return (
    <section
      className="relative flex min-h-[520px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/uniwell-hero/1920/800)',
      }}
      aria-label="Hero section"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white font-display md:text-5xl lg:text-6xl">
          The Premium System Education
        </h1>
        <p className="mb-10 text-lg text-white/80 md:text-xl">Future Of Education Technology</p>

        {/* Search bar */}
        <form
          className="mx-auto flex max-w-3xl flex-col gap-3 rounded bg-white p-3 shadow-lg sm:flex-row"
          role="search"
          aria-label="Course search"
        >
          <input
            type="text"
            placeholder="Keyword Search"
            className="flex-1 rounded border border-gray-200 px-4 py-3 text-sm text-charcoal placeholder:text-smoke focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
            aria-label="Keyword search"
          />

          <div className="relative flex-1">
            <select
              className="w-full appearance-none rounded border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-charcoal focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              aria-label="Category"
              defaultValue=""
            >
              <option value="" disabled>
                Category Courses
              </option>
              {categories.slice(1).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-smoke"
            />
          </div>

          <div className="relative flex-1">
            <select
              className="w-full appearance-none rounded border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-charcoal focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              aria-label="Price type"
              defaultValue=""
            >
              <option value="" disabled>
                Select Price Type
              </option>
              {priceTypes.slice(1).map((pt) => (
                <option key={pt} value={pt}>
                  {pt}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-smoke"
            />
          </div>

          <button
            type="submit"
            className="rounded bg-primary-400 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-primary-500 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Carousel arrows (decorative, non-functional) */}
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm hover:bg-white/50 transition-colors hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm hover:bg-white/50 transition-colors hidden md:block"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}
