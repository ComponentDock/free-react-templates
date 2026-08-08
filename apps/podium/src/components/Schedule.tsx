import { useState } from 'react'
import { Calendar, Download, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type EventType = 'Break' | 'Keynote' | 'Talk' | 'Workshop' | 'Networking'

interface ScheduleEvent {
  time: string
  type: EventType
  title: string
  speaker?: string
  location: string
  cta?: boolean
}

interface ScheduleDay {
  id: string
  label: string
  sublabel: string
  events: ScheduleEvent[]
}

const typeStyles: Record<EventType, string> = {
  Break: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
  Keynote: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400',
  Talk: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400',
  Workshop: 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-400',
  Networking: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
}

const legend: EventType[] = ['Keynote', 'Talk', 'Workshop', 'Break', 'Networking']

const days: ScheduleDay[] = [
  {
    id: 'day1',
    label: 'March 15',
    sublabel: 'Day 1',
    events: [
      { time: '8:00 AM', type: 'Break', title: 'Registration & Breakfast', location: 'Main Lobby' },
      {
        time: '9:00 AM',
        type: 'Keynote',
        title: 'Opening Keynote: The Future of AI',
        speaker: 'Dr. Sarah Chen',
        location: 'Main Stage',
        cta: true,
      },
      {
        time: '10:30 AM',
        type: 'Break',
        title: 'Coffee Break & Networking',
        location: 'Exhibition Hall',
      },
      {
        time: '11:00 AM',
        type: 'Talk',
        title: 'Scaling Infrastructure for the Next Billion',
        speaker: 'Marcus Johnson',
        location: 'Main Stage',
        cta: true,
      },
      {
        time: '12:00 PM',
        type: 'Break',
        title: 'Lunch & Sponsor Showcase',
        location: 'Grand Ballroom',
      },
      {
        time: '1:30 PM',
        type: 'Workshop',
        title: 'Workshop: Building with AI APIs',
        speaker: 'Various',
        location: 'Workshop Room A',
        cta: true,
      },
      {
        time: '3:00 PM',
        type: 'Talk',
        title: 'Design Systems at Scale',
        speaker: 'David Kim',
        location: 'Room B',
        cta: true,
      },
      {
        time: '4:00 PM',
        type: 'Talk',
        title: 'Panel: The Future of Work',
        speaker: 'Industry Leaders',
        location: 'Main Stage',
        cta: true,
      },
      {
        time: '5:30 PM',
        type: 'Networking',
        title: 'Welcome Reception',
        location: 'Rooftop Terrace',
      },
    ],
  },
  {
    id: 'day2',
    label: 'March 16',
    sublabel: 'Day 2',
    events: [
      {
        time: '8:30 AM',
        type: 'Break',
        title: 'Breakfast & Networking',
        location: 'Main Lobby',
      },
      {
        time: '9:30 AM',
        type: 'Keynote',
        title: 'Building Sustainable Tech Companies',
        speaker: 'Elena Rodriguez',
        location: 'Main Stage',
        cta: true,
      },
      { time: '10:30 AM', type: 'Break', title: 'Coffee Break', location: 'Exhibition Hall' },
      {
        time: '11:00 AM',
        type: 'Talk',
        title: 'Zero Trust Architecture in Practice',
        speaker: 'Aisha Patel',
        location: 'Main Stage',
        cta: true,
      },
      { time: '12:00 PM', type: 'Break', title: 'Lunch', location: 'Grand Ballroom' },
      {
        time: '1:30 PM',
        type: 'Workshop',
        title: 'Workshop: Kubernetes Deep Dive',
        speaker: 'Various',
        location: 'Workshop Room A',
        cta: true,
      },
      {
        time: '1:30 PM',
        type: 'Workshop',
        title: 'Workshop: Product Design Sprint',
        speaker: 'Various',
        location: 'Workshop Room B',
        cta: true,
      },
      {
        time: '4:00 PM',
        type: 'Talk',
        title: 'Quantum Computing: Theory to Reality',
        speaker: 'James Wright',
        location: 'Main Stage',
        cta: true,
      },
      {
        time: '5:30 PM',
        type: 'Networking',
        title: 'Conference Party',
        location: 'The Grand Hall',
      },
    ],
  },
  {
    id: 'day3',
    label: 'March 17',
    sublabel: 'Day 3',
    events: [
      { time: '9:00 AM', type: 'Break', title: 'Breakfast', location: 'Main Lobby' },
      {
        time: '10:00 AM',
        type: 'Talk',
        title: 'Lightning Talks',
        speaker: 'Community Speakers',
        location: 'Main Stage',
        cta: true,
      },
      {
        time: '11:30 AM',
        type: 'Workshop',
        title: 'Unconference Sessions',
        speaker: 'Various',
        location: 'Various Rooms',
        cta: true,
      },
      { time: '12:30 PM', type: 'Break', title: 'Lunch', location: 'Grand Ballroom' },
      {
        time: '2:00 PM',
        type: 'Keynote',
        title: "Closing Keynote: What's Next",
        speaker: 'Special Guest',
        location: 'Main Stage',
        cta: true,
      },
      {
        time: '3:30 PM',
        type: 'Keynote',
        title: 'Closing Remarks & Awards',
        location: 'Main Stage',
      },
      {
        time: '4:00 PM',
        type: 'Networking',
        title: 'Farewell Networking',
        location: 'Main Lobby',
      },
    ],
  },
]

const daysById = Object.fromEntries(days.map((d) => [d.id, d])) as Record<string, ScheduleDay>

export function Schedule() {
  const [activeDay, setActiveDay] = useState(days[0]!.id)
  const day = daysById[activeDay]!

  return (
    <section id="schedule" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            3-Day Event
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Event{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Schedule
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Three days packed with inspiring talks, hands-on workshops, and networking
            opportunities.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Conference days"
          className="mt-10 inline-flex rounded-full border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800"
        >
          {days.map((d) => (
            <button
              key={d.id}
              role="tab"
              id={`tab-${d.id}`}
              aria-selected={d.id === activeDay}
              aria-controls={`panel-${d.id}`}
              onClick={() => setActiveDay(d.id)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                d.id === activeDay
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white',
              )}
            >
              {d.label} {d.sublabel}
            </button>
          ))}
        </div>

        <div
          id={`panel-${day.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${day.id}`}
          className="mt-12 space-y-4"
        >
          {day.events.map((event) => (
            <article
              key={`${event.time}-${event.title}`}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="w-24 shrink-0 text-sm font-semibold text-gray-900 dark:text-white">
                {event.time}
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className={cn(
                    'inline-block rounded-full px-3 py-1 text-xs font-semibold',
                    typeStyles[event.type],
                  )}
                >
                  {event.type}
                </span>
                <h3 className="mt-2 font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                  {event.speaker && <span>{event.speaker}</span>}
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {event.location}
                  </span>
                </p>
              </div>
              {event.cta && (
                <a
                  href="#schedule"
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary-500 transition-colors hover:text-primary-600"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Add to Calendar
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Legend</span>
            {legend.map((type) => (
              <span
                key={type}
                className={cn(
                  'inline-block rounded-full px-3 py-1 text-xs font-semibold',
                  typeStyles[type],
                )}
              >
                {type}
              </span>
            ))}
          </div>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 transition-colors hover:text-primary-600"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Full Schedule (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
