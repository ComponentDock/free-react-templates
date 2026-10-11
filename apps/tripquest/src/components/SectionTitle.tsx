import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

/* Centered section heading: charcoal h1 over a grey supporting line — the
   repeating title pattern of the reference layout (max width ~620px). */
export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('mx-auto mb-[70px] max-w-[620px] px-4 text-center', className)}>
      <h1 className="font-display text-[30px] font-semibold text-ink md:text-[36px]">{title}</h1>
      {subtitle ? (
        <p className="mt-[18px] text-[15px] leading-[1.8] text-body">{subtitle}</p>
      ) : null}
    </div>
  )
}
