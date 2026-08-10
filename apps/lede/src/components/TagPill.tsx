import { cn } from '@free-react-templates/ui'

/* Category tag pill — #f6214b bg, white 300 text, padding 4px 30px. */

export function TagPill({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-block bg-primary-600 px-[30px] py-1 text-xs font-light text-white',
        className,
      )}
    >
      {label}
    </span>
  )
}
