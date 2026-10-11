import { cn } from '@free-react-templates/ui'

export interface HeadlineProps {
  className?: string
}

/** The single grey under-construction line below the wordmark. */
export function Headline({ className }: HeadlineProps) {
  return (
    <p
      className={cn(
        'pt-[33px] pb-[68px] text-center font-heading text-[25px] leading-[1.2] font-bold text-muted',
        className,
      )}
    >
      Our website is under construction
    </p>
  )
}
