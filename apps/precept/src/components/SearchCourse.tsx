import { Search } from 'lucide-react'
import { useState } from 'react'

export function SearchCourse() {
  const [query, setQuery] = useState('')

  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/precept-search/1920/500')" }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Search For Available Courses
        </h1>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          It is critical to find the right course for your career. Search from our catalog.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto flex">
          <input
            type="text"
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 text-sm border-none outline-none"
            aria-label="Search courses"
          />
          <button
            type="submit"
            className="bg-brand text-white px-6 py-3 hover:bg-brand-light transition-colors"
            aria-label="Submit search"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  )
}
