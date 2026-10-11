import { cn } from '@free-react-templates/ui'
import { Attribution } from './Attribution'
import { Background } from './Background'
import { Countdown } from './Countdown'
import { Headline } from './Headline'
import { NotifyForm } from './NotifyForm'
import { SmallPrint } from './SmallPrint'
import { Wordmark } from './Wordmark'

export interface UnderConstructionProps {
  className?: string
}

/**
 * One full-viewport screen: a static photo behind a single centred translucent
 * card holding the wordmark, the under-construction line, the countdown row,
 * the notify form, the small print and the attribution.
 */
export function UnderConstruction({ className }: UnderConstructionProps) {
  return (
    <>
      <Background />
      <main
        className={cn(
          'relative z-[1] flex min-h-screen w-full items-center justify-center px-[15px] py-[55px]',
          className,
        )}
      >
        <div className="w-full max-w-[880px] rounded-card bg-card px-[15px] pt-[80px] pb-[45px] min-[576px]:pt-[175px]">
          <Wordmark />
          <Headline />
          <Countdown />
          <NotifyForm />
          <SmallPrint />
          <Attribution />
        </div>
      </main>
    </>
  )
}
