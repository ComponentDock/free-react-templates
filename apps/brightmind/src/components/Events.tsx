import { Calendar, MessageCircle } from 'lucide-react'

const events = [
  {
    date: 'Sep 10, 2024',
    author: 'Admin',
    comments: 3,
    title: 'Intern Bootcamp Meetup',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/brightmind-event1/400/250',
  },
  {
    date: 'Sep 25, 2024',
    author: 'Admin',
    comments: 1,
    title: 'Annual Science Fair',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/brightmind-event2/400/250',
  },
  {
    date: 'Oct 05, 2024',
    author: 'Admin',
    comments: 2,
    title: 'Career Guidance Workshop',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    image: 'https://picsum.photos/seed/brightmind-event3/400/250',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-dark">Our Latest Events</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {event.date}
                  </span>
                  <span>by {event.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {event.comments}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-dark">
                  <a href="#" className="hover:text-brand-500">
                    {event.title}
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-muted">{event.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
