import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

/** The reference's 1140 px container with 16 px gutters. */
export function Container({
  className,
  children,
}: {
  readonly className?: string
  readonly children: ReactNode
}) {
  return <div className={cn('mx-auto w-full max-w-[1140px] px-4', className)}>{children}</div>
}

/** 48 px / 900 band heading — the `.heading` rule of the reference sheet. */
export function BandHeading({
  className,
  children,
}: {
  readonly className?: string
  readonly children: ReactNode
}) {
  return (
    <h2
      className={cn(
        'font-display text-[36px] leading-[1] font-black text-ink md:text-[48px]',
        className,
      )}
    >
      {children}
    </h2>
  )
}
