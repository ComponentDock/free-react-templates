import { useId } from 'react'
import { cn } from '@free-react-templates/ui'
import { site } from '../content'

export interface WordmarkProps {
  /** The footer runs the same geometry in paper and lime. */
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Two 18 × 18 plates offset by 10 / 6, the overlap knocked through in a third
 * tone, and the word as live text — the mark reads as one lime square with a
 * bitten corner at 40 px, which is the only size the header ever uses it at.
 */
export function Wordmark({ tone = 'dark', className }: WordmarkProps) {
  const titleId = useId()
  const light = tone === 'light'
  return (
    <svg
      viewBox="0 0 196 40"
      role="img"
      aria-labelledby={titleId}
      className={cn('h-8 w-auto lg:h-10', className)}
    >
      <title id={titleId}>{site.name}</title>
      <rect x={3} y={9} width={18} height={18} rx={2} fill={light ? '#f7f7f6' : '#141413'} />
      <rect x={13} y={15} width={18} height={18} rx={2} fill="#c3f53c" />
      <rect x={13} y={15} width={8} height={12} fill={light ? '#a8dc1f' : '#84b012'} />
      <text
        x={40}
        y={28}
        fill={light ? '#f7f7f6' : '#141413'}
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize={21}
        fontWeight={700}
        letterSpacing={-0.4}
      >
        {site.name}
      </text>
    </svg>
  )
}
