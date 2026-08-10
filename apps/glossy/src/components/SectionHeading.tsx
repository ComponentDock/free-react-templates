import { areaHeadingSubtitle } from '../data'

interface SectionHeadingProps {
  title: string
}

/** Centered area heading with a 70×2px coral underline. */
export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h3 className="relative inline-block pb-4 font-display text-3xl font-semibold text-heading after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[70px] after:-translate-x-1/2 after:bg-brand">
        {title}
      </h3>
      <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-body">{areaHeadingSubtitle}</p>
    </div>
  )
}
