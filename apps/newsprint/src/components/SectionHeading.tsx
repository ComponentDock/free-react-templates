interface SectionHeadingProps {
  title: string
  className?: string
}

/** Centered section heading with an accent underline, matching the
    reference's bold centered section titles. */
export function SectionHeading({ title, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-12 rounded-full bg-accent" />
    </div>
  )
}
