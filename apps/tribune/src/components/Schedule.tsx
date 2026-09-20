import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { MapPin } from 'lucide-react'

interface Session {
  title: string
  description: string
  time: string
  location: string
  speaker: string
  position: string
  imageSeed: string
}

const schedule: Record<string, { label: string; date: string; sessions: Session[] }> = {
  day1: {
    label: 'First Day',
    date: '21 July 2019',
    sessions: [
      {
        title: 'Introduction to Business Leaders',
        description:
          'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        time: '09:00 am – 4:30 pm',
        location: 'Hall, Building Los Angeles CA',
        speaker: 'Ryan Thompson',
        position: 'Founder of Wordpress',
        imageSeed: 'tribune-speaker-1',
      },
      {
        title: 'Digital Marketing Strategies',
        description:
          'Explore the latest trends in digital marketing and how to leverage them for your business.',
        time: '09:00 am – 4:30 pm',
        location: 'Hall, Building Los Angeles CA',
        speaker: 'Sarah Johnson',
        position: 'CEO of MarketingPro',
        imageSeed: 'tribune-speaker-2',
      },
    ],
  },
  day2: {
    label: 'Second Day',
    date: '22 July 2019',
    sessions: [
      {
        title: 'Innovation and Growth',
        description:
          'Discover how leading companies foster innovation and achieve sustainable growth.',
        time: '09:00 am – 4:30 pm',
        location: 'Hall, Building Los Angeles CA',
        speaker: 'Michael Chen',
        position: 'CTO of TechVenture',
        imageSeed: 'tribune-speaker-3',
      },
      {
        title: 'Leadership in the Modern Era',
        description:
          'Learn about adaptive leadership and navigating complex business environments.',
        time: '09:00 am – 4:30 pm',
        location: 'Hall, Building Los Angeles CA',
        speaker: 'Emily Davis',
        position: 'Director of Leadership Institute',
        imageSeed: 'tribune-speaker-4',
      },
    ],
  },
  day3: {
    label: 'Third Day',
    date: '23 July 2019',
    sessions: [
      {
        title: 'Future of Work',
        description:
          'Explore how technology is reshaping the workplace and what it means for leaders.',
        time: '09:00 am – 4:30 pm',
        location: 'Hall, Building Los Angeles CA',
        speaker: 'David Kim',
        position: 'Founder of FutureWorks',
        imageSeed: 'tribune-speaker-1',
      },
      {
        title: 'Networking & Closing Ceremony',
        description:
          'Connect with fellow attendees and celebrate the achievements of the conference.',
        time: '09:00 am – 4:30 pm',
        location: 'Hall, Building Los Angeles CA',
        speaker: 'Lisa Park',
        position: 'Event Coordinator',
        imageSeed: 'tribune-speaker-2',
      },
    ],
  },
}

export function Schedule() {
  const [activeTab, setActiveTab] = useState('day1')
  const tabs = Object.entries(schedule)

  return (
    <section id="schedule" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Conference Schedule</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="flex flex-col gap-2" role="tablist" aria-orientation="vertical">
              {tabs.map(([key, day]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={activeTab === key}
                  aria-controls={`panel-${key}`}
                  onClick={() => setActiveTab(key)}
                  className={cn(
                    'rounded-lg px-4 py-3 text-left font-semibold transition-colors',
                    activeTab === key
                      ? 'bg-primary text-white'
                      : 'bg-light-bg text-gray-700 hover:bg-gray-200',
                  )}
                >
                  {day.label}
                  <span className="block text-xs font-normal opacity-80">{day.date}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-9">
            {tabs.map(([key, day]) =>
              activeTab === key ? (
                <div key={key} id={`panel-${key}`} role="tabpanel" className="space-y-6">
                  {day.sessions.map((session) => (
                    <div
                      key={session.title}
                      className="flex flex-col gap-4 rounded-lg border border-border bg-white p-4 md:flex-row"
                    >
                      <img
                        src={`https://picsum.photos/seed/${session.imageSeed}/120/120`}
                        alt={session.speaker}
                        className="h-24 w-24 rounded-lg object-cover self-start"
                      />
                      <div className="flex-1">
                        <h3 className="mb-1 text-lg font-bold text-gray-900">{session.title}</h3>
                        <p className="mb-2 text-sm text-muted">{session.description}</p>
                        <span className="text-sm font-semibold text-primary">{session.time}</span>
                        <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                          <MapPin className="h-3 w-3" />
                          {session.location}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-gray-900">
                          — {session.speaker}{' '}
                          <span className="font-normal text-muted">· {session.position}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
