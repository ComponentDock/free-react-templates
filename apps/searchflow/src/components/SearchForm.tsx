import { useState, type FormEvent, type KeyboardEvent } from 'react'

interface SearchFormProps {
  onSearch: (query: string) => void
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSearch(inputValue.trim())
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e as unknown as FormEvent)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center h-11 max-w-[600px] w-full rounded border border-[#e0e0e0] bg-white overflow-hidden"
      role="search"
      aria-label="Search form"
    >
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 text-sm text-[#333333] placeholder-[#999999] bg-transparent outline-none h-full"
        aria-label="Search input"
      />
      <button
        type="submit"
        className="bg-[#4a8cf7] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#3a7ce6] transition-colors whitespace-nowrap h-full"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  )
}
