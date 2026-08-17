import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@free-react-templates/ui'

type Variant = 'orange' | 'dark' | 'outline' | 'header'

export interface PillLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

/* Interiora pill buttons — the four shapes from the reference:
   btn_10 orange pill (radius 40px), btn_1 dark pill (radius 41px, hover
   goes transparent), btn_01 orange outline pill (hover fills orange), and
   the slim header CTA (radius 25px). All pills are medium-weight text with
   a focus-visible ring. */
const variantClasses: Record<Variant, string> = {
  orange: 'bg-brand text-white hover:brightness-110',
  dark: 'border border-ink bg-ink text-white hover:bg-transparent hover:text-ink',
  outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  header: 'rounded-[25px] bg-brand px-[25px] py-[13px] text-white',
}

export function PillLink({ className, variant = 'orange', ...props }: PillLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[40px] px-[35px] py-[17px] text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50',
        variant === 'header' && 'text-base',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  )
}
