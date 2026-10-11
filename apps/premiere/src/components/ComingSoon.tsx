import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { Background } from './Background'
import { Countdown } from './Countdown'
import { Headline } from './Headline'
import { SubscribeForm } from './SubscribeForm'

export interface ComingSoonProps {
  className?: string
}

/**
 * One full-viewport screen: a fixed photo slideshow behind a centred column of
 * headline, countdown, subscription form and attribution.
 */
export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <>
      <Background />
      <main
        className={cn(
          'relative z-[1] flex min-h-screen w-full flex-col items-center justify-center px-[15px] py-[50px]',
          className,
        )}
      >
        <Headline />
        <Countdown />
        <SubscribeForm />
        <Attribution />
      </main>
    </>
  )
}
