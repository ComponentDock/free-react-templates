interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl px-6 text-center">
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="mt-4 text-body">{subtitle}</p>
    </div>
  )
}
