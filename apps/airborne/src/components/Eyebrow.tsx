import { cn } from '@free-react-templates/ui'

export interface EyebrowProps {
  className?: string
}

/** The light uppercase line above the headline. */
export function Eyebrow({ className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'pb-[10px] font-sans text-[30px] leading-[1.2] text-white uppercase',
        'max-[1200px]:text-center',
        className,
      )}
    >
      Our website is
    </p>
  )
}
