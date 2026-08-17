import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@free-react-templates/ui'

type Variant = 'primary' | 'secondary' | 'white'

export interface PillLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

/* Fiscale pill buttons — radius 30px, padding 12px 30px, 12px 700
   uppercase with letter-spacing, in three translucent variants that fill
   solid on hover: primary (green #24b800), secondary (blue #4877fb),
   white (used over the blue hero/CTA band). */
const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand/20 text-brand hover:bg-brand hover:text-white',
  secondary: 'bg-accent/20 text-accent hover:bg-accent hover:text-white',
  white: 'bg-white/20 text-white hover:bg-white hover:text-accent',
}

export function PillLink({ className, variant = 'primary', ...props }: PillLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[30px] px-[30px] py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}
