import { cn } from '@free-react-templates/ui'

export interface SectionHeadProps {
  eyebrow: string
  title: string
  lede?: string
  /** Centred headers are used by the three bands that are arguments, not lists. */
  align?: 'left' | 'center'
  /** The reference's review and FAQ eyebrows are pills, the rest are plain caps. */
  pill?: boolean
  /** `accent` is the pale eyebrow used on the near-black sizing band. */
  tone?: 'brand' | 'accent'
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = 'left',
  pill = false,
  tone = 'brand',
}: SectionHeadProps) {
  const centred = align === 'center'

  return (
    <div className={cn('max-w-2xl', centred && 'mx-auto text-center')}>
      {pill ? (
        <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
          {eyebrow}
        </p>
      ) : (
        <p
          className={cn(
            'text-sm font-bold tracking-wide uppercase',
            tone === 'accent' ? 'text-primary-400' : 'text-primary-700',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">{title}</h2>
      {lede === undefined ? null : (
        <p
          className={cn(
            'mt-4 text-lg text-ink-500',
            centred && 'mx-auto',
            tone === 'accent' && 'text-white/70',
          )}
        >
          {lede}
        </p>
      )}
    </div>
  )
}
