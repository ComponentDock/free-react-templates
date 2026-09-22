import { Star, ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const ROOMS = [
  {
    name: 'Suite Room',
    image: 'https://picsum.photos/seed/getawaypad-room1/600/400',
    max: '3 Persons',
    size: '45 m2',
    view: 'Sea View',
    bed: '1',
  },
  {
    name: 'Standard Room',
    image: 'https://picsum.photos/seed/getawaypad-room2/600/400',
    max: '3 Persons',
    size: '45 m2',
    view: 'Sea View',
    bed: '1',
  },
  {
    name: 'Family Room',
    image: 'https://picsum.photos/seed/getawaypad-room3/600/400',
    max: '5 Persons',
    size: '60 m2',
    view: 'Garden View',
    bed: '2',
  },
  {
    name: 'Deluxe Room',
    image: 'https://picsum.photos/seed/getawaypad-room4/600/400',
    max: '2 Persons',
    size: '35 m2',
    view: 'Ocean View',
    bed: '1',
  },
]

const AMENITIES = [
  { key: 'Max', label: 'Max' },
  { key: 'size', label: 'Size' },
  { key: 'view', label: 'View' },
  { key: 'bed', label: 'Bed' },
]

function StarRating() {
  return (
    <div className="mb-2 flex justify-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-brand text-brand" />
      ))}
    </div>
  )
}

function RoomCard({ room, reversed }: { room: (typeof ROOMS)[number]; reversed: boolean }) {
  return (
    <div className={cn('flex flex-col md:flex-row', reversed && 'md:flex-row-reverse')}>
      <div
        className="h-64 bg-cover bg-center md:h-auto md:w-1/2"
        style={{ backgroundImage: `url('${room.image}')` }}
      />
      <div className="flex items-center justify-center p-6 md:w-1/2">
        <div className="text-center">
          <StarRating />
          <h3 className="mb-3 text-lg font-semibold">
            <a href="#" className="hover:text-brand transition-colors">
              {room.name}
            </a>
          </h3>
          <ul className="mb-4 space-y-1 text-sm text-text-body">
            {AMENITIES.map((a) => (
              <li key={a.key}>
                <span className="font-medium text-text-dark">{a.label}:</span>{' '}
                {room[a.key as keyof typeof room]}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
          >
            View Room Details <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export function Rooms() {
  return (
    <section className="bg-light-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold">Apartment Room</h2>
        <div className="grid gap-0 md:grid-cols-2">
          {ROOMS.map((room, i) => (
            <RoomCard key={room.name} room={room} reversed={i >= 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
