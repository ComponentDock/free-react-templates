import { cn } from '@free-react-templates/ui'

export interface SectionHeadProps {
  eyebrow: string
  title: string
  lede: string
  /**
   * `text` is the band treatment (14 px 700 uppercase in brand teal); `pill`
   * is the same label on a `primary-100` ground, which the testimonials and FAQ
   * bands use instead.
   */
  variant?: 'text' | 'pill'
  align?: 'left' | 'center'
  className?: string
}

const ALIGN: Record<'left' | 'center', string> = {
  left: 'max-w-2xl',
  center: 'mx-auto max-w-3xl text-center',
}

/** Eyebrow + h2 + lede. Every band opens with one of these. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  variant = 'text',
  align = 'left',
  className,
}: SectionHeadProps) {
  return (
    <div className={cn(ALIGN[align], className)}>
      {variant === 'pill' ? (
        <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
          {eyebrow}
        </span>
      ) : (
        <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">{title}</h2>
      <p
        className={cn(
          'mt-4 text-lg',
          variant === 'pill' ? 'text-gray-600' : 'text-ink-500',
        )}
      >
        {lede}
      </p>
    </div>
  )
}
