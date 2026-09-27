import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const slides = ['Find Your Dream Home', 'Find Your Perfect House', 'Find Your Ideal Property']

const cities = ['All Cities', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']
const categories = ['All Categories', 'Apartment', 'House', 'Villa', 'Farm', 'Store']
const offers = ['All Offers', 'For Sale', 'For Rent', 'For Lease']
const listings = ['All Listings', 'Listings 1', 'Listings 2', 'Listings 3']
const bedrooms = ['Bedrooms', '1', '2', '3', '4', '5+']
const bathrooms = ['Bathrooms', '1', '2', '3', '4', '5+']

export function Hero() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-[600px] bg-gray-900">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/sundale-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl">
            {slides[slideIndex]}
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Suspendisse dictum enim sit amet libero malesuada feugiat. Pellentesque sollicitudin,
            tellus vitae.
          </p>
        </div>
      </div>

      {/* Search form */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="rounded bg-white p-6 shadow-xl">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Search for your home</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              <input
                type="text"
                placeholder="Keyword"
                className="rounded border border-gray-200 px-4 py-3 text-sm text-gray-600 focus:border-tan-500 focus:outline-none focus:ring-1 focus:ring-tan-500"
              />
              <SelectField options={cities} />
              <SelectField options={categories} />
              <SelectField options={offers} />
              <SelectField options={listings} />
              <SelectField options={bedrooms} />
              <SelectField options={bathrooms} />
            </div>
            <button
              type="submit"
              className="mt-4 rounded bg-tan-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-tan-600"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function SelectField({ options }: { options: string[] }) {
  return (
    <div className="relative">
      <select className="w-full appearance-none rounded border border-gray-200 bg-white px-4 py-3 pr-8 text-sm text-gray-600 focus:border-tan-500 focus:outline-none focus:ring-1 focus:ring-tan-500">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  )
}
