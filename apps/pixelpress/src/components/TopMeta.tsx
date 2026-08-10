import { cn } from '@free-react-templates/ui'

interface TopMetaProps {
  date: string
  category: string
  /** Dark variant (muted text) for light panels, default light for dark sections. */
  dark?: boolean
}

/** Article meta row: "11.11.18 / in <Category>" with a magenta category link. */
export function TopMeta({ date, category, dark = false }: TopMetaProps) {
  return (
    <p
      className={cn('top-meta mb-5 text-[18px] font-medium', dark ? 'text-muted' : 'text-white/60')}
    >
      {date} / in{' '}
      <a href="#" className="text-magenta transition-colors hover:text-magenta-bright">
        {category}
      </a>
    </p>
  )
}
