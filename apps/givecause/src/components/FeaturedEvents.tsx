import { MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FeaturedEventsProps {
  className?: string
}

const events = [
  {
    date: '15 Mar',
    title: 'Charity Gala Night',
    description:
      'Join us for an evening of inspiration, stories, and fundraising to support our global initiatives.',
    location: 'Grand Ballroom, City Center',
  },
  {
    date: '22 Apr',
    title: 'Community Health Fair',
    description:
      'Free health screenings, wellness workshops, and resources for the local community.',
    location: 'Riverside Park Pavilion',
  },
  {
    date: '10 May',
    title: 'Volunteer Appreciation Day',
    description:
      'Celebrating our amazing volunteers who make our work possible through their dedication.',
    location: 'GiveCause HQ Garden',
  },
]

export function FeaturedEvents({ className }: FeaturedEventsProps) {
  return (
    <section id="events" className={cn('py-20 md:py-28 bg-surface-alt', className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-heading mb-4">
            Featured Events
          </h2>
          <p className="font-body text-lg text-body max-w-xl mx-auto">
            Join us at our upcoming events and be part of the change
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-brand font-heading font-bold text-2xl mb-3">{event.date}</div>
              <h3 className="font-heading text-xl font-medium text-heading mb-3">{event.title}</h3>
              <p className="font-body text-body mb-4">{event.description}</p>
              <div className="flex items-center gap-2 text-sm text-muted font-utility">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
