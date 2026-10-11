import { cn } from '@free-react-templates/ui'

export interface HeadlineProps {
  className?: string
}

/** The heavy uppercase title, dropping a size step on phones. */
export function Headline({ className }: HeadlineProps) {
  return (
    <h1
      className={cn(
        'pb-[45px] font-heading text-[70px] leading-[1.1] font-bold text-white uppercase',
        'max-[576px]:text-[50px] max-[1200px]:text-center',
        className,
      )}
    >
      Coming Soon
    </h1>
  )
}
