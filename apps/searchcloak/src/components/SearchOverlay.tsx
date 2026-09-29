import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <div
      className={`absolute inset-0 z-40 flex items-center bg-white transition-all duration-300 ease-in-out ${
        isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type keyword and hit enter..."
          className="h-[50px] w-full border-none bg-transparent pl-5 text-lg text-[#212529] outline-none placeholder:text-[#999]"
          aria-label="Search"
        />
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent p-5 text-[#ccc] transition-colors duration-300 hover:text-[#000] sm:right-6 lg:right-8"
      >
        <X size={24} />
      </button>
    </div>
  )
}
