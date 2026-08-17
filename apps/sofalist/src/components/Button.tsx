import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@free-react-templates/ui'

type Variant = 'white' | 'primary' | 'secondary'

export interface PillLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

/* Sofalist pill buttons — radius 40px with the soft long shadow from the
   reference: white (hero Discover, #267aa4 text), primary (amber #cf7500,
   hover goes transparent showing amber text), and secondary (dark outline,
   hover fills dark). All pills get a focus-visible ring. */
const variantClasses: Record<Variant, string> = {
  white: 'bg-paper text-steel hover:text-linkblue',
  primary: 'bg-amber text-white hover:bg-transparent hover:text-amber',
  secondary: 'border border-ink text-ink hover:bg-ink hover:text-white',
}

export function PillLink({ className, variant = 'white', ...props }: PillLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[40px] px-4 py-3 text-base font-normal shadow-[0_24px_36px_-11px_rgba(0,0,0,0.09)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}
