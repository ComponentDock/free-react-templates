import { useRef, useEffect } from 'react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="w-full max-w-xl px-8">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type here to search"
        className="w-full border-b border-input-border bg-transparent py-3 text-base text-input-text placeholder-input-placeholder outline-none font-sans"
        aria-label="Search input"
      />
    </div>
  )
}
