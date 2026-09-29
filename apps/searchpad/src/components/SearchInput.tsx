import { useState, useRef, type KeyboardEvent } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SearchInputProps {
  placeholder?: string
  variant?: 'round' | 'square'
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export function SearchInput({
  placeholder = 'Keyword',
  variant = 'round',
  onKeyDown,
}: SearchInputProps) {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClear = () => {
    setValue('')
    inputRef.current?.focus()
  }

  const isRound = variant === 'round'

  return (
    <div className="relative flex items-center justify-center">
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={onKeyDown}
        aria-label={placeholder}
        className={cn(
          'h-[60px] border-0 bg-searchpad-input-bg font-sans text-lg outline-none transition-[width,padding] duration-200',
          isRound ? 'rounded-full' : 'rounded-[3px]',
          focused ? 'w-full' : 'w-[60px]',
          isRound && 'pl-[60px] pr-3 placeholder:text-searchpad-placeholder',
          !isRound && 'pr-[60px] pl-3 placeholder:text-searchpad-placeholder-2',
          focused && isRound && 'pr-[60px]',
          focused && !isRound && 'pl-[15px]',
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg fill='%23ccc' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e%3cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3e%3c/svg%3e")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '34px 34px',
          backgroundPosition: isRound ? '14px 14px' : 'calc(100% - 14px) 14px',
        }}
      />
      {isRound && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className={cn(
            'absolute right-0 top-0 flex h-[60px] w-[60px] cursor-pointer items-center justify-center border-0 bg-transparent transition-opacity duration-200',
            value.length > 0 ? 'opacity-100' : 'opacity-0',
          )}
        >
          <X className="h-[22px] w-[22px] fill-searchpad-icon hover:fill-searchpad-icon-hover" />
        </button>
      )}
    </div>
  )
}
