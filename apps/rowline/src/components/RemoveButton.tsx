import { X } from 'lucide-react'

interface RemoveButtonProps {
  onRemove: () => void
}

export function RemoveButton({ onRemove }: RemoveButtonProps) {
  return (
    <button
      type="button"
      aria-label="Close"
      onClick={onRemove}
      className="float-right appearance-none border-0 bg-transparent p-0 text-inherit opacity-50 transition-opacity hover:opacity-75 focus-visible:opacity-75"
    >
      <X aria-hidden="true" size={12} className="text-danger" />
    </button>
  )
}
