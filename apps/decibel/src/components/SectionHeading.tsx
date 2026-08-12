interface SectionHeadingProps {
  title: string
  intro?: string
}

/** Centered Oswald uppercase heading with a 70×2px pink underline and an
    optional muted intro paragraph (the source site-section-heading block). */
export function SectionHeading({ title, intro }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-5 max-w-xl text-center">
      <h2 className="font-display text-2xl font-medium uppercase tracking-[0.2em] text-white md:text-[2rem]">
        {title}
      </h2>
      <span aria-hidden="true" className="mx-auto mt-3 block h-[2px] w-[70px] bg-primary" />
      {intro ? <p className="mt-4 text-white/50">{intro}</p> : null}
    </div>
  )
}
