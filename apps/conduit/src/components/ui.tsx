import type { ReactNode } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/** 1,280 px container with a 32 px gutter, widening to 48 px on very large screens. */
export const containerClass = 'mx-auto w-full max-w-[1280px] px-4 lg:px-8 2xl:px-12'

/** The band rhythm: 80 px of air, 112 px from `lg`. */
export const sectionClass = 'py-20 lg:py-28'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-sm leading-5 font-bold tracking-[0.35px] text-primary-700 uppercase dark:text-primary-400',
        className,
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
}

/**
 * One head for every band. `#areas` has no eyebrow in the reference — that is not
 * an omission, so this renders the eyebrow only when one is passed.
 */
export function SectionHeading({ title, lead, eyebrow, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-ink-800 sm:text-4xl sm:leading-10 dark:text-white',
          eyebrow ? 'mt-3' : '',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-lg leading-7 text-ink-500 dark:text-gray-400">{lead}</p>
      ) : null}
    </div>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900 dark:text-primary-300">
      {children}
    </span>
  )
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-700 dark:border-gray-700 dark:text-gray-300',
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Five filled amber stars — the reference uses them twice, both times at 14 px. */
export function Stars({ className, tone = 'amber' }: { className?: string; tone?: 'amber' | 'primary' }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          className={cn(
            'h-4 w-4',
            tone === 'amber' ? 'fill-amber-400 text-amber-400' : 'fill-primary-400 text-primary-400',
          )}
        />
      ))}
    </span>
  )
}

export function Tick({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn('h-4 w-4 shrink-0 text-primary-600', className)}
    >
      <path
        d="M2.5 8.5l3.5 3.5 7.5-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
