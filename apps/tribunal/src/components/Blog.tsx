import { Calendar, User, MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface BlogPost {
  image: string
  date: string
  title: string
  author: string
  comments: number
}

const posts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/tribunal-blog1/800/500',
    date: 'June 29, 2018',
    title: 'Understanding Your Rights in Civil Litigation',
    author: 'Admin',
    comments: 19,
  },
  {
    image: 'https://picsum.photos/seed/tribunal-blog2/800/500',
    date: 'June 29, 2018',
    title: 'Key Strategies for Personal Injury Claims',
    author: 'Admin',
    comments: 19,
  },
  {
    image: 'https://picsum.photos/seed/tribunal-blog3/800/500',
    date: 'June 29, 2018',
    title: 'How to Choose the Right Legal Counsel',
    author: 'Admin',
    comments: 19,
  },
]

interface BlogProps {
  className?: string
}

export function Blog({ className }: BlogProps) {
  return (
    <section id="blog" className={cn('bg-bg-light py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading">Our Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-text-heading mb-3 group-hover:text-brand transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-text-muted text-xs">
                <span className="flex items-center gap-1">
                  <Calendar size={14} aria-hidden="true" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} aria-hidden="true" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={14} aria-hidden="true" />
                  {post.comments}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
