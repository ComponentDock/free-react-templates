import type { ReactNode } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/** 1,280 px container with a 32 px gutter, widening to 48 px on very large screens. */
export const containerClass = 'mx-auto w-full max-w-[1280px] px-4 lg:px-8 2xl:px-12'

/** The band rhythm: 80 px of air, 112 px from `lg`. */
export const sectionClass = 'py-20 lg:py-28'

/** 12 px, 600, uppercase, 0.28em — every eyebrow on the page but `#process`. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs leading-4 font-semibold tracking-[0.28em] text-primary-400 uppercase">
      {children}
    </p>
  )
}

export interface SectionHeadingProps {
  title: string
  lead: string
  /** The compare band has no eyebrow; that is not an omission. */
  eyebrow?: string
}

/** The Playfair head shared by `#portfolio` and the compare band. */
export function SectionHeading({ title, lead, eyebrow }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'font-serif text-3xl leading-10 font-normal text-white sm:text-4xl',
          eyebrow ? 'mt-3' : '',
        )}
      >
        {title}
      </h2>
      <p className="mt-4 text-lg leading-7 text-ink-200">{lead}</p>
    </div>
  )
}

/** Five brass stars — the reference's stars are `primary-400`, never amber. */
export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star key={index} className="h-5 w-5 fill-primary-400 text-primary-400" />
      ))}
    </span>
  )
}
