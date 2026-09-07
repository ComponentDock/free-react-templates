import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getDays(): string[] {
  return Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))
}

function getYears(): string[] {
  const current = new Date().getFullYear()
  return Array.from({ length: 121 }, (_, i) => String(current - i))
}

interface DateGroupProps {
  day: string
  month: string
  year: string
  onDayChange: (v: string) => void
  onMonthChange: (v: string) => void
  onYearChange: (v: string) => void
  className?: string
}

export function DateGroup({
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
  className,
}: DateGroupProps) {
  const days = getDays()
  const years = getYears()

  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-[5px] border border-line',
        className,
      )}
    >
      {/* Day */}
      <div className="relative flex items-center">
        <select
          value={day}
          onChange={(e) => onDayChange(e.target.value)}
          aria-label="Day"
          className="w-[90px] appearance-none border-none bg-transparent py-[15px] pl-5 pr-8 text-[13px] text-ink outline-none"
        >
          <option value="">Day</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <ChevronDown size={10} className="pointer-events-none absolute right-2 text-ink" />
      </div>

      {/* Divider */}
      <div className="h-[30px] w-px bg-line" />

      {/* Month */}
      <div className="relative flex items-center">
        <select
          value={month}
          onChange={(e) => onMonthChange(e.target.value)}
          aria-label="Month"
          className="w-[90px] appearance-none border-none bg-transparent py-[15px] pl-5 pr-8 text-[13px] text-ink outline-none"
        >
          <option value="">Month</option>
          {MONTHS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <ChevronDown size={10} className="pointer-events-none absolute right-2 text-ink" />
      </div>

      {/* Divider */}
      <div className="h-[30px] w-px bg-line" />

      {/* Year */}
      <div className="relative flex items-center">
        <select
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          aria-label="Year"
          className="w-[90px] appearance-none border-none bg-transparent py-[15px] pl-5 pr-8 text-[13px] text-ink outline-none"
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <ChevronDown size={10} className="pointer-events-none absolute right-2 text-ink" />
      </div>
    </div>
  )
}
