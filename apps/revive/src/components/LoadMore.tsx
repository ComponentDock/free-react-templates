import { ChevronDown } from 'lucide-react'

export function LoadMore() {
  return (
    <div className="py-[50px] text-center">
      <button
        type="button"
        className="inline-flex h-[85px] w-[85px] cursor-pointer items-center justify-center border-none bg-transparent opacity-100 transition-opacity hover:opacity-50"
        aria-label="Load more"
      >
        <ChevronDown size={48} className="text-text-muted" />
      </button>
    </div>
  )
}
