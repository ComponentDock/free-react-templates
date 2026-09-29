import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SearchBarProps {
  value?: string
  onChange?: (value: string) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  className?: string
}

export function SearchBar({ value = '', onChange, onKeyDown, className }: SearchBarProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <input
        type="text"
        placeholder="Type Keywords"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={onKeyDown}
        className="flex-1 bg-transparent text-base text-seekstream-text placeholder-seekstream-heading outline-none"
      />
      <Search className="h-5 w-5 shrink-0 text-seekstream-heading" />
    </div>
  )
}
