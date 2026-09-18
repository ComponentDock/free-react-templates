import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function SearchBar() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="rounded-lg shadow-xl p-8"
          style={{ backgroundColor: 'rgba(85, 64, 125, 0.67)' }}
        >
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Find your home</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row items-stretch gap-4"
          >
            <input
              type="text"
              placeholder="Property type"
              className="flex-1 px-4 py-3 rounded bg-white/90 text-brand-body placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <input
              type="text"
              placeholder="No rooms"
              className="flex-1 px-4 py-3 rounded bg-white/90 text-brand-body placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 px-4 py-3 rounded bg-white/90 text-brand-body placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <button
              type="submit"
              className={cn(
                'flex items-center justify-center gap-2 px-8 py-3 rounded',
                'bg-brand-green hover:bg-brand-green/90 text-white font-semibold uppercase tracking-wide transition-colors',
              )}
            >
              <Search size={18} />
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
