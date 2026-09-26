import { ArrowDown } from 'lucide-react'

export function LoadMore() {
  return (
    <div className="flex justify-center py-12">
      <button
        aria-label="Load more items"
        className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-white"
      >
        <ArrowDown size={20} className="transition-transform group-hover:translate-y-0.5" />
      </button>
    </div>
  )
}
