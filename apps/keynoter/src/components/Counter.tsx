import { NEXT_EVENT } from '../content'
import { pad, useCountdown } from '../lib/countdown'
import { Container } from './ui'

/**
 * 241px navy band: the event identity on the left (with the hot-pink time pill)
 * and four 60px countdown numerals on the right. The reference points its
 * countdown at a 2019 date and renders `00`; this one counts to the future
 * `NEXT_EVENT` constant.
 */
export function Counter() {
  const remaining = useCountdown(NEXT_EVENT.iso)
  const cells = [
    { unit: 'Days', value: remaining.days },
    { unit: 'Hours', value: remaining.hours },
    { unit: 'Minutes', value: remaining.minutes },
    { unit: 'Seconds', value: remaining.seconds },
  ]

  return (
    <section id="event" className="bg-navy py-[40px] text-white lg:py-[55px]">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-[44px] leading-[1.1] font-black text-white md:text-[54px] lg:text-[60px]">
            {NEXT_EVENT.heading}
          </h2>
          <p className="mt-[14px] text-[18px] leading-[1.6] md:text-[24px]">
            {NEXT_EVENT.label}
            <span className="mt-2 ml-0 inline-block bg-pink px-[15px] py-[9px] text-[16px] leading-none text-white md:ml-3 md:mt-0">
              {NEXT_EVENT.time}
            </span>
          </p>
        </div>
        <dl className="flex items-start justify-between gap-4 sm:gap-10 lg:gap-[60px]">
          {cells.map((cell) => (
            <div key={cell.unit} className="flex flex-col-reverse items-center lg:items-start">
              <dt className="mt-2 text-[16px] leading-none text-white md:text-[18px]">{cell.unit}</dt>
              <dd className="text-[38px] leading-none font-black tabular-nums md:text-[50px] lg:text-[60px]">
                {pad(cell.value)}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
