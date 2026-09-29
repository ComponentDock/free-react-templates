import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSubmit?: () => void
}

export function SearchBar({
  placeholder = 'What are you looking for?',
  value = '',
  onChange,
  onSubmit,
}: SearchBarProps) {
  return (
    <div
      data-testid="search-card"
      className="overflow-hidden rounded-[34px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15)]"
    >
      <div className="flex">
        <div data-testid="input-area" className="flex flex-grow items-center bg-searchpea-mint">
          <div
            data-testid="icon-wrapper"
            className="flex min-w-[40px] items-center justify-center pl-2 md:min-w-[80px] md:pl-3"
          >
            <Search
              className="h-[26px] w-[26px] text-searchpea-icon md:h-[36px] md:w-[36px]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            aria-label="Search"
            className={cn(
              'h-[50px] flex-grow border-0 bg-transparent pr-4 font-sans text-base text-black outline-none placeholder:text-searchpea-icon/60',
              'md:h-[68px] md:text-base',
            )}
          />
        </div>
        <button
          type="submit"
          onClick={() => onSubmit?.()}
          className={cn(
            'min-w-[100px] cursor-pointer border-0 bg-searchpea-green px-6 font-sans text-[13px] font-light uppercase text-white transition-all duration-200 hover:bg-searchpea-green-dark',
            'md:min-w-[216px] md:px-8 md:text-base',
          )}
        >
          Search
        </button>
      </div>
    </div>
  )
}
