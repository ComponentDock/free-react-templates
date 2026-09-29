import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SearchBarProps {
  value?: string
  onChange?: (value: string) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  resultCount?: number
  className?: string
}

export function SearchBar({
  value = '',
  onChange,
  onKeyDown,
  resultCount = 108,
  className,
}: SearchBarProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Search className="h-5 w-5 shrink-0 text-searchpeak-heading" />
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={onKeyDown}
        className="flex-1 bg-transparent text-base text-searchpeak-text placeholder-searchpeak-heading outline-none"
      />
      <span className="shrink-0 text-sm font-semibold text-searchpeak-results">
        {resultCount} results
      </span>
    </div>
  )
}
