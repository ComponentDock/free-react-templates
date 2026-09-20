import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'

const eventDates: ReadonlyArray<{ date: string; title: string }> = [
  { date: 'Dec 01', title: 'World AIDS Day' },
  { date: 'Dec 16', title: 'Victory Day Celebration' },
  { date: 'Dec 25', title: 'Christmas Day Arrangement' },
]

export function Calendar() {
  return (
    <section
      id="calendar"
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/jamboree-cal/1920/915)' }}
    >
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white">Event Calendar</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Stay updated with our upcoming events and mark your calendar for the most exciting
            conferences.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between rounded-t-xl bg-white/10 px-6 py-4 backdrop-blur-sm">
            <button
              type="button"
              aria-label="Previous month"
              className="text-white/70 transition-colors hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-lg font-medium text-white">December 2026</span>
            <button
              type="button"
              aria-label="Next month"
              className="text-white/70 transition-colors hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-px bg-white/10 text-center text-sm text-white/60">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="bg-white/5 py-3 font-medium text-white/80">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 0
              const inMonth = day >= 1 && day <= 31
              const hasEvent = eventDates.some((e) => e.date.includes(String(day).padStart(2, '0')))
              return (
                <div
                  key={i}
                  className={`flex items-center justify-center py-3 ${
                    inMonth ? 'text-white' : 'text-white/20'
                  } ${hasEvent ? 'font-bold text-brand' : ''}`}
                >
                  {inMonth ? day : ''}
                </div>
              )
            })}
          </div>
          <div className="mt-4 space-y-2">
            {eventDates.map((event) => (
              <div
                key={event.date}
                className="flex items-center justify-between rounded-lg bg-white px-6 py-3 text-ink transition-colors hover:bg-brand hover:text-white"
              >
                <div className="flex items-center gap-4">
                  <CalendarDays className="h-4 w-4 text-brand" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <span className="text-sm">{event.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
