import { cn } from '@free-react-templates/ui'
import { Heart, MessageCircle } from 'lucide-react'

interface BlogProps {
  className?: string
}

const posts = [
  {
    title: 'The Importance of Regular Dental Check-ups',
    excerpt:
      'Learn why visiting your dentist every six months is essential for maintaining a healthy smile.',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/dentalink-blog1/400/250',
    likes: 24,
    comments: 8,
  },
  {
    title: 'Tips for Better Oral Hygiene',
    excerpt: 'Simple daily habits that can make a big difference in your oral health.',
    date: 'Sep 5, 2026',
    image: 'https://picsum.photos/seed/dentalink-blog2/400/250',
    likes: 18,
    comments: 5,
  },
  {
    title: 'Understanding Dental Implants',
    excerpt: 'A comprehensive guide to dental implants — the procedure, benefits, and aftercare.',
    date: 'Aug 28, 2026',
    image: 'https://picsum.photos/seed/dentalink-blog3/400/250',
    likes: 32,
    comments: 12,
  },
  {
    title: 'Cosmetic Dentistry Options Explained',
    excerpt:
      'From whitening to veneers, explore the cosmetic options available to transform your smile.',
    date: 'Aug 20, 2026',
    image: 'https://picsum.photos/seed/dentalink-blog4/400/250',
    likes: 15,
    comments: 4,
  },
]

export function Blog({ className }: BlogProps) {
  return (
    <section id="blog" className={cn('py-16 px-4 bg-paper', className)} data-testid="blog">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-ink text-center mb-12">Latest From Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={post.image} alt={post.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <p className="text-brand text-xs font-medium mb-2">{post.date}</p>
                <h3 className="font-semibold text-ink text-sm mb-2 leading-snug">{post.title}</h3>
                <p className="text-mist text-xs leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-mist text-xs">
                  <span className="flex items-center gap-1">
                    <Heart size={14} /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} /> {post.comments}
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
