import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function SearchBar() {
  const [what, setWhat] = useState('')
  const [where, setWhere] = useState('1 adult')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[860px] items-stretch overflow-hidden rounded bg-white shadow-lg"
    >
      {/* What field */}
      <div className="flex flex-1 flex-col justify-center border-r border-gray-200 px-6 py-3">
        <label
          htmlFor="what"
          className="text-[11px] font-bold uppercase tracking-wide text-scanbar-muted"
        >
          What
        </label>
        <input
          id="what"
          type="text"
          placeholder="ex: food, service, bar, hotel"
          value={what}
          onChange={(e) => setWhat(e.target.value)}
          className="w-full border-0 bg-transparent py-1 text-[15px] text-scanbar-text outline-none placeholder:text-scanbar-placeholder"
        />
      </div>

      {/* Where field */}
      <div className="flex flex-col justify-center px-6 py-3">
        <label
          htmlFor="where"
          className="text-[11px] font-bold uppercase tracking-wide text-scanbar-muted"
        >
          Where
        </label>
        <select
          id="where"
          value={where}
          onChange={(e) => setWhere(e.target.value)}
          className="w-full border-0 bg-transparent py-1 text-[15px] text-scanbar-text outline-none"
        >
          <option value="1 adult">1 adult</option>
          <option value="2 adults">2 adults</option>
          <option value="3 adults">3 adults</option>
          <option value="4 adults">4 adults</option>
        </select>
      </div>

      {/* Search button */}
      <button
        type="submit"
        className={cn(
          'flex items-center gap-2 bg-scanbar-coral px-8 text-[15px] font-bold uppercase text-white',
          'cursor-pointer transition-colors duration-200 hover:bg-scanbar-coral-hover',
        )}
        aria-label="Search"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        Search
      </button>
    </form>
  )
}
