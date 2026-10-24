export interface SectionHeadingProps {
  eyebrow: string
  title: string
  accent?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, accent, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="text-center">
        <span className="mb-1 block text-[16px] font-semibold text-deep-amber">{eyebrow}</span>
        <h2 className="text-[40px] font-medium leading-[1.4] text-black/80 lg:text-[54px]">
          {title}
          {accent ? <span className="text-brand"> {accent}</span> : null}
        </h2>
      </div>
    </div>
  )
}
