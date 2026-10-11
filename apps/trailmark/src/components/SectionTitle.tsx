import { SECTION_SUBTITLE } from '../data/content'

interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-light text-navy sm:text-4xl">{title}</h2>
      <p className="mt-5 text-base uppercase tracking-[0.08em] text-muted">{SECTION_SUBTITLE}</p>
    </div>
  )
}
