import { Heart, MessageCircle } from 'lucide-react'

const events: ReadonlyArray<{
  image: string
  title: string
  description: string
  likes: number
  comments: number
}> = [
  {
    image: 'https://picsum.photos/seed/jamboree-ev1/400/300',
    title: 'Building Scalable Systems',
    description: 'Explore modern architecture patterns for building distributed systems at scale.',
    likes: 24,
    comments: 8,
  },
  {
    image: 'https://picsum.photos/seed/jamboree-ev2/400/300',
    title: 'AI in Product Design',
    description: 'How artificial intelligence is transforming the way we design and ship products.',
    likes: 31,
    comments: 12,
  },
  {
    image: 'https://picsum.photos/seed/jamboree-ev3/400/300',
    title: 'Remote Team Leadership',
    description:
      'Best practices for leading distributed teams and fostering collaboration across time zones.',
    likes: 18,
    comments: 5,
  },
  {
    image: 'https://picsum.photos/seed/jamboree-ev4/400/300',
    title: 'Open Source Sustainability',
    description:
      'Strategies for maintaining healthy open source projects and building contributor communities.',
    likes: 42,
    comments: 15,
  },
  {
    image: 'https://picsum.photos/seed/jamboree-ev5/400/300',
    title: 'Web Performance Workshop',
    description:
      'Hands-on techniques to optimize your web applications for speed and user experience.',
    likes: 27,
    comments: 9,
  },
  {
    image: 'https://picsum.photos/seed/jamboree-ev6/400/300',
    title: 'Design Systems at Scale',
    description:
      'Creating and maintaining design systems that work across large product organizations.',
    likes: 35,
    comments: 11,
  },
]

export function Events() {
  return (
    <section id="upcoming-event" className="bg-white py-24 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink dark:text-white">Upcoming Events</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Don't miss out on these exciting events. Register early to secure your spot.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {events.map((event) => (
            <div key={event.title} className="flex gap-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold leading-snug text-ink transition-colors hover:text-brand dark:text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{event.description}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" /> {event.likes} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" /> {event.comments} comments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
