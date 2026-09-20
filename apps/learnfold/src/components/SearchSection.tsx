import { useState } from 'react'
import { Search } from 'lucide-react'

export function SearchSection() {
  const [course, setCourse] = useState('')
  const [category, setCategory] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-brand py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">Search your course</h2>
        <form onSubmit={handleSearch} className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="flex-1 px-4 py-3 text-sm"
            aria-label="Course"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 px-4 py-3 text-sm"
            aria-label="Category"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-ink px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            <Search size={16} />
            Search Course
          </button>
        </form>
      </div>
    </section>
  )
}
