interface SectionTitleProps {
  overline: string
  title: string
  align?: 'center' | 'left'
}

export function SectionTitle({ overline, title, align = 'center' }: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto mb-12 max-w-2xl text-center' : 'mb-8 max-w-2xl'}>
      <h4 className="mb-2 font-display text-sm font-semibold tracking-widest text-muted uppercase">
        {overline}
      </h4>
      <h2 className="relative inline-block font-display text-3xl font-bold text-ink md:text-4xl">
        {title}
        <span
          aria-hidden="true"
          className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-brand"
        />
      </h2>
    </div>
  )
}
