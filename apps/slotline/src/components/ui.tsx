import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export const containerClass = 'container mx-auto px-4 lg:px-8'

interface KickerProps {
  children: ReactNode
  tone?: 'sage' | 'lavender'
}

/**
 * Two kicker species on one page: the sage uppercase pill above every
 * left-aligned band, the lavender sentence-case pill above the two centred
 * ones. They are not interchangeable.
 */
export function Kicker({ children, tone = 'sage' }: KickerProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full',
        tone === 'sage'
          ? 'border border-accent-200 bg-accent-50 px-3 py-1 text-xs leading-[1.4] font-semibold tracking-[0.14em] text-accent-700 uppercase'
          : 'bg-primary-100 px-3.5 py-1 text-sm leading-5 font-medium text-primary-700',
      )}
    >
      {children}
    </span>
  )
}

interface SectionHeadingProps {
  kicker: string
  title: string
  lede?: string
  tone?: 'sage' | 'lavender'
  align?: 'left' | 'center'
  serif?: boolean
}

export function SectionHeading({
  kicker,
  title,
  lede,
  tone = 'sage',
  align = 'left',
  serif = true,
}: SectionHeadingProps) {
  const centred = align === 'center'
  return (
    <div className={cn(centred ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl')}>
      <Kicker tone={tone}>{kicker}</Kicker>
      <h2
        className={cn(
          'mt-4 text-3xl leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10',
          serif ? 'font-serif font-semibold' : 'font-sans font-bold',
          centred && 'mt-5',
        )}
      >
        {title}
      </h2>
      {lede === undefined ? null : (
        <p className={cn('mt-4 text-lg leading-7 text-gray-600', centred && 'mx-auto max-w-2xl')}>{lede}</p>
      )}
    </div>
  )
}
