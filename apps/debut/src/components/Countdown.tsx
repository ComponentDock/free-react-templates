import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { useCountdown } from '../hooks/useCountdown'
import { useTilt } from '../hooks/useTilt'

/** The demo counts to a moving target: now + 35 days + 18 hours. */
const COUNTDOWN_OFFSET_MS = 35 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000

const pad = (value: number) => String(value).padStart(2, '0')

export interface CountdownProps {
  className?: string
}

export function Countdown({ className }: CountdownProps) {
  const [target] = useState(() => Date.now() + COUNTDOWN_OFFSET_MS)
  const { days, hours, minutes, seconds } = useCountdown(target)
  const tiltRef = useTilt<HTMLDivElement>()

  const cells = [
    { label: 'Days', value: String(days) },
    { label: 'Hours', value: pad(hours) },
    { label: 'Minutes', value: pad(minutes) },
    { label: 'Seconds', value: pad(seconds) },
  ]

  return (
    <div
      className={cn(
        'relative h-[60vh] w-full bg-black',
        'lg:absolute lg:inset-y-0 lg:right-0 lg:-z-10 lg:h-full lg:w-[71%]',
        className,
      )}
    >
      <img
        src="https://picsum.photos/seed/debut-cover/1600/1200"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-overlay" />
      {/* white wedge clipping the panel's left edge on wide screens */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-full hidden w-[10000px] origin-bottom-right bg-white lg:block lg:[transform:skewX(156deg)]"
      />
      {/* stacked layout: the wedge sits under the panel instead */}
      <div
        aria-hidden="true"
        className="absolute top-full left-0 h-[10000px] w-full origin-top-right bg-white [transform:skew(180deg,8deg)] lg:hidden"
      />

      <div className="absolute inset-0 flex items-center justify-center px-[15px] py-[50px] lg:px-[50px] lg:pr-[50px] lg:pl-[320px] lg:pb-[150px]">
        <div
          ref={tiltRef}
          className="grid w-full max-w-[380px] grid-cols-2 gap-x-[20px] gap-y-[15px]"
        >
          {cells.map((cell) => (
            <div
              key={cell.label}
              className="flex aspect-square w-full max-w-[155px] flex-col items-center justify-center justify-self-center rounded-full border border-white/30"
            >
              <span className="pb-[9px] font-lato text-[40px] leading-none font-bold text-white">
                {cell.value}
              </span>
              <span className="font-lato text-[12px] leading-none text-white uppercase">
                {cell.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
