import { dateParts } from '../lib/calendar'

interface DateLeafProps {
  /** The floating start value; the leaf's three labels all derive from it. */
  start: string
}

/**
 * The date leaf: a blue month cap flush with the leaf's top edge, a big ink day
 * number and a small grey weekday. It hangs 30 px below the photograph.
 */
export function DateLeaf({ start }: DateLeafProps) {
  const { month, day, weekday } = dateParts(start)

  return (
    <div className="absolute bottom-[-30px] left-[18px] z-10 flex h-[79px] w-[68px] flex-col items-center overflow-hidden rounded-[14px] bg-white shadow-[0_10px_24px_-8px_rgba(0,0,0,.35)]">
      <p className="m-0 h-[21px] w-full bg-blue-700 text-center text-[12px] leading-[21px] font-extrabold tracking-[.12em] text-white uppercase">
        {month}
      </p>
      <p className="m-0 flex flex-1 flex-col items-center gap-[3px] pt-[6px]">
        <span className="text-[28px] leading-none font-extrabold tracking-[-.03em] text-neutral-900">
          {day}
        </span>
        <span className="text-[12px] leading-none font-semibold text-neutral-600">{weekday}</span>
      </p>
    </div>
  )
}
