import { X } from 'lucide-react'

export interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  if (!isOpen) return null

  return (
    <div
      className="absolute left-0 top-0 z-[99999] w-full overflow-auto bg-search-bg"
      style={{ minHeight: '150px' }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="absolute right-5 top-5 z-10 cursor-pointer bg-transparent text-xl text-black hover:text-brand"
      >
        <X size={20} strokeWidth={2} />
      </button>
      <div
        className="mx-auto flex max-w-6xl items-center justify-center px-4"
        style={{ minHeight: '150px' }}
      >
        <div className="w-full max-w-2xl">
          <form
            aria-label="Search"
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="flex"
          >
            <button
              type="submit"
              className="border border-brand bg-brand px-6 py-2 text-sm text-white hover:bg-brand-hover"
            >
              Search
            </button>
            <input
              type="search"
              placeholder="Search..."
              className="flex-1 border border-border bg-white px-3 py-2 text-sm text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
