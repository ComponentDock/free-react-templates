import { cn } from '@free-react-templates/ui'
import { Logo } from './Logo'
import { Headline } from './Headline'
import { SubscribeForm } from './SubscribeForm'
import { Socials } from './Socials'
import { Attribution } from './Attribution'
import { Countdown } from './Countdown'

export interface ComingSoonProps {
  className?: string
}

/**
 * One full-viewport screen: a white subscription panel beside (or above, when
 * stacked) a dark photo panel carrying the countdown.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <div className={cn('relative z-[1] min-h-screen w-full overflow-x-hidden bg-white', className)}>
      <Countdown />

      <div className="relative flex w-full max-w-[650px] flex-col justify-between bg-white px-[30px] pb-[45px] lg:min-h-screen lg:px-[75px] lg:py-[45px]">
        <Logo />

        <div className="pt-[50px] pb-[60px]">
          <Headline />
          <SubscribeForm />
          <p className="pt-[18px] font-lato text-[14px] leading-[1.5] text-muted">
            And don&rsquo;t worry, we hate spam too! You can unsubscribe at anytime.
          </p>
        </div>

        <div>
          <Socials />
          <Attribution />
        </div>
      </div>
    </div>
  )
}
