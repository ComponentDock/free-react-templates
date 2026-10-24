import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  children: string
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
}

/** Uppercase 22px section heading with the brand rule above it. */
export function SectionHeading({ children, tone = 'dark', align = 'left' }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        'relative pt-5 text-[22px] uppercase',
        tone === 'dark' ? 'text-black' : 'text-white',
        align === 'center' ? 'text-center' : 'text-left',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-0 h-[2px] w-[70px] bg-brand',
          align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0',
        )}
      />
      {children}
    </h2>
  )
}
