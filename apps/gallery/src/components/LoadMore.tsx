import { ArrowDown } from 'lucide-react'

export function LoadMore() {
  return (
    <div className="flex justify-center py-12">
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 text-muted transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand dark:hover:text-brand"
        aria-label="Load more"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </div>
  )
}
