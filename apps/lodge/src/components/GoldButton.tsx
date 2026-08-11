import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/* Gold-bordered action control, recreated from the original .primary-btn:
   14px/700 uppercase Open Sans in ink #081624, padding 15px 34px 15px 64px
   (arrow room on the right), border 2px solid #AE954B, gold arrow #AE9548.
   Used for "CHECK AVAILABILITY" (button) and the facilities "Visit Center"
   links. */

const goldButtonClasses =
  'relative rounded-none border-2 border-gold-border text-sm font-bold uppercase tracking-normal text-ink transition-colors hover:bg-gold/10'

export interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function GoldButton({ className, children, ...props }: GoldButtonProps) {
  return (
    <button
      type="button"
      className={cn(goldButtonClasses, 'py-[15px] pl-[34px] pr-[64px]', className)}
      {...props}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="absolute top-1/2 right-[25px] h-[21px] w-[21px] -translate-y-1/2 text-gold"
      />
    </button>
  )
}

export interface GoldButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function GoldButtonLink({ className, children, ...props }: GoldButtonLinkProps) {
  return (
    <a
      className={cn(goldButtonClasses, 'inline-block py-[15px] pl-[34px] pr-[64px]', className)}
      {...props}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="absolute top-1/2 right-[25px] h-[21px] w-[21px] -translate-y-1/2 text-gold"
      />
    </a>
  )
}
