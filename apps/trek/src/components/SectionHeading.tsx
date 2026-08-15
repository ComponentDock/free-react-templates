interface SectionHeadingProps {
  backdrop: string
  label: string
  title: string
  align?: 'left' | 'center'
}

export function SectionHeading({ backdrop, label, title, align = 'center' }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div
      className={
        centered ? 'relative isolate mb-16 text-center' : 'relative isolate mb-10 text-left'
      }
    >
      <span
        aria-hidden="true"
        className={
          centered
            ? 'absolute -top-[20%] left-1/2 z-[-1] block -translate-x-1/2 text-[5rem] font-black uppercase leading-none text-ghost'
            : 'absolute -top-[20%] left-0 z-[-1] block text-[5rem] font-black uppercase leading-none text-ghost'
        }
      >
        {backdrop}
      </span>
      <span className="block text-sm font-bold uppercase tracking-[0.2em] text-sand">{label}</span>
      <h3 className="mt-2 text-[28px] font-bold text-ink">{title}</h3>
    </div>
  )
}
