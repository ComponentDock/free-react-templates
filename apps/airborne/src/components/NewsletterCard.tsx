import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { NewsletterForm } from './NewsletterForm'

export interface NewsletterCardProps {
  className?: string
}

/**
 * The white rounded card on the right of the band: a heavy uppercase title,
 * the two-well form with its green pill and a small spam note, with the
 * template's Component Dock credit as the only addition to the design.
 */
export function NewsletterCard({ className }: NewsletterCardProps) {
  return (
    <div
      className={cn(
        'w-[390px] max-w-full rounded-card bg-card pt-[50px] pb-[18px] px-[45px]',
        'max-[576px]:px-[15px]',
        className,
      )}
    >
      <h2 className="pb-[43px] text-center font-heading text-[30px] leading-[1.2] font-bold text-title uppercase">
        Newsletter
      </h2>

      <NewsletterForm />

      <p className="px-[15px] pt-[25px] text-center font-sans text-[13px] leading-[1.5] text-note">
        And don&apos;t worry, we hate spam too! You can unsubscribe at anytime.
      </p>

      <Attribution />
    </div>
  )
}
