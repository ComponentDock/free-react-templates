import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Navbar() {
  const [query, setQuery] = useState('')

  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <a href="/" className="text-xl font-semibold text-brand no-underline">
        FindBox
      </a>
      <form onSubmit={handleSubmit} className="flex items-center gap-2" role="search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter keyword and hit enter..."
          aria-label="Search keyword"
          className="w-72 rounded border border-gray-300 px-4 py-2 text-sm text-gray-700 outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded bg-brand text-white transition-colors hover:bg-brand-dark"
        >
          <Search className="h-5 w-5" />
        </button>
      </form>
    </nav>
  )
}
