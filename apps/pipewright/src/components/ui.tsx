import type { ReactNode } from 'react'
import { Phone, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PHONE_DISPLAY, PHONE_HREF } from '../content'

/** 1280 px max, 16 / 32 px gutters — 1216 px of content at a 1440 px viewport. */
export function Container({
  children,
  className,
}: {
  readonly children: ReactNode
  readonly className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1280px] px-4 lg:px-8', className)}>{children}</div>
  )
}

/** 12 px / 600 / uppercase / +0.2em bronze label above every band heading. */
export function Kicker({ children }: { readonly children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">{children}</p>
  )
}

interface PhonePillProps {
  readonly label?: string
  /** `md` is the 183 × 46 header/hero pill; `lg` is the emergency strip's. */
  readonly scale?: 'md' | 'lg'
  readonly className?: string
}

/** Pill means "call" throughout the design — it is never a navigation button. */
export function PhonePill({ label, scale = 'md', className }: PhonePillProps) {
  return (
    <a
      href={PHONE_HREF}
      data-phone
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-primary-600 font-semibold text-white transition-colors hover:bg-primary-700',
        scale === 'lg' ? 'px-6 py-3 text-lg font-bold' : 'px-4 py-2.5 text-base',
        className,
      )}
    >
      <Phone
        className={cn('shrink-0', scale === 'lg' ? 'h-5 w-5' : 'h-4 w-4')}
        aria-hidden="true"
      />
      {label ?? PHONE_DISPLAY}
    </a>
  )
}

interface StarsProps {
  /** `amber` in the hero rating row; `primary` inside the review cards. */
  readonly tone?: 'amber' | 'primary'
  /** 16 px in the hero rating row, 20 px inside the review cards. */
  readonly size?: 'sm' | 'md'
  /** The rating repeated beside the glyphs, so the stars are not colour-only. */
  readonly label: string
}

/** Five decorative stars, labelled as a single rating for assistive technology. */
export function Stars({ tone = 'amber', size = 'sm', label }: StarsProps) {
  return (
    <span role="img" aria-label={label} className="inline-flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            'fill-current',
            size === 'md' ? 'h-5 w-5' : 'h-4 w-4',
            tone === 'primary' ? 'text-primary-400' : 'text-amber-400',
          )}
        />
      ))}
    </span>
  )
}
