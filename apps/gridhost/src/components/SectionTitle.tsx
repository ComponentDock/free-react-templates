import { cn } from '@free-react-templates/ui'

export type TitleAlign = 'center' | 'left'
export type TitleTone = 'navy' | 'light' | 'support'
export type TitleSize = 'lg' | 'md'

const ALIGN: Record<TitleAlign, string> = {
  center: 'items-center text-center',
  left: 'items-start text-left',
}

const TONE: Record<TitleTone, string> = {
  navy: 'text-navy-heading',
  light: 'text-white',
  support: 'text-support-heading',
}

const SIZE: Record<TitleSize, string> = {
  lg: 'text-[38px] min-[768px]:text-[50px]',
  md: 'text-[34px] min-[768px]:text-[44px]',
}

export interface SectionTitleProps {
  eyebrow: string
  title: string
  align?: TitleAlign
  /** Which band the title sits on: navy headings, white, or the support grey. */
  tone?: TitleTone
  size?: TitleSize
  className?: string
}

/**
 * The repeating title block: an 18px/700 brand-pink eyebrow preceded by a
 * 50 × 2px pink rule, over an Oswald heading (50px, or 44px where the source's
 * `section-tittle3` is used).
 */
export function SectionTitle({
  eyebrow,
  title,
  align = 'center',
  tone = 'navy',
  size = 'lg',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col', ALIGN[align], className)}>
      <span className="mb-[12px] inline-flex items-center gap-[17px] font-heading text-[18px] font-bold tracking-[0.02em] text-brand">
        <span aria-hidden="true" className="inline-block h-[2px] w-[50px] bg-brand" />
        {eyebrow}
      </span>
      <h2 className={cn('font-heading font-semibold', SIZE[size], TONE[tone])}>{title}</h2>
    </div>
  )
}
