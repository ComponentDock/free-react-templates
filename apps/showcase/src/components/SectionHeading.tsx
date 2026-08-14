interface SectionHeadingProps {
  title: string
}

/* Shared section title: 42px/600 heading with a short indigo underline,
   matching the source design's heading-section style. */
export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-[42px] font-semibold text-heading">{title}</h2>
      <span aria-hidden="true" className="mt-4 block h-0.5 w-16 bg-brand" />
    </div>
  )
}
