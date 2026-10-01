import { SquarePen } from 'lucide-react'

export interface EditButtonProps {
  invoice: string
}

export function EditButton({ invoice }: EditButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Edit invoice ${invoice}`}
      className="inline-flex items-center justify-center text-white transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none"
    >
      <SquarePen className="h-[1em] w-[1em]" aria-hidden="true" />
    </button>
  )
}
