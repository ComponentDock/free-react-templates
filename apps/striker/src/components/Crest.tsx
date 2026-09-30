import { cn } from '@free-react-templates/ui'

interface CrestProps {
  name: string
  tone: 'brand' | 'dark'
  className?: string
}

/** Simple team crest badge — a filled circle carrying the club initial. */
export function Crest({ name, tone, className }: CrestProps) {
  return (
    <span
      className={cn(
        'flex h-14 w-14 items-center justify-center rounded-full text-xl font-black text-white',
        tone === 'brand' ? 'bg-brand' : 'bg-card',
        className,
      )}
      aria-hidden="true"
    >
      {name.charAt(0)}
    </span>
  )
}
