interface SectionHeadingProps {
  script: string
  title: string
}

/* .heading-section — centered H2 (50px, weight 900, #000) with the
   signature Miss Fajardose script word (100px, brand orange) floating
   above it (source: position absolute, top -45px, z-index -1). */
export function SectionHeading({ script, title }: SectionHeadingProps) {
  return (
    <div className="relative mb-12 text-center">
      <span
        aria-hidden="true"
        className="font-script absolute top-[-45px] left-1/2 -translate-x-1/2 text-[100px] leading-none text-brand"
      >
        {script}
      </span>
      <h2 className="relative text-[50px] leading-tight font-black text-ink max-sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
