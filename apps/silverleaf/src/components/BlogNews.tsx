import { Calendar, User, MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/silverleaf-blog1/600/400',
    date: 'Sep 10, 2025',
    author: 'Admin',
    comments: 3,
    title: 'The Importance of Social Activities for Seniors',
    excerpt:
      'Discover how social engagement contributes to the physical and mental well-being of elderly residents.',
  },
  {
    image: 'https://picsum.photos/seed/silverleaf-blog2/600/400',
    date: 'Sep 5, 2025',
    author: 'Dr. Smith',
    comments: 5,
    title: 'Nutrition Tips for Healthy Aging',
    excerpt: 'Learn about the essential nutrients and dietary habits that promote healthy aging.',
  },
  {
    image: 'https://picsum.photos/seed/silverleaf-blog3/600/400',
    date: 'Sep 1, 2025',
    author: 'Admin',
    comments: 2,
    title: 'Creating a Safe Home Environment',
    excerpt:
      'Practical tips for making your home safer and more accessible for elderly family members.',
  },
]

export function BlogNews() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Meta bar */}
              <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-brand" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={12} className="text-brand" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={12} className="text-brand" />
                  {post.comments}
                </span>
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
