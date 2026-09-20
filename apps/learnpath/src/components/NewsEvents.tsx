import { MapPin, Clock, MessageCircle } from 'lucide-react'

const event = {
  image: 'https://picsum.photos/seed/learnpath-event/800/500',
  day: '22',
  month: 'Sep',
  title: 'Web Development Workshop',
  location: 'New York City',
  duration: '3 Days',
}

const posts = [
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-blog1/200/150',
    date: 'Sep 18, 2026',
    title: 'How to Start Your Online Learning Journey',
    author: 'John Doe',
    comments: 12,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-blog2/200/150',
    date: 'Sep 15, 2026',
    title: 'Tips for Successful Online Education',
    author: 'Jane Smith',
    comments: 8,
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
]

export function NewsEvents() {
  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold text-text">Latest News & Events</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Featured event */}
          <div className="relative overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="h-64 w-full object-cover lg:h-full"
              loading="lazy"
            />
            <div className="absolute left-4 top-4 flex flex-col items-center bg-brand px-3 py-2 text-white">
              <span className="text-2xl font-bold leading-none">{event.day}</span>
              <span className="text-xs uppercase">{event.month}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{event.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {event.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {event.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Blog posts */}
          <div className="flex flex-col gap-6">
            {posts.map((p) => (
              <div key={p.title} className="flex gap-4">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="h-24 w-24 flex-shrink-0 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="mb-1 text-xs text-text-muted">{p.date}</p>
                  <h3 className="mb-1 font-bold text-text">{p.title}</h3>
                  <p className="mb-2 text-sm text-text-muted">{p.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span>{p.author}</span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" /> {p.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
