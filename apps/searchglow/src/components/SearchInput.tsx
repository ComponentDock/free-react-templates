import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function SearchInput({
  placeholder = 'What are you looking for?',
  value = '',
  onChange,
  onKeyDown,
}: SearchInputProps) {
  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-label="Search"
        className="absolute left-0 top-0 flex h-full w-[70px] cursor-pointer items-center justify-center border-0 bg-transparent md:w-[70px]"
      >
        <Search
          className="h-[36px] w-[36px] text-white md:h-[50px] md:w-[50px]"
          strokeWidth={1.5}
        />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={onKeyDown}
        aria-label="Search"
        className={cn(
          'h-[50px] w-full border-0 border-b-2 border-b-white/50 bg-transparent pl-[45px] pr-4 font-sans text-base text-white outline-none transition-all duration-200 placeholder:text-white/70',
          'focus:border-b-white focus:shadow-none focus:outline-none',
          'hover:border-b-white',
          'md:h-[80px] md:pl-[70px] md:pr-8 md:text-lg',
        )}
      />
    </div>
  )
}
