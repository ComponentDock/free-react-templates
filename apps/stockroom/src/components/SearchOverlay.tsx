import { Search, X } from 'lucide-react'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-search-bg">
      <button
        type="button"
        aria-label="Close search"
        className="absolute top-8 right-8 text-3xl text-body transition-colors hover:text-dark"
        onClick={onClose}
      >
        <X size={28} />
      </button>
      <form
        className="flex w-full max-w-lg items-center gap-2 px-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          placeholder="Type your keyword..."
          className="h-14 flex-1 border-b-2 border-body/30 bg-transparent px-4 text-lg text-dark outline-none focus:border-brand"
          autoFocus
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex h-14 w-14 items-center justify-center bg-brand text-white transition-colors hover:bg-brand-hover"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  )
}
