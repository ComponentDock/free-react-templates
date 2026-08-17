import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  title: string
  subtitle?: string
  /** Signature 110x3px green underline under the heading (white variant used
      under the hero h1 lives in Hero; off for the about-section titles). */
  underline?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, underline = true, className }: SectionTitleProps) {
  return (
    <div className={cn('mx-auto mb-14 max-w-2xl text-center', className)}>
      <h2 className="mb-[22px] pb-6 text-[40px] font-bold leading-[1.3] tracking-[-0.04em] text-ink">
        {title}
      </h2>
      {underline && <div aria-hidden="true" className="mx-auto mb-5 h-[3px] w-[110px] bg-brand" />}
      {subtitle && <p className="text-base leading-[1.5] text-muted">{subtitle}</p>}
    </div>
  )
}
