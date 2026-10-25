import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export const containerClass = 'mx-auto w-full max-w-[1280px] px-4 lg:px-8'

const EYEBROW_TONE = {
  band: 'text-primary-700',
  hero: 'text-primary-400',
  neutral: 'text-ink-500',
} as const

export type EyebrowTone = keyof typeof EYEBROW_TONE

export function Eyebrow({ children, tone = 'band' }: { children: ReactNode; tone?: EyebrowTone }) {
  return (
    <p
      className={cn(
        'text-sm leading-5 font-bold tracking-[0.35px] uppercase',
        EYEBROW_TONE[tone],
      )}
    >
      {children}
    </p>
  )
}

export interface SectionHeadingProps {
  title: string
  lead?: string
  eyebrow?: string
  align?: 'left' | 'center'
  tone?: EyebrowTone
  light?: boolean
}

/** One head for every band: eyebrow, 36/40 heading, optional 18/28 lead. */
export function SectionHeading({
  title,
  lead,
  eyebrow,
  align = 'left',
  tone = 'band',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'text-[30px] leading-[34px] font-bold tracking-[-0.9px] sm:text-4xl sm:leading-10',
          eyebrow ? 'mt-3' : '',
          light ? 'text-white' : 'text-ink-800 dark:text-white',
        )}
      >
        {title}
      </h2>
      {lead ? <p className="mt-4 text-lg leading-7 text-ink-500">{lead}</p> : null}
    </div>
  )
}
