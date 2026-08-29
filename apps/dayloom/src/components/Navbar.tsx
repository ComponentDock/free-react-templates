import { useState } from 'react'
import { Search, Calendar as CalendarIcon, Menu } from 'lucide-react'

interface NavbarProps {
  currentView: 'month' | 'week' | 'day'
  onViewChange: (view: 'month' | 'week' | 'day') => void
  onSearch: (query: string) => void
}

export function Navbar({ currentView, onViewChange, onSearch }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6 shadow-xs">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
          <CalendarIcon size={20} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Dayloom</h1>
      </div>

      <div className="hidden md:flex items-center gap-1 rounded-lg bg-slate-100 p-1">
        {(['month', 'week', 'day'] as const).map((view) => (
          <button
            key={view}
            onClick={() => onViewChange(view)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium capitalize transition-all ${
              currentView === view
                ? 'bg-white text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {view}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              onSearch(e.target.value)
            }}
            className="h-10 w-64 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden"
          />
        </div>
        <button
          aria-label="Mobile menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
