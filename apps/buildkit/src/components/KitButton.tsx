import type { ButtonHTMLAttributes } from 'react'
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
export type KitVariant = 'solid' | 'round' | 'outline' | 'link' | 'white'
export type KitSize = 'sm' | 'md' | 'lg' | 'block'

const COLOR_LABELS: Record<KitColor, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  success: 'Success',
  danger: 'Danger',
  warning: 'Warning',
  info: 'Info',
  light: 'Light',
  dark: 'Dark',
}

export { COLOR_LABELS }

const solid: Record<KitColor, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  success: 'bg-success text-white hover:bg-success/90',
  danger: 'bg-danger text-white hover:bg-danger/90',
  warning: 'bg-warning text-white hover:bg-warning/90',
  info: 'bg-info text-white hover:bg-info/90',
  light: 'border border-gray-200 bg-light text-body hover:bg-gray-100',
  dark: 'bg-heading text-white hover:bg-heading/90',
}

const outline: Record<KitColor, string> = {
  primary: 'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
  secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white',
  success: 'border border-success text-success hover:bg-success hover:text-white',
  danger: 'border border-danger text-danger hover:bg-danger hover:text-white',
  warning: 'border border-warning text-warning hover:bg-warning hover:text-white',
  info: 'border border-info text-info hover:bg-info hover:text-white',
  light: 'border border-gray-200 text-body hover:bg-light',
  dark: 'border border-heading text-heading hover:bg-heading hover:text-white',
}

const link: Record<KitColor, string> = {
  primary: 'bg-transparent text-primary-600 hover:underline',
  secondary: 'bg-transparent text-gray-600 hover:underline',
  success: 'bg-transparent text-success hover:underline',
  danger: 'bg-transparent text-danger hover:underline',
  warning: 'bg-transparent text-warning hover:underline',
  info: 'bg-transparent text-info hover:underline',
  light: 'bg-transparent text-body hover:underline',
  dark: 'bg-transparent text-heading hover:underline',
}

const white = Object.fromEntries(
  KIT_COLORS.map((color) => [color, 'bg-white text-black hover:bg-white/90']),
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
  round: 'rounded-full',
  outline: 'rounded',
  link: 'rounded-none px-1',
  white: 'rounded-full',
}

const shadowClasses: Record<KitVariant, string> = {
  solid: 'shadow-material hover:shadow-material-hover',
  round: 'shadow-material hover:shadow-material-hover',
  outline: 'shadow-material hover:shadow-material-hover',
  link: 'shadow-none',
  white: 'shadow-material hover:shadow-material-hover',
}

const sizeClasses: Record<KitSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-[18px] py-3',
  lg: 'px-6 py-3.5 text-lg',
  block: 'w-full px-[18px] py-3',
}

export interface KitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: KitColor
  variant: KitVariant
  size: KitSize
}

/**
 * The kit's button primitive: material elevation, light weight, per-color
 * solid / outline / link fills plus the pill (`round`) and `.btn-white`
 * shapes. All styling composes through `cn()` so callers can override.
 */
export function KitButton({ color, variant, size, className, ...props }: KitButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 font-light transition-shadow',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40',
        'disabled:cursor-not-allowed disabled:opacity-50',
        colorClasses[variant][color],
        shapeClasses[variant],
        shadowClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}
