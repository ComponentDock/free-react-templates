import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  children: string
  className?: string
}

/** Centered section heading with the reference's 4px × 80px green underline. */
export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'relative mb-[50px] pb-[15px] text-center text-3xl font-bold text-ink',
        "after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:bg-brand after:content-['']",
        className,
      )}
    >
      {children}
    </h2>
  )
}
