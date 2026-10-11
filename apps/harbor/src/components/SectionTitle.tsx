import { cn } from '@free-react-templates/ui'

type Tone = 'ink' | 'light'

interface SectionTitleProps {
  children: React.ReactNode
  /** `light` renders white type for the dark bands; `ink` is the default on white. */
  tone?: Tone
  /** `left` matches the pricing band's left-aligned title. */
  align?: 'center' | 'left'
  className?: string
}

/**
 * Centered/left uppercase section heading with the small zig-zag accent that
 * sits under every section title in the design.
 */
export function SectionTitle({
  children,
  tone = 'ink',
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-16', align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2
        className={cn(
          'text-2xl font-bold uppercase tracking-wide sm:text-3xl',
          tone === 'light' ? 'text-white' : 'text-[#111]',
        )}
      >
        {children}
      </h2>
      <svg
        aria-hidden="true"
        viewBox="0 0 83 13"
        className={cn('mt-3 h-3 w-[83px] text-brand', align === 'center' ? 'mx-auto' : '')}
      >
        <path
          d="M2 11 12 3l10 8 10-8 10 8 10-8 10 8 10-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
