import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  children: string
  className?: string
}

/** Centered brand-blue section heading (40px desktop / 30px mobile, weight
 *  900) matching the reference's `.section-title` token. */
export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn('mb-3 text-center text-3xl font-black text-brand sm:text-[40px]', className)}>
      {children}
    </h2>
  )
}
