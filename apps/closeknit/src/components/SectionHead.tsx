import { cn } from '@free-react-templates/ui'

interface SectionHeadProps {
  pill: string
  title: string
  lede?: string
  tone?: 'primary' | 'accent'
  align?: 'center' | 'left'
}

/**
 * The page's repeat device: an uppercase pill, an h2, then a one-line lede —
 * always in that order and (except in the footer-adjacent bands) centred.
 */
export function SectionHead({
  pill,
  title,
  lede,
  tone = 'primary',
  align = 'center',
}: SectionHeadProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      <span className={cn('pill', tone === 'accent' ? 'pill-accent' : 'pill-primary')}>{pill}</span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {lede !== undefined && <p className="mt-4 text-lg text-gray-600">{lede}</p>}
    </div>
  )
}
