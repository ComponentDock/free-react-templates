import { Search } from 'lucide-react'
import { type FormEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center bg-dark-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light/95 to-brand/95" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          <span className="text-accent">1500+</span> Jobs posted last week
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-4 flex max-w-4xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 rounded px-4 py-3 text-sm text-gray-800"
            aria-label="Job search"
          />
          <select className="rounded px-4 py-3 text-sm text-gray-600" aria-label="Location">
            <option>Select area</option>
            <option>New York</option>
            <option>San Francisco</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
          </select>
          <select className="rounded px-4 py-3 text-sm text-gray-600" aria-label="Category">
            <option>All Category</option>
            <option>Medical</option>
            <option>Technology</option>
            <option>Government</option>
            <option>Development</option>
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            <Search size={16} />
            Search
          </button>
        </form>
        <p className="text-sm text-white/90">
          <span className="font-semibold">Search by tags:</span> Technology, Business, Consulting,
          IT Company, Design, Development
        </p>
      </div>
    </section>
  )
}
