interface SectionTitleProps {
  eyebrow: string
  title: string
}

/* Centered section header: gradient-clipped uppercase eyebrow, serif headline,
   and the short grey rule beneath. */
export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-[75px] max-w-[720px] text-center">
      <p className="brand-gradient-text text-[13px] font-semibold uppercase tracking-[1px]">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-[36px] font-bold text-ink lg:text-[48px]">{title}</h1>
      <span aria-hidden="true" className="mt-5 inline-block h-[5px] w-[100px] bg-titlebar" />
    </div>
  )
}
