interface SectionTitleProps {
  title: string
  dark?: boolean
}

export function SectionTitle({ title, dark = false }: SectionTitleProps) {
  return (
    <div className={`mb-8 border-t-4 ${dark ? 'border-white pt-8' : 'border-ink pt-8'}`}>
      <div className="flex items-baseline justify-between">
        <h2
          className={`font-chivo text-[28px] font-bold ${
            dark ? 'text-white' : 'text-ink'
          } lg:text-[30px]`}
        >
          {title}
        </h2>
        <a
          href="#"
          className={`font-chivo text-[14px] font-bold underline ${
            dark ? 'text-white' : 'text-ink'
          } hover:text-brand-red transition-colors`}
        >
          See All
        </a>
      </div>
    </div>
  )
}
