import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface TemplateButtonProps {
  href: string
  variant?: 'brand' | 'navy'
  children: ReactNode
}

/** Sharp rectangular CTA button: solid fill + 3px bottom bar that expands
 *  to fill the button on hover (design-token note: bar inverts the fill). */
export function TemplateButton({ href, variant = 'brand', children }: TemplateButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group relative inline-flex h-16 w-[200px] items-center justify-center overflow-hidden text-lg font-bold transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variant === 'brand'
          ? 'bg-brand text-white focus-visible:ring-navy'
          : 'bg-navy text-white focus-visible:ring-brand',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-x-0 bottom-0 h-[3px] transition-all duration-300 group-hover:h-full',
          variant === 'brand' ? 'bg-navy' : 'bg-white',
        )}
      />
      <span
        className={cn(
          'relative transition-colors duration-300',
          variant === 'navy' && 'group-hover:text-navy',
        )}
      >
        {children}
      </span>
    </a>
  )
}
