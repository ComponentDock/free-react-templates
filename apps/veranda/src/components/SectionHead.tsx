import { cn } from '@free-react-templates/ui'

export interface SectionHeadProps {
  eyebrow: string
  title: string
  lede: string
  /** `accent` is the rose pill the reference uses for `Live now` and `Events`. */
  tone?: 'primary' | 'accent'
  /** Channels / members / events use the tighter 12 px uppercase eyebrow. */
  size?: 'xs' | 'sm'
  align?: 'center' | 'left'
  className?: string
}

const TONE: Record<'primary' | 'accent', string> = {
  primary: 'bg-primary-50 text-primary-700',
  accent: 'bg-accent-50 text-accent-700',
}

const SIZE: Record<'xs' | 'sm', string> = {
  xs: 'text-xs font-semibold uppercase tracking-wider',
  sm: 'text-sm font-medium',
}

const ALIGN: Record<'center' | 'left', string> = {
  center: 'mx-auto max-w-2xl text-center',
  left: 'max-w-2xl',
}

/** Eyebrow pill + h2 + lede. Every band opens with one of these. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = 'primary',
  size = 'xs',
  align = 'center',
  className,
}: SectionHeadProps) {
  return (
    <div className={cn(ALIGN[align], className)}>
      <span
        className={cn('inline-flex items-center rounded-full px-3 py-1', TONE[tone], SIZE[size])}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600">{lede}</p>
    </div>
  )
}
