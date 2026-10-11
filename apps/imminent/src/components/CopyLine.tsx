import { cn } from '@free-react-templates/ui'

export interface CopyLineProps {
  className?: string
}

/**
 * ONE centred sentence at 36px — not an eyebrow plus a headline — where only
 * the two middle words carry the bold cut.
 */
export function CopyLine({ className }: CopyLineProps) {
  return (
    <p
      className={cn(
        'pb-[60px] text-center font-sans text-[36px] leading-[1.333333] text-white',
        className,
      )}
    >
      Our website is <span className="font-bold">Coming Soon</span>, follow us for update now!
    </p>
  )
}
