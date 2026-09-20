import { Download } from 'lucide-react'

interface EventItemProps {
  day: string
  month: string
  time: string
  title: string
  description: string
  speaker: string
}

function EventItem({ day, month, time, title, description, speaker }: EventItemProps) {
  return (
    <div className="flex gap-6 border-b border-gray-100 py-6 last:border-b-0">
      <div className="flex flex-col items-center rounded-sm bg-brand px-4 py-3 text-center text-white">
        <span className="text-2xl font-bold leading-none">{day}</span>
        <span className="text-xs uppercase">{month}</span>
      </div>
      <div className="flex-1">
        <div className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
          {time}
        </div>
        <h4 className="mb-1 text-lg font-semibold text-navy">{title}</h4>
        <p className="mb-2 text-sm text-body">{description}</p>
        <span className="text-xs font-medium text-brand">{speaker}</span>
      </div>
    </div>
  )
}

const EVENTS: EventItemProps[] = [
  {
    day: '15',
    month: 'Mar 2025',
    time: '09:00 AM - 11:00 AM',
    title: 'Opening Keynote',
    description: 'Welcome address and vision for the future of innovation.',
    speaker: 'Dr. Sarah Chen',
  },
  {
    day: '15',
    month: 'Mar 2025',
    time: '11:30 AM - 01:00 PM',
    title: 'Panel: AI in Business',
    description: 'Industry leaders discuss how artificial intelligence is transforming operations.',
    speaker: 'Marcus Williams',
  },
  {
    day: '16',
    month: 'Mar 2025',
    time: '10:00 AM - 12:00 PM',
    title: 'Workshop: Design Thinking',
    description: 'Hands-on workshop on human-centered design methodologies.',
    speaker: 'Elena Rodriguez',
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h3 className="mb-10 text-center text-3xl font-bold">
          Event <span className="text-brand">Schedule</span>
        </h3>
        <div className="mb-8">
          {EVENTS.map((event, i) => (
            <EventItem key={i} {...event} />
          ))}
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white opacity-90 transition-opacity hover:opacity-80"
          >
            <Download size={16} />
            Download Schedule
          </a>
        </div>
      </div>
    </section>
  )
}
