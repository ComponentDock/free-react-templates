import { cn } from '@free-react-templates/ui'

interface TemporalCardProps {
  label: string
  value: string | number
  sublabel?: string
  variant?: 'prev' | 'current' | 'next'
}

function TemporalCard({ label, value, sublabel, variant = 'current' }: TemporalCardProps) {
  const isCurrent = variant === 'current'
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl px-4 py-6 transition-all',
        isCurrent ? 'scale-100 bg-white/20 shadow-lg' : 'scale-90 bg-white/10 opacity-60',
      )}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-white/60">{label}</span>
      <span
        className={cn(
          'font-bold text-white',
          isCurrent ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl',
        )}
      >
        {value}
      </span>
      {sublabel && <span className="mt-1 text-sm text-white/70">{sublabel}</span>}
    </div>
  )
}

interface TimePanelProps {
  title: string
  bgClass: string
  previous: { label: string; value: string | number; sublabel?: string }
  current: { label: string; value: string | number; sublabel?: string }
  next: { label: string; value: string | number; sublabel?: string }
}

function TimePanel({ title, bgClass, previous, current, next }: TimePanelProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between rounded-2xl px-4 py-8 md:px-6',
        bgClass,
      )}
    >
      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/80">{title}</h3>
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex flex-1 justify-center">
          <TemporalCard {...previous} variant="prev" />
        </div>
        <div className="flex flex-1 justify-center">
          <TemporalCard {...current} variant="current" />
        </div>
        <div className="flex flex-1 justify-center">
          <TemporalCard {...next} variant="next" />
        </div>
      </div>
    </div>
  )
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

function getMonthName(index: number): string {
  return MONTHS[((index % 12) + 12) % 12]!
}

export function CalendarDashboard() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const day = now.getDate()

  const yearPanels = {
    previous: { label: 'Previous', value: year - 1 },
    current: { label: 'Year', value: year },
    next: { label: 'Next', value: year + 1 },
  }

  const monthPanels = {
    previous: {
      label: 'Previous',
      value: getMonthName(month - 1),
      sublabel: String(month === 0 ? 11 : month - 1 + 1),
    },
    current: {
      label: 'Month',
      value: getMonthName(month),
      sublabel: String(month + 1),
    },
    next: {
      label: 'Next',
      value: getMonthName(month + 1),
      sublabel: String(month === 11 ? 1 : month + 2),
    },
  }

  const dayPanels = {
    previous: {
      label: 'Yesterday',
      value: day - 1 > 0 ? day - 1 : 28,
    },
    current: {
      label: 'Day',
      value: day,
      sublabel: getMonthName(month),
    },
    next: {
      label: 'Tomorrow',
      value: day + 1,
    },
  }

  return (
    <section id="calendar" className="w-full bg-[--color-page] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TimePanel
            title="Year"
            bgClass="bg-[--color-year]"
            previous={yearPanels.previous}
            current={yearPanels.current}
            next={yearPanels.next}
          />
          <TimePanel
            title="Month"
            bgClass="bg-[--color-month]"
            previous={monthPanels.previous}
            current={monthPanels.current}
            next={monthPanels.next}
          />
          <TimePanel
            title="Day"
            bgClass="bg-[--color-day]"
            previous={dayPanels.previous}
            current={dayPanels.current}
            next={dayPanels.next}
          />
        </div>
      </div>
    </section>
  )
}
