import { useState } from 'react'
import { Clock, MapPin, User, Mail } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Session {
  title: string
  speaker: string
  email: string
  time: string
  location: string
  img: string
}

const days: Record<string, Session[]> = {
  'Day 1': [
    {
      title: 'Dealing with Difficult People',
      speaker: 'John Smith',
      email: 'john@convene.com',
      time: '08:00 am - 10:00 AM',
      location: '59 Breanne Canyon Suite, USA',
      img: 'convene-schedule-1',
    },
    {
      title: 'Marketing Strategy Workshop',
      speaker: 'Emma Davis',
      email: 'emma@convene.com',
      time: '10:30 am - 12:00 PM',
      location: '311 Pierce Highway, USA',
      img: 'convene-schedule-2',
    },
  ],
  'Day 2': [
    {
      title: 'Building Your Brand Online',
      speaker: 'Sara Wilson',
      email: 'sara@convene.com',
      time: '09:00 am - 11:00 AM',
      location: '244 Green Crescent, USA',
      img: 'convene-schedule-3',
    },
    {
      title: 'Social Media Masterclass',
      speaker: 'Jayden Lee',
      email: 'jayden@convene.com',
      time: '01:00 pm - 03:00 PM',
      location: '455 Oak Street, USA',
      img: 'convene-schedule-4',
    },
  ],
  'Day 3': [
    {
      title: 'Future of Digital Events',
      speaker: 'Harriet Cole',
      email: 'harriet@convene.com',
      time: '09:00 am - 11:00 AM',
      location: '781 Maple Drive, USA',
      img: 'convene-schedule-5',
    },
  ],
}

const tabNames = ['Day 1', 'Day 2', 'Day 3']

export function Schedule() {
  const [activeTab, setActiveTab] = useState('Day 1')
  const sessions = days[activeTab] as Session[]

  return (
    <section id="schedule" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Schedule
          </h2>
          <p className="mt-3 text-mist dark:text-gray-400">
            Do not miss anything topic about the event
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {tabNames.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                'rounded-lg px-6 py-3 text-center transition-colors',
                activeTab === tab
                  ? 'bg-gradient-to-r from-brand to-brand-pink text-white'
                  : 'bg-gray-100 text-mist hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
              )}
            >
              <span className="block text-sm font-semibold">{tab}</span>
              <span className="block text-xs opacity-75">May 0{i + 4}, 2025</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {sessions.map((session: Session) => (
            <div
              key={session.title}
              className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${session.img}/120/120`}
                alt={session.title}
                className="h-20 w-20 shrink-0 rounded-lg object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <h4 className="font-display text-base font-semibold text-ink dark:text-white">
                  {session.title}
                </h4>
                <div className="mt-1 flex flex-wrap gap-4 text-sm text-mist dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> {session.speaker}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5" /> {session.email}
                  </span>
                </div>
              </div>
              <div className="shrink-0 text-sm text-mist dark:text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {session.time}
                </span>
                <br />
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {session.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
