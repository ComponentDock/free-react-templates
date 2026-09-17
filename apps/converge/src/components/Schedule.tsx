const day1 = [
  { time: '08:00 AM – 09:00 AM', title: 'Grand Opening', host: 'Maria Smith' },
  { time: '09:00 AM – 10:00 AM', title: 'Marketing 101', host: 'James Williams' },
  { time: '10:00 AM – 11:00 AM', title: 'Big Marketing Strategy', host: 'Michael Parker' },
  { time: '11:00 AM – 12:00 PM', title: 'Coffee Break', host: 'Networking Lounge' },
  { time: '12:00 PM – 01:00 PM', title: 'Online Strategy', host: 'Gabriel Kim' },
]

const day2 = [
  { time: '08:00 AM – 09:00 AM', title: 'Grand Opening', host: 'Christine Brown' },
  { time: '09:00 AM – 10:00 AM', title: 'Marketing 101', host: 'Laura White' },
  { time: '10:00 AM – 11:00 AM', title: 'Big Marketing Strategy', host: 'Maria Smith' },
  { time: '11:00 AM – 12:00 PM', title: 'Coffee Break', host: 'Networking Lounge' },
  { time: '12:00 PM – 01:00 PM', title: 'Online Strategy', host: 'James Williams' },
]

export interface ScheduleProps {
  className?: string
}

function DayColumn({ label, date, items }: { label: string; date: string; items: typeof day1 }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="rounded-t-lg bg-navy px-6 py-4 text-center text-sm font-bold text-white">
        {label}. <span className="font-normal text-gray-300">{date}</span>
      </div>
      <ul className="divide-y divide-gray-100">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-4 px-6 py-4">
            <img
              src={`https://picsum.photos/seed/sched${label}${i}/80/80`}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="text-xs font-medium text-muted">{item.time}</div>
              <div className="text-sm font-bold text-navy">{item.title}</div>
              <div className="text-xs text-body">
                Host: <span className="font-medium text-primary-400">{item.host}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Schedule({ className }: ScheduleProps) {
  return (
    <section className={`bg-gray-50 py-20 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-400">
            See what&apos;s all about
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">Schedule</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <DayColumn label="Day 1" date="February 12, 2025" items={day1} />
          <DayColumn label="Day 2" date="February 13, 2025" items={day2} />
        </div>
      </div>
    </section>
  )
}
