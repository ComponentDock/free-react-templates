import { Search, MapPin, ChevronDown } from 'lucide-react'
import { useTypedText } from '../hooks/useTypedText'

const categories = [
  'All Categories',
  'Hotels',
  'Restaurants',
  'Events',
  'Fitness',
  'Shopping',
  'Other',
]

export function Hero() {
  const { typedText } = useTypedText()

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/locate-hero/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto flex min-h-[420px] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Find Nearby <span className="text-primary-400">{typedText}</span>
          <span className="animate-pulse">|</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200">
          Discover the best places, events, and experiences around you. From restaurants to hotels,
          find everything you need in one place.
        </p>

        <form
          className="flex w-full max-w-4xl flex-col gap-3 rounded bg-white p-3 shadow-lg sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-1 items-center gap-2 border-b border-gray-200 px-3 py-2 sm:border-b-0 sm:border-r">
            <Search size={18} className="shrink-0 text-gray-400" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
              aria-label="Search keyword"
            />
          </div>
          <div className="flex flex-1 items-center gap-2 border-b border-gray-200 px-3 py-2 sm:border-b-0 sm:border-r">
            <MapPin size={18} className="shrink-0 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
              aria-label="Location"
            />
          </div>
          <div className="relative flex flex-1 items-center gap-2 px-3 py-2">
            <ChevronDown size={18} className="pointer-events-none absolute right-3 text-gray-400" />
            <select
              className="w-full appearance-none bg-transparent text-sm text-gray-800 outline-none"
              aria-label="Category"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="rounded bg-primary-500 px-8 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
