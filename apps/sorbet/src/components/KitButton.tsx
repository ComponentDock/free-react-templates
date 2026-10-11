import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
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
  'rose',
] as const

export type KitColor = (typeof KIT_COLORS)[number]
export type KitVariant = 'solid' | 'outline' | 'round' | 'link' | 'white'
export type KitSize = 'sm' | 'md' | 'lg' | 'block'

export const COLOR_LABELS: Record<KitColor, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
  light: 'Light',
  dark: 'Dark',
  rose: 'Rose',
}

/** Solid fills: 2px border in the fill color, dark labels on the light hues. */
const solid: Record<KitColor, string> = {
  primary:
    'border-primary-500 bg-primary-500 text-heading hover:border-primary-600 hover:bg-primary-600',
  secondary: 'border-secondary bg-secondary text-white hover:opacity-90',
  success: 'border-success bg-success text-heading hover:border-success-dark hover:bg-success-dark',
  danger: 'border-danger bg-danger text-white hover:border-danger-dark hover:bg-danger-dark',
  warning: 'border-warning bg-warning text-heading hover:border-warning-dark hover:bg-warning-dark',
  info: 'border-info bg-info text-white hover:opacity-90',
  light: 'border-gray-200 bg-light text-body hover:bg-gray-100',
  dark: 'border-heading bg-heading text-white hover:opacity-90',
  rose: 'border-rose bg-rose text-white hover:opacity-90',
}

/** Outline fills: transparent body, 2px colored border, filled on hover. */
const outline: Record<KitColor, string> = {
  primary:
    'border-primary-500 bg-transparent text-primary-500 hover:bg-primary-500 hover:text-heading',
  secondary: 'border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white',
  success: 'border-success bg-transparent text-success hover:bg-success hover:text-heading',
  danger: 'border-danger bg-transparent text-danger hover:bg-danger hover:text-white',
  warning: 'border-warning bg-transparent text-warning hover:bg-warning hover:text-heading',
  info: 'border-info bg-transparent text-info hover:bg-info hover:text-white',
  light: 'border-gray-300 bg-transparent text-body hover:bg-light',
  dark: 'border-heading bg-transparent text-heading hover:bg-heading hover:text-white',
  rose: 'border-rose bg-transparent text-rose hover:bg-rose hover:text-white',
}

/** Text links in the kit palette (the "Simple Button" row). */
const link: Record<KitColor, string> = {
  primary: 'border-transparent bg-transparent text-primary-500 hover:underline',
  secondary: 'border-transparent bg-transparent text-secondary hover:underline',
  success: 'border-transparent bg-transparent text-success hover:underline',
  danger: 'border-transparent bg-transparent text-danger hover:underline',
  warning: 'border-transparent bg-transparent text-warning hover:underline',
  info: 'border-transparent bg-transparent text-info hover:underline',
  light: 'border-transparent bg-transparent text-body hover:underline',
  dark: 'border-transparent bg-transparent text-heading hover:underline',
  rose: 'border-transparent bg-transparent text-rose hover:underline',
}

/** The white button used by the navbar download action and the login card. */
const white = Object.fromEntries(
  KIT_COLORS.map((color) => [color, 'border-white bg-white text-black hover:bg-white/90']),
) as Record<KitColor, string>

const colorClasses: Record<KitVariant, Record<KitColor, string>> = {
  solid,
  round: solid,
  outline,
  link,
  white,
}

const shapeClasses: Record<KitVariant, string> = {
  solid: 'rounded',
  round: 'rounded-[40px]',
  outline: 'rounded',
  link: 'rounded-none',
  white: 'rounded',
}

const sizeClasses: Record<KitSize, string> = {
  sm: 'px-3 py-1.5 text-[12px]',
  md: 'px-4 py-[11px] text-[14px]',
  lg: 'px-6 py-3 text-[16px]',
  block: 'w-full px-4 py-[11px] text-[14px]',
}

export interface KitButtonStyleProps {
  color: KitColor
  variant: KitVariant
  size: KitSize
  /** 40px circular icon button (the reference's round icon action). */
  circle?: boolean
  className?: string
}

/** The kit's button treatment: 4px corners, 2px borders, flat (no shadow). */
function kitButtonClasses({
  color,
  variant,
  size,
  circle,
  className,
}: KitButtonStyleProps): string {
  return cn(
    'inline-flex cursor-pointer items-center justify-center gap-2 text-center font-normal transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40',
    'disabled:cursor-not-allowed disabled:opacity-60',
    'border-2',
    colorClasses[variant][color],
    shapeClasses[variant],
    circle ? 'h-10 w-10 rounded-full p-0' : sizeClasses[size],
    className,
  )
}

export interface KitButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, KitButtonStyleProps {}

export function KitButton({ color, variant, size, circle, className, ...props }: KitButtonProps) {
  return (
    <button
      type="button"
      className={kitButtonClasses({ color, variant, size, circle, className })}
      {...props}
    />
  )
}

export interface KitLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, KitButtonStyleProps {}

/** Anchor styled like a kit button (hero and carousel calls to action). */
export function KitLink({ color, variant, size, circle, className, ...props }: KitLinkProps) {
  return <a className={kitButtonClasses({ color, variant, size, circle, className })} {...props} />
}
