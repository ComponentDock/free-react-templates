import { getDateParts } from '../date'

export interface DateCardProps {
  date?: Date
}

const bandClasses =
  'bg-brand py-[1.6rem] text-center text-[13px] font-medium uppercase tracking-[0.35em] text-white'

export function DateCard({ date = new Date() }: DateCardProps) {
  const { weekday, month, day, year } = getDateParts(date)

  return (
    <div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-white shadow-[0_15px_30px_-16px_rgba(0,0,0,0.3)]">
      <div className={bandClasses}>{weekday}</div>
      <div className="pt-[1.75rem] text-center text-[1.5em] font-extralight text-black">
        {month}
      </div>
      <div className="pb-[1.75rem] text-center text-[3em] font-thin leading-none text-black">
        {day}
      </div>
      <div className={bandClasses}>{year}</div>
    </div>
  )
}
