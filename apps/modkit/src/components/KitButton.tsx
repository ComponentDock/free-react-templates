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
] as const

export type KitColor = (typeof KIT_COLORS)[number]
export type KitVariant = 'solid' | 'outline' | 'pill'
export type KitSize = 'sm' | 'md' | 'lg'

export const COLOR_LABELS: Record<KitColor, string> = {
  primary: 'Default',
  secondary: 'Secondary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
  light: 'Light',
  dark: 'Dark',
}

const fills: Record<KitVariant, Record<KitColor, string>> = {
  solid: {
    primary: 'bg-kit-primary text-white hover:brightness-90',
    secondary: 'bg-kit-secondary text-white hover:brightness-90',
    success: 'bg-kit-success text-white hover:brightness-90',
    danger: 'bg-kit-danger text-white hover:brightness-90',
    warning: 'bg-kit-warning text-white hover:brightness-90',
    info: 'bg-kit-info text-white hover:brightness-90',
    light: 'border border-gray-200 bg-kit-light text-body hover:bg-gray-100',
    dark: 'bg-kit-dark text-white hover:brightness-90',
  },
  outline: {
    primary: 'border border-kit-primary text-kit-primary hover:bg-kit-primary hover:text-white',
    secondary:
      'border border-kit-secondary text-kit-secondary hover:bg-kit-secondary hover:text-white',
    success: 'border border-kit-success text-kit-success hover:bg-kit-success hover:text-white',
    danger: 'border border-kit-danger text-kit-danger hover:bg-kit-danger hover:text-white',
    warning: 'border border-kit-warning text-kit-warning hover:bg-kit-warning hover:text-white',
    info: 'border border-kit-info text-kit-info hover:bg-kit-info hover:text-white',
    light: 'border border-gray-200 text-body hover:bg-kit-light',
    dark: 'border border-kit-dark text-kit-dark hover:bg-kit-dark hover:text-white',
  },
  pill: {
    primary: 'border border-kit-primary text-kit-primary hover:bg-kit-primary hover:text-white',
    secondary:
      'border border-kit-secondary text-kit-secondary hover:bg-kit-secondary hover:text-white',
    success: 'border border-kit-success text-kit-success hover:bg-kit-success hover:text-white',
    danger: 'border border-kit-danger text-kit-danger hover:bg-kit-danger hover:text-white',
    warning: 'border border-kit-warning text-kit-warning hover:bg-kit-warning hover:text-white',
    info: 'border border-kit-info text-kit-info hover:bg-kit-info hover:text-white',
    light: 'border border-gray-200 text-body hover:bg-kit-light',
    dark: 'border border-kit-dark text-kit-dark hover:bg-kit-dark hover:text-white',
  },
}

const shadows: Record<KitColor, string> = {
  primary: 'shadow-btn-primary hover:shadow-btn-primary-fade',
  secondary: 'shadow-btn-secondary hover:shadow-btn-secondary-fade',
  success: 'shadow-btn-success hover:shadow-btn-success-fade',
  danger: 'shadow-btn-danger hover:shadow-btn-danger-fade',
  warning: 'shadow-btn-warning hover:shadow-btn-warning-fade',
  info: 'shadow-btn-info hover:shadow-btn-info-fade',
  light: 'shadow-kit-input',
  dark: 'shadow-btn-dark hover:shadow-btn-dark-fade',
}

const shapes: Record<KitVariant, string> = {
  solid: 'rounded',
  outline: 'rounded',
  pill: 'rounded-full px-4',
}

const sizes: Record<KitSize, string> = {
  sm: 'px-3 py-1.5 text-[0.75rem]',
  md: 'px-4 py-2 text-[0.875rem]',
  lg: 'px-[1.2rem] py-3.5 text-[1rem]',
}

export interface KitButtonStyleProps {
  color: KitColor
  variant: KitVariant
  size: KitSize
  className?: string
}

/**
 * The kit's button treatment: uppercase 0.9rem label, soft per-color drop
 * shadow that fades on hover, square solid/outline shapes plus the 50px pill.
 */
function kitButtonClasses({ color, variant, size, className }: KitButtonStyleProps) {
  return cn(
    'inline-flex cursor-pointer items-center justify-center gap-2 uppercase tracking-wide transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kit-primary/40',
    'disabled:cursor-not-allowed disabled:opacity-60',
    fills[variant][color],
    shadows[color],
    sizes[size],
    shapes[variant],
    className,
  )
}

export interface KitButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, KitButtonStyleProps {}

export const KitButton = forwardRef<HTMLButtonElement, KitButtonProps>(
  ({ color, variant, size, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={kitButtonClasses({ color, variant, size, className })}
      {...props}
    />
  ),
)

KitButton.displayName = 'KitButton'

export interface KitLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, KitButtonStyleProps {}

/** Anchor styled like a kit button (used for the hero CTA). */
export const KitLink = forwardRef<HTMLAnchorElement, KitLinkProps>(
  ({ color, variant, size, className, ...props }, ref) => (
    <a ref={ref} className={kitButtonClasses({ color, variant, size, className })} {...props} />
  ),
)

KitLink.displayName = 'KitLink'
