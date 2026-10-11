import { cn } from '@free-react-templates/ui'

export interface HeadlineProps {
  className?: string
}

export function Headline({ className }: HeadlineProps) {
  return (
    <p className={cn('pb-[36px] font-heading text-[24px] leading-[1.5] text-ink', className)}>
      Our website is <span className="font-bold">Coming Soon</span>, follow us for update now!
    </p>
  )
}
