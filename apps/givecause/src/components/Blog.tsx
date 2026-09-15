import { User, MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface BlogProps {
  className?: string
}

const posts = [
  {
    image: 'https://picsum.photos/seed/givecause-blog1/400/250',
    date: '12 Mar 2026',
    title: 'How Your Donations Are Making a Difference',
    excerpt:
      'See the real impact of your generosity through the stories of the communities we serve.',
    author: 'Sarah Johnson',
    comments: 5,
  },
  {
    image: 'https://picsum.photos/seed/givecause-blog2/400/250',
    date: '28 Feb 2026',
    title: 'Volunteer Spotlight: Stories from the Field',
    excerpt: 'Meet the incredible volunteers who dedicate their time and energy to our cause.',
    author: 'Michael Chen',
    comments: 3,
  },
  {
    image: 'https://picsum.photos/seed/givecause-blog3/400/250',
    date: '15 Feb 2026',
    title: 'Annual Report: 2025 in Review',
    excerpt: 'A comprehensive look at our achievements, milestones, and plans for the coming year.',
    author: 'Emily Rodriguez',
    comments: 8,
  },
]

export function Blog({ className }: BlogProps) {
  return (
    <section id="blog" className={cn('py-20 md:py-28 bg-surface', className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-heading mb-4">
            Latest News
          </h2>
          <p className="font-body text-lg text-body max-w-xl mx-auto">
            Stay updated with our latest stories and announcements
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-brand text-white px-3 py-1 rounded-[5px] font-utility text-sm">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-medium text-heading mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="font-body text-body text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted font-utility">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> {post.comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
