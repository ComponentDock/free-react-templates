import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export type PillVariant = 'brand' | 'white' | 'submit'
export type PillSize = 'md' | 'chip' | 'block'

/** Pill surfaces: brand pink, the plan card's white, and the search submit. */
const VARIANT: Record<PillVariant, { face: string; fill: string; label: string }> = {
  brand: { face: 'bg-brand', fill: 'bg-brand-hover', label: 'text-white' },
  white: { face: 'bg-white', fill: 'bg-brand-hover', label: 'text-navy' },
  submit: { face: 'bg-brand', fill: 'bg-brand-hover', label: 'text-white' },
}

const SIZE: Record<PillSize, string> = {
  md: 'h-[54px] px-[44px] rounded-pill text-[14px]',
  chip: 'h-[53px] px-[29px] rounded-pill text-[14px]',
  block: 'h-[60px] w-full rounded-bar text-[14px]',
}

const BASE =
  'group relative isolate inline-flex items-center justify-center overflow-hidden font-heading font-medium uppercase tracking-[1px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

/**
 * The pill's sliding fill: a `brand-hover` layer that scales in from the left
 * over 500ms whenever the pill is hovered or focus-visible, sitting under the
 * label.
 */
function PillFace({ variant, children }: { variant: PillVariant; children: ReactNode }) {
  const recipe = VARIANT[variant]

  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.5,1.6,.4,.7)] group-hover:scale-x-100 group-focus-visible:scale-x-100',
          recipe.fill,
        )}
      />
      <span className={cn('relative z-[1]', recipe.label)}>{children}</span>
    </>
  )
}

export interface PillLinkProps {
  href: string
  variant?: PillVariant
  size?: PillSize
  className?: string
  children: ReactNode
}

/** An anchor shaped like the brand pill, with the sliding fill underneath. */
export function PillLink({
  href,
  variant = 'brand',
  size = 'md',
  className,
  children,
}: PillLinkProps) {
  return (
    <a href={href} className={cn(BASE, VARIANT[variant].face, SIZE[size], className)}>
      <PillFace variant={variant}>{children}</PillFace>
    </a>
  )
}

export interface PillButtonProps {
  variant?: PillVariant
  size?: PillSize
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  children: ReactNode
}

/** A button shaped like the brand pill, for actions that are not navigation. */
export function PillButton({
  variant = 'brand',
  size = 'md',
  className,
  type = 'button',
  onClick,
  children,
}: PillButtonProps) {
  return (
    <button type={type} onClick={onClick} className={cn(BASE, VARIANT[variant].face, SIZE[size], className)}>
      <PillFace variant={variant}>{children}</PillFace>
    </button>
  )
}
