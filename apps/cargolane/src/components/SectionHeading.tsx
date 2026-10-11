import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  title: string
  align: 'left' | 'center'
  tone: 'primary' | 'white'
  blurb: string | null
}

export function SectionHeading({ title, align, tone, blurb }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <h2
        className={cn(
          'text-2xl uppercase tracking-[0.1em] md:text-3xl',
          tone === 'primary' ? 'font-bold text-primary' : 'font-light text-white',
        )}
      >
        {title}
      </h2>
      <div className={cn('mt-4 h-[3px] w-20 bg-primary', align === 'center' && 'mx-auto')} />
      {blurb === null ? null : <p className="mt-4">{blurb}</p>}
    </div>
  )
}
