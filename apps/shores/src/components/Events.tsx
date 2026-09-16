import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

interface EventCard {
  title: string
  description: string
  imageId: string
  targetDate: Date
}

const events: EventCard[] = [
  {
    title: 'Working syrian children',
    description: 'Join us in supporting Syrian children through education and healthcare programs.',
    imageId: 'shores-event-1',
    targetDate: new Date(Date.now() + 552 * 86400000),
  },
  {
    title: 'Help and homelessness',
    description:
      'Our homelessness initiative provides shelter, meals, and support to those in need.',
    imageId: 'shores-event-2',
    targetDate: new Date(Date.now() + 552 * 86400000),
  },
  {
    title: 'Save the clean water',
    description:
      'Clean water access is a fundamental right. Help us build wells and water systems.',
    imageId: 'shores-event-3',
    targetDate: new Date(Date.now() + 552 * 86400000),
  },
  {
    title: 'Foods for poor children',
    description: 'Providing nutritious meals to children in developing communities worldwide.',
    imageId: 'shores-event-4',
    targetDate: new Date(Date.now() + 552 * 86400000),
  },
]

function Countdown({ targetDate }: { targetDate: Date }) {
  const [remaining, setRemaining] = useState(() => Math.max(0, targetDate.getTime() - Date.now()))

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, targetDate.getTime() - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const days = Math.floor(remaining / 86400000)
  const hours = Math.floor((remaining % 86400000) / 3600000)
  const minutes = Math.floor((remaining % 3600000) / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)

  return (
    <div className="flex gap-4">
      {[
        { label: 'Days', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Seconds', value: seconds },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="text-lg font-bold text-brand">{String(item.value).padStart(2, '0')}</div>
          <div className="text-xs text-mist">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

export function Events() {
  return (
    <section id="events" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink">Upcoming events</h2>
          <p className="mx-auto max-w-xl text-mist">
            Join our upcoming events and be part of the change you want to see in the world.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative w-2/5 flex-shrink-0">
                <img
                  src={`https://picsum.photos/seed/${event.imageId}/400/400`}
                  alt={event.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand/20" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <h3 className="mb-2 text-lg font-semibold text-ink">{event.title}</h3>
                <p className="mb-4 text-sm text-mist">{event.description}</p>
                <Countdown targetDate={event.targetDate} />
                <div className="mt-4">
                  <Button variant="primary" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
