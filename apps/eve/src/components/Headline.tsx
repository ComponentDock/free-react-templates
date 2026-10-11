import { cn } from '@free-react-templates/ui'

export interface HeadlineProps {
  className?: string
}

/** The white uppercase title and its lighter subtitle over the gradient. */
export function Headline({ className }: HeadlineProps) {
  return (
    <>
      <h1
        className={cn(
          'pb-[10px] text-center font-heading text-[50px] leading-[1.2] font-black text-white uppercase',
          className,
        )}
      >
        Coming Soon
      </h1>

      <p className="pb-[60px] text-center font-heading text-[30px] leading-[1.2] font-light text-white">
        Our website is under construction
      </p>
    </>
  )
}
