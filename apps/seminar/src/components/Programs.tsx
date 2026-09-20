interface ScheduleItem {
  time: string
  title: string
  speaker: string
}

const SCHEDULE: ScheduleItem[] = [
  { time: '8:00 AM', title: 'Design your open source strategy', speaker: 'Chris Mathews' },
  { time: '9:30 AM', title: 'Design your open source strategy', speaker: 'Chris Mathews' },
  { time: '10:30 AM', title: 'Design your open source strategy', speaker: 'Chris Mathews' },
  { time: '10:45 AM', title: 'Break With Snacks', speaker: '' },
  { time: '11:30 AM', title: 'Design your open source strategy', speaker: 'Chris Mathews' },
  { time: '12:00 PM', title: 'Break For Lunch', speaker: '' },
]

export function Programs() {
  return (
    <section id="schedule" className="py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Programs</h2>
          <div className="mx-auto h-1 w-16 rounded bg-gradient-to-r from-primary-700 to-primary-400" />
          <p className="mt-6 max-w-xl mx-auto text-text text-sm leading-relaxed">
            A full day of talks, workshops, and networking opportunities.
          </p>
        </div>
        <div className="flex flex-col">
          {SCHEDULE.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border-b border-border py-6 md:flex-row md:items-center md:justify-between md:gap-4"
            >
              <span className="text-sm font-semibold text-primary-400">{item.time}</span>
              <h3 className="flex-1 text-lg font-bold text-white">{item.title}</h3>
              {item.speaker && <span className="text-sm text-text">{item.speaker}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
