import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'
import { cn } from '@free-react-templates/ui'

export const KIT_COLORS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'link',
] as const

export type KitColor = (typeof KIT_COLORS)[number]
export type KitVariant = 'solid' | 'outline' | 'outline-2'
export type KitSize = 'sm' | 'md' | 'lg'

/** The eight contextual colors used by the outline rows (no link variant). */
export const OUTLINE_COLORS = KIT_COLORS.filter((color): color is KitColor => color !== 'link')

export const COLOR_LABELS: Record<KitColor, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
  light: 'Light',
  dark: 'Dark',
  link: 'Link',
}

const solidFills: Record<KitColor, string> = {
  primary: 'bg-flair-primary text-white',
  secondary: 'bg-flair-secondary text-white',
  success: 'bg-flair-success text-white',
  danger: 'bg-flair-danger text-white',
  warning: 'bg-flair-warning text-white',
  info: 'bg-flair-info text-white',
  light: 'bg-flair-light text-body',
  dark: 'bg-flair-dark text-white',
  link: 'bg-transparent text-flair-primary hover:underline',
}

const outlineFills: Record<KitColor, string> = {
  primary: 'border-flair-primary text-flair-primary hover:bg-flair-primary hover:text-white',
  secondary:
    'border-flair-secondary text-flair-secondary hover:bg-flair-secondary hover:text-white',
  success: 'border-flair-success text-flair-success hover:bg-flair-success hover:text-white',
  danger: 'border-flair-danger text-flair-danger hover:bg-flair-danger hover:text-white',
  warning: 'border-flair-warning text-flair-warning hover:bg-flair-warning hover:text-white',
  info: 'border-flair-info text-flair-info hover:bg-flair-info hover:text-white',
  light: 'border-gray-200 text-flair-secondary hover:bg-flair-light',
  dark: 'border-flair-dark text-flair-dark hover:bg-flair-dark hover:text-white',
  link: 'border-flair-primary text-flair-primary hover:bg-flair-primary hover:text-white',
}

const fills: Record<KitVariant, Record<KitColor, string>> = {
  solid: solidFills,
  outline: outlineFills,
  'outline-2': outlineFills,
}

const variants: Record<KitVariant, string> = {
  solid: 'border border-transparent',
  outline: 'bg-transparent',
  'outline-2': 'bg-transparent',
}

const shadows: Record<KitColor, string> = {
  primary: 'shadow-btn-primary',
  secondary: 'shadow-btn-secondary',
  success: 'shadow-btn-success',
  danger: 'shadow-btn-danger',
  warning: 'shadow-btn-warning',
  info: 'shadow-btn-info',
  light: 'shadow-btn-light',
  dark: 'shadow-btn-dark',
  link: 'shadow-none',
}

const sizes: Record<KitSize, string> = {
  sm: 'px-4 py-1.5 text-[12px]',
  md: 'px-4 py-2 text-[14px]',
  lg: 'px-4 py-2.5 text-[16px]',
}

export interface KitButtonStyleProps {
  color: KitColor
  variant: KitVariant
  size: KitSize
  /** 50px pill corners (the source's `btn-pill`). */
  pill?: boolean
  /** 32px circular icon button (the source's `btn-fab`). */
  fab?: boolean
  className?: string
}

/** The kit's button treatment: 0.9rem not-uppercase labels, soft per-color elevation. */
function kitButtonClasses({ color, variant, size, pill, fab, className }: KitButtonStyleProps) {
  return cn(
    'inline-flex cursor-pointer items-center justify-center gap-2 font-normal transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flair-primary/40',
    'disabled:cursor-not-allowed disabled:opacity-60',
    'border',
    fills[variant][color],
    variants[variant],
    shadows[color],
    sizes[size],
    fab ? 'h-8 w-8 rounded-full p-0' : 'rounded',
    pill && 'rounded-full px-5',
    variant === 'outline-2' && 'border-2',
    className,
  )
}

export interface KitButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, KitButtonStyleProps {}

export const KitButton = forwardRef<HTMLButtonElement, KitButtonProps>(
  ({ color, variant, size, pill, fab, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={kitButtonClasses({ color, variant, size, pill, fab, className })}
      {...props}
    />
  ),
)

KitButton.displayName = 'KitButton'

export interface KitLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, KitButtonStyleProps {}

/** Anchor styled like a kit button (the hero CTA). */
export const KitLink = forwardRef<HTMLAnchorElement, KitLinkProps>(
  ({ color, variant, size, pill, fab, className, ...props }, ref) => (
    <a
      ref={ref}
      className={kitButtonClasses({ color, variant, size, pill, fab, className })}
      {...props}
    />
  ),
)

KitLink.displayName = 'KitLink'
