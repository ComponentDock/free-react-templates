interface SectionHeadingProps {
  subheading: string
  title: string
  intro?: string
}

/** Centered heading block: uppercase letter-spaced subheading + 34px title +
    optional muted intro paragraph (the source .heading-section block). */
export function SectionHeading({ subheading, title, intro }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-medium uppercase tracking-[2px] text-ink">{subheading}</p>
      <h2 className="mt-2 text-[28px] font-normal text-ink md:text-[34px]">{title}</h2>
      {intro ? <p className="mt-4 leading-relaxed text-mist">{intro}</p> : null}
    </div>
  )
}
