import { Video, Headphones, Download, BookOpen } from 'lucide-react'

const SERMONS = [
  {
    image: 'https://picsum.photos/seed/fellowship-sermon-1/100/100',
    title: 'The Power of Prayer',
    meta: 'June 28, 2018 — Pastor John Smith',
  },
  {
    image: 'https://picsum.photos/seed/fellowship-sermon-2/100/100',
    title: 'Walking In Faith',
    meta: 'June 21, 2018 — Pastor Gregg Smith',
  },
  {
    image: 'https://picsum.photos/seed/fellowship-sermon-3/100/100',
    title: 'Grace And Mercy',
    meta: 'June 14, 2018 — Pastor John Smith',
  },
]

const MEDIA_BUTTONS = [
  { icon: Video, label: 'Watch' },
  { icon: Headphones, label: 'Listen' },
  { icon: Download, label: 'Download' },
  { icon: BookOpen, label: 'Transcript' },
]

const EVENTS = [
  {
    image: 'https://picsum.photos/seed/fellowship-event-1/400/200',
    title: 'Summer Worship Night',
    description: 'Join us for an evening of praise and worship under the stars.',
  },
  {
    image: 'https://picsum.photos/seed/fellowship-event-2/400/200',
    title: 'Community BBQ',
    description: 'Food, fun, and fellowship for the entire family.',
  },
]

export function LatestSermonsEvents() {
  return (
    <section className="py-20" aria-label="Sermons and events">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Sermons */}
          <div>
            <h2 className="mb-8 font-heading text-2xl font-medium text-gray-900">Latest Sermons</h2>
            <div className="space-y-6">
              {SERMONS.map((sermon) => (
                <article key={sermon.title} className="flex items-start gap-4">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="h-[100px] w-[100px] shrink-0 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-heading text-base font-medium text-gray-900">
                      {sermon.title}
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">{sermon.meta}</p>
                    <div className="mt-3 flex items-center gap-2">
                      {MEDIA_BUTTONS.map((btn) => (
                        <a
                          key={btn.label}
                          href="#"
                          aria-label={`${btn.label} ${sermon.title}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white"
                        >
                          <btn.icon className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right: Events */}
          <div>
            <h2 className="mb-8 font-heading text-2xl font-medium text-gray-900">Latest Events</h2>
            <div className="space-y-6">
              {EVENTS.map((event) => (
                <article
                  key={event.title}
                  className="overflow-hidden rounded-lg bg-white shadow-sm"
                >
                  <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="mb-2 font-heading text-base font-medium text-gray-900">
                      {event.title}
                    </h3>
                    <p className="mb-3 text-sm text-text-muted">{event.description}</p>
                    <a
                      href="#"
                      className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
