import { useState } from 'react'
import { Plus, Calendar as CalendarIcon, Trash2 } from 'lucide-react'

interface EventItem {
  date: string
  title: string
  time?: string
}

interface EventSidebarProps {
  selectedDate: Date
  events: EventItem[]
  onAddEvent: (event: { date: string; title: string; time?: string }) => void
  onDeleteEvent: (index: number) => void
}

function toLocalDateString(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function EventSidebar({
  selectedDate,
  events,
  onAddEvent,
  onDeleteEvent,
}: EventSidebarProps) {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('09:00')

  const dateString = toLocalDateString(selectedDate)
  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const dayEvents = events.filter((e) => e.date === dateString)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAddEvent({
      date: dateString,
      title: title.trim(),
      time,
    })
    setTitle('')
  }

  return (
    <aside
      aria-label="Event schedule sidebar"
      className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs lg:w-96"
    >
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <CalendarIcon size={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-500">Schedule for</h3>
          <p className="text-base font-bold text-slate-900">{formattedDate}</p>
        </div>
      </div>

      <div className="flex-1 py-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
          Events ({dayEvents.length})
        </h4>

        {dayEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <CalendarIcon size={32} className="mb-2 opacity-40" />
            <p className="text-sm">No events scheduled for this day.</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {dayEvents.map((ev, index) => (
              <li
                key={index}
                className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/20"
              >
                <div>
                  {ev.time && (
                    <span className="text-xs font-semibold text-indigo-600 mb-1 block">
                      {ev.time}
                    </span>
                  )}
                  <p className="text-sm font-medium text-slate-900">{ev.title}</p>
                </div>
                <button
                  onClick={() => onDeleteEvent(index)}
                  aria-label={`Delete event ${ev.title}`}
                  className="text-slate-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-auto border-t border-slate-100 pt-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Add New Event
        </h4>
        <div className="flex flex-col gap-3">
          <div>
            <label htmlFor="event-title" className="block text-xs font-medium text-slate-600 mb-1">
              Event Title
            </label>
            <input
              id="event-title"
              type="text"
              placeholder="e.g. Team Meeting"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden"
            />
          </div>
          <div>
            <label htmlFor="event-time" className="block text-xs font-medium text-slate-600 mb-1">
              Time
            </label>
            <input
              id="event-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-hidden"
            />
          </div>
          <button
            type="submit"
            className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            <Plus size={16} />
            Add Event
          </button>
        </div>
      </form>
    </aside>
  )
}
