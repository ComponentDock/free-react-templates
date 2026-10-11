import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface ShowcaseSectionProps {
  id?: string
  title?: string
  /** Small sub-label printed under the section title (e.g. "Pick your style"). */
  subtitle?: string
  className?: string
  children: ReactNode
}

/**
 * One catalog band: a 30px/400 section heading (with an optional 18px small
 * sub-label) over the 4em vertical rhythm used by every showcase section.
 */
export function ShowcaseSection({
  id,
  title,
  subtitle,
  className,
  children,
}: ShowcaseSectionProps) {
  return (
    <section id={id} className={cn('px-4 py-[4em] sm:px-6', className)}>
      <div className="mx-auto w-full max-w-6xl">
        {title !== undefined && (
          <h2 className="mb-8 text-[30px] font-normal text-heading">
            {title}
            {subtitle !== undefined && (
              <>
                <br />
                <small className="text-[18px] font-normal">{subtitle}</small>
              </>
            )}
          </h2>
        )}
        <div className="space-y-10">{children}</div>
      </div>
    </section>
  )
}

/** Sub-group label inside a band (e.g. "Sliders" beside "Badges"). */
export function SubHeading({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('mb-3 text-2xl font-normal text-heading', className)}>{children}</h3>
}
