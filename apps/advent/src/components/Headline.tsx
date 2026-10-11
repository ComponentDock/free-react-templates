import { cn } from '@free-react-templates/ui'

export interface HeadlineProps {
  className?: string
}

/** The white uppercase title plus its lighter under-construction line. */
export function Headline({ className }: HeadlineProps) {
  return (
    <div className={cn('flex w-full flex-col items-center', className)}>
      <h1 className="pb-[10px] text-center font-heading text-[60px] leading-[1.2] font-bold text-white uppercase max-[576px]:text-[38px]">
        We&apos;re Launching Soon
      </h1>

      <p className="max-w-[526px] pb-[43px] text-center font-sans text-[24px] leading-[1.5] text-white">
        Our new site is under construction — leave your details and we&apos;ll let you know the
        moment it goes live.
      </p>
    </div>
  )
}
