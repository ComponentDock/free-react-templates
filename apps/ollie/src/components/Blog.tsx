import { Calendar, User, ArrowRight } from 'lucide-react'

interface BlogProps {
  className?: string
}

interface BlogPost {
  image: string
  title: string
  date: string
  author: string
  excerpt: string
}

const posts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/ollie-15/800/500',
    title: 'Top 10 Skate Spots You Must Visit This Summer',
    date: 'Sep 15, 2026',
    author: 'Jake Mitchell',
    excerpt:
      'From Los Angeles to Barcelona, discover the most iconic skate spots around the world that every skater should experience at least once.',
  },
  {
    image: 'https://picsum.photos/seed/ollie-16/800/500',
    title: 'How to Master the Kickflip in 30 Days',
    date: 'Sep 10, 2026',
    author: 'Sarah Rodriguez',
    excerpt:
      'Our step-by-step guide to learning the kickflip, from foot placement to landing it clean. Perfect for beginners and intermediate skaters.',
  },
]

export function Blog({ className = '' }: BlogProps) {
  return (
    <section id="blog" className={`py-20 bg-surface ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-3">
            Latest News
          </h2>
          <div className="h-1 w-16 bg-brand mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="bg-surface-light rounded-lg overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase tracking-wider text-white mb-3 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted leading-relaxed mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-brand font-oswald font-medium uppercase tracking-wider text-sm hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
