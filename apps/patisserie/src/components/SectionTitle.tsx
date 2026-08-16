import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  heading: string
  className?: string
}

/**
 * Centered section heading with the signature gold underline bar
 * (100px × 2px #E5BF4A, offset 29px below the heading).
 */
export function SectionTitle({ heading, className }: SectionTitleProps) {
  return (
    <div className={cn('relative text-center', className)}>
      <h2 className="font-display text-[40px] leading-[1.3] text-heading">{heading}</h2>
      <span
        aria-hidden="true"
        className="absolute -bottom-[29px] left-1/2 h-[2px] w-[100px] -translate-x-1/2 bg-brand"
      />
    </div>
  )
}
