import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  light = false,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left')}>
      <span className="text-lg font-semibold capitalize text-accent">{eyebrow}</span>
      <h2
        className={cn(
          'mt-2 font-display text-4xl font-semibold md:text-5xl',
          light ? 'text-white' : 'text-dark',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
