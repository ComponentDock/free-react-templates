import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { CategoryDropdown } from './CategoryDropdown'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function QuestBar() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All Product')

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[500px] items-stretch overflow-hidden rounded shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
    >
      <CategoryDropdown selected={category} onSelect={setCategory} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        aria-label="Search"
      />
      <button
        type="submit"
        className="flex items-center justify-center bg-brand-400 px-4 py-3 text-white transition-colors hover:bg-brand-500"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  )
}
