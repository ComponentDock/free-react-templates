import { X } from 'lucide-react'

interface CloseButtonProps {
  onClose: () => void
}

export function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute top-6 right-6 text-close-icon hover:opacity-60 transition-opacity p-1"
      aria-label="Close search"
    >
      <X size={24} strokeWidth={1.5} />
    </button>
  )
}
