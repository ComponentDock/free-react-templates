import { X } from 'lucide-react'

interface CloseButtonProps {
  onClose: () => void
}

export function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute top-5 right-5 text-[#999999] hover:text-[#333333] transition-colors p-1"
      aria-label="Close search overlay"
    >
      <X size={20} />
    </button>
  )
}
