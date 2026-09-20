import { MapPin, Calendar, User, MessageCircle } from 'lucide-react'

const events = [
  {
    day: '01-02',
    month: 'Jun',
    organizer: 'Noah Henderson',
    title: 'Free Training for Basic Programming',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
  {
    day: '05-07',
    month: 'Jun',
    organizer: 'Noah Henderson',
    title: 'Workshop on Advanced Web Development',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
  {
    day: '10-12',
    month: 'Jun',
    organizer: 'Noah Henderson',
    title: 'Data Science Bootcamp',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
  {
    day: '19-25',
    month: 'Jun',
    organizer: 'Noah Henderson',
    title: 'Mobile App Development Sprint',
    location: '291 South 21th Street, Suite 721 New York NY 10016',
  },
]

const blogPosts = [
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost',
    date: 'May 29, 2024',
    author: 'Admin',
    comments: 19,
    image: 'https://picsum.photos/seed/erudit-blog1/400/300',
  },
  {
    title: 'How to Build Modern Web Applications from Scratch',
    excerpt:
      'A comprehensive guide to building modern web applications using the latest technologies',
    date: 'May 28, 2024',
    author: 'Admin',
    comments: 12,
    image: 'https://picsum.photos/seed/erudit-blog2/400/300',
  },
  {
    title: 'The Future of Online Learning in 2024',
    excerpt:
      'Explore the latest trends and innovations in online education and e-learning platforms',
    date: 'May 27, 2024',
    author: 'Admin',
    comments: 8,
    image: 'https://picsum.photos/seed/erudit-blog3/400/300',
  },
  {
    title: 'Getting Started with Data Science',
    excerpt: 'A beginner-friendly introduction to data science, machine learning, and analytics',
    date: 'May 26, 2024',
    author: 'Admin',
    comments: 15,
    image: 'https://picsum.photos/seed/erudit-blog4/400/300',
  },
]

export function EventsBlog() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-10">
        {/* Events */}
        <div className="md:col-span-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <div key={i} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0 w-14 text-center">
                  <span className="block text-xl font-bold text-sky-500">{event.day}</span>
                  <span className="text-xs text-gray-500 uppercase">{event.month}</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    Organized by: <span className="text-gray-600">{event.organizer}</span>
                  </p>
                  <h3 className="text-sm font-semibold text-gray-900 mt-1 hover:text-sky-500 cursor-pointer">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin size={12} /> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog */}
        <div className="md:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Blog</h2>
          <div className="space-y-5">
            {blogPosts.map((post, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-24 h-20 bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug hover:text-sky-500 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={12} /> {post.comments}
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
