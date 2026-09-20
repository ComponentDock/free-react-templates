import { useState } from 'react'
import { Clock, User } from 'lucide-react'

export interface ScheduleProps {
  className?: string
}

const tabs = [
  { id: 'day1', label: 'Day 01', date: 'Feb 01, 2025' },
  { id: 'day2', label: 'Day 02', date: 'Feb 02, 2025' },
  { id: 'day3', label: 'Day 03', date: 'Feb 03, 2025' },
  { id: 'day4', label: 'Day 04', date: 'Feb 04, 2025' },
]

const sessions: Record<
  string,
  Array<{
    time: string
    title: string
    description: string
    speaker: string
    photo: string
  }>
> = {
  day1: [
    {
      time: '9:00 AM',
      title: 'Opening Keynote',
      description: 'Welcome address and vision for the future of development.',
      speaker: 'Alice Johnson',
      photo: 'https://picsum.photos/seed/speaker-a1/100/100',
    },
    {
      time: '11:00 AM',
      title: 'React Best Practices',
      description: 'Deep dive into modern React patterns and performance.',
      speaker: 'Bob Smith',
      photo: 'https://picsum.photos/seed/speaker-b1/100/100',
    },
    {
      time: '2:00 PM',
      title: 'Cloud Architecture',
      description: 'Scaling applications in the cloud with microservices.',
      speaker: 'Carol White',
      photo: 'https://picsum.photos/seed/speaker-c1/100/100',
    },
  ],
  day2: [
    {
      time: '9:00 AM',
      title: 'TypeScript Deep Dive',
      description: 'Advanced TypeScript features for large-scale applications.',
      speaker: 'Dave Brown',
      photo: 'https://picsum.photos/seed/speaker-d1/100/100',
    },
    {
      time: '11:00 AM',
      title: 'DevOps Workshop',
      description: 'CI/CD pipelines and infrastructure as code.',
      speaker: 'Eve Davis',
      photo: 'https://picsum.photos/seed/speaker-e1/100/100',
    },
    {
      time: '2:00 PM',
      title: 'AI in Development',
      description: 'How AI tools are transforming the developer workflow.',
      speaker: 'Frank Wilson',
      photo: 'https://picsum.photos/seed/speaker-f1/100/100',
    },
  ],
  day3: [
    {
      time: '9:00 AM',
      title: 'Web Security',
      description: 'Protecting your applications from common vulnerabilities.',
      speaker: 'Grace Lee',
      photo: 'https://picsum.photos/seed/speaker-g1/100/100',
    },
    {
      time: '11:00 AM',
      title: 'Database Design',
      description: 'Modern database strategies for real-time applications.',
      speaker: 'Henry Taylor',
      photo: 'https://picsum.photos/seed/speaker-h1/100/100',
    },
    {
      time: '2:00 PM',
      title: 'Mobile Development',
      description: 'Building cross-platform mobile apps with React Native.',
      speaker: 'Iris Chen',
      photo: 'https://picsum.photos/seed/speaker-i1/100/100',
    },
  ],
  day4: [
    {
      time: '9:00 AM',
      title: 'Open Source Panel',
      description: 'Building and maintaining successful open source projects.',
      speaker: 'Jack Martin',
      photo: 'https://picsum.photos/seed/speaker-j1/100/100',
    },
    {
      time: '11:00 AM',
      title: 'Testing Strategies',
      description: 'End-to-end testing and quality assurance best practices.',
      speaker: 'Karen Garcia',
      photo: 'https://picsum.photos/seed/speaker-k1/100/100',
    },
    {
      time: '2:00 PM',
      title: 'Closing Ceremony',
      description: 'Recap of highlights and announcement of next year.',
      speaker: 'Leo Rodriguez',
      photo: 'https://picsum.photos/seed/speaker-l1/100/100',
    },
  ],
}

export function Schedule({ className }: ScheduleProps) {
  const [activeTab, setActiveTab] = useState('day1')

  return (
    <section id="schedule" className={`bg-[#f8f9fa] py-20 md:py-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-[#ff2d9b]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Event Schedule
        </p>
        <h2
          className="mb-12 text-center text-3xl font-bold text-[#222] md:text-4xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Conference Schedule
        </h2>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded px-6 py-3 text-center transition-all ${
                activeTab === tab.id
                  ? 'bg-[#ff2d9b] text-white'
                  : 'bg-white text-[#333] shadow hover:bg-gray-100'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
              data-testid={`tab-${tab.id}`}
            >
              <span className="block text-lg font-bold">{tab.label}</span>
              <span className="text-xs">{tab.date}</span>
            </button>
          ))}
        </div>

        {/* Sessions */}
        <div className="space-y-4" data-testid={`sessions-${activeTab}`}>
          {sessions[activeTab]?.map((session) => (
            <div
              key={session.title}
              className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm md:flex-row md:items-center"
            >
              <img
                src={session.photo}
                alt={session.speaker}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2 text-sm text-[#ff2d9b]">
                  <Clock size={14} />
                  <span>{session.time}</span>
                </div>
                <h3
                  className="mb-1 text-lg font-bold text-[#222]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {session.title}
                </h3>
                <p className="mb-2 text-sm text-gray-500">{session.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User size={14} />
                  <span>{session.speaker}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
