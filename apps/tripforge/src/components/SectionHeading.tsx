import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  subheading: string
  lead: string
  rest: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
  children?: ReactNode
}

export function SectionHeading({
  subheading,
  lead,
  rest,
  align = 'left',
  tone = 'dark',
  className,
  children,
}: SectionHeadingProps) {
  const light = tone === 'light'

  return (
    <div
      className={cn(
        'mb-10',
        align === 'center' ? 'text-center' : 'text-left',
        light ? 'text-white' : 'text-heading',
        className,
      )}
    >
      <span className={cn('subheading', light && 'subheading-light')}>{subheading}</span>
      <h2 className={cn('section-heading', light ? 'section-heading-light' : 'text-heading')}>
        <strong>{lead}</strong> {rest}
      </h2>
      {children}
    </div>
  )
}
