import { useEffect, useRef } from 'react'

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
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-label="Search"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute right-8 top-8 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#333] text-white transition-colors hover:bg-gray-700"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="w-full max-w-xl px-8"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search here..."
          className="w-full border-b-2 border-white bg-transparent pb-4 text-[40px] font-bold text-white placeholder-gray-500 outline-none"
        />
      </form>
    </div>
  )
}
