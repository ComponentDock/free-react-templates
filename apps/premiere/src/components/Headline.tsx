import { cn } from '@free-react-templates/ui'

export interface HeadlineProps {
  className?: string
}

/** The centred text block: an uppercase title over an under-construction line. */
export function Headline({ className }: HeadlineProps) {
  return (
    <>
      <h1
        className={cn(
          'pb-[25px] text-center font-heading text-[50px] leading-[1.1] text-white uppercase',
          className,
        )}
      >
        Coming Soon
      </h1>
      <p className="pb-[48px] text-center font-lato text-[25px] leading-[1.2] font-light text-white">
        Our website is under construction, follow us for updates!
      </p>
    </>
  )
}
