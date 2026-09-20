import { useState } from 'react'

const DAYS = [
  {
    label: 'Day 01',
    events: [
      {
        time: '09:00 AM',
        title: 'Registration',
        speaker: 'Welcome',
        description: 'Check-in and collect your conference materials.',
      },
      {
        time: '10:00 AM',
        title: 'Opening Keynote',
        speaker: 'John Deo',
        description: 'The Future of Web Development in 2025.',
      },
      {
        time: '01:00 PM',
        title: 'Lunch Break',
        speaker: '',
        description: 'Networking lunch with fellow attendees.',
      },
      {
        time: '02:00 PM',
        title: 'React Workshop',
        speaker: 'Bruno Ballo',
        description: 'Building scalable UIs with React 19.',
      },
    ],
  },
  {
    label: 'Day 02',
    events: [
      {
        time: '09:00 AM',
        title: 'AI & Machine Learning',
        speaker: 'Daniel Wood',
        description: 'Practical AI applications for developers.',
      },
      {
        time: '11:00 AM',
        title: 'Cloud Architecture',
        speaker: 'Monica Aria',
        description: 'Designing resilient cloud-native systems.',
      },
      {
        time: '02:00 PM',
        title: 'DevOps Panel',
        speaker: 'Panel Discussion',
        description: 'Best practices in CI/CD and infrastructure.',
      },
    ],
  },
  {
    label: 'Day 03',
    events: [
      {
        time: '09:00 AM',
        title: 'TypeScript Deep Dive',
        speaker: 'John Deo',
        description: 'Advanced TypeScript patterns and generics.',
      },
      {
        time: '11:00 AM',
        title: 'CSS Architecture',
        speaker: 'Bruno Ballo',
        description: 'Modern CSS with Tailwind and design tokens.',
      },
      {
        time: '02:00 PM',
        title: 'Hackathon Kickoff',
        speaker: '',
        description: 'Teams form and start building.',
      },
    ],
  },
  {
    label: 'Day 04',
    events: [
      {
        time: '09:00 AM',
        title: 'Hackathon Presentations',
        speaker: 'All Teams',
        description: 'Teams present their projects to judges.',
      },
      {
        time: '12:00 PM',
        title: 'Awards Ceremony',
        speaker: 'Monica Aria',
        description: 'Announcing winners and closing remarks.',
      },
    ],
  },
]

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule" className="bg-light-gray py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-sm font-light uppercase tracking-widest text-gray-400">
          Schedule
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-charcoal">Event Schedule</h3>

        <div className="mb-8 flex justify-center gap-2">
          {DAYS.map((day, idx) => (
            <button
              key={day.label}
              onClick={() => setActiveDay(idx)}
              className={`rounded-sm px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeDay === idx ? 'bg-brand text-white' : 'bg-white text-body hover:bg-gray-100'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {DAYS[activeDay]?.events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-4 rounded-sm bg-white p-6 shadow-sm sm:flex-row sm:items-start"
            >
              <div className="shrink-0 text-sm font-semibold text-brand">{event.time}</div>
              <div>
                <h4 className="text-lg font-semibold text-charcoal">{event.title}</h4>
                {event.speaker && (
                  <p className="text-sm font-medium text-gray-400">{event.speaker}</p>
                )}
                <p className="mt-1 text-sm text-body">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
