import { useState, type FormEvent, type KeyboardEvent } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
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
      className="flex items-center h-14 max-w-[500px] w-[90%] mx-auto rounded-full border-2 border-[#d0e3f7] bg-white overflow-hidden"
      role="search"
      aria-label="Search form"
    >
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-6 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none h-full"
        aria-label="Search input"
      />
      <button
        type="submit"
        className="bg-[#4a8cf7] text-white px-6 py-2 rounded-full text-sm font-medium mr-1 hover:bg-[#3a7ce6] transition-colors whitespace-nowrap"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  )
}
