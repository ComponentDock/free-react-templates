import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@free-react-templates/ui'

type Variant = 'primary' | 'outline'
type Size = 'sm' | 'md'

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500/40',
  outline:
    'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
}

export function ButtonLink({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
        'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}
