import { Search, ChevronDown } from 'lucide-react'

const categories = ['WordPress', 'HTML/CSS', 'PHP', 'JavaScript', 'Python']
const difficulties = ['Beginner', 'Intermediate', 'Advance']

export function SearchBar() {
  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Keyword search"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="relative">
            <select className="w-full appearance-none border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-8">
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={16}
            />
          </div>

          <div className="relative">
            <select className="w-full appearance-none border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-8">
              <option>Difficulty</option>
              {difficulties.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={16}
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Search size={16} />
            Search course
          </button>
        </form>
      </div>
    </section>
  )
}
