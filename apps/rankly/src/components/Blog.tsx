import { Heart, MessageCircle } from 'lucide-react'

const POSTS = [
  {
    image: 'https://picsum.photos/seed/rankly-blog1/400/300',
    date: '10 Jan 2025',
    title: 'Understanding Core Web Vitals for Better Rankings',
    excerpt: 'A deep dive into the metrics that impact your search visibility.',
    likes: 24,
    comments: 8,
  },
  {
    image: 'https://picsum.photos/seed/rankly-blog2/400/300',
    date: '15 Jan 2025',
    title: 'Content Strategy That Drives Organic Traffic',
    excerpt: 'How to create content that ranks and converts consistently.',
    likes: 18,
    comments: 5,
  },
  {
    image: 'https://picsum.photos/seed/rankly-blog3/400/300',
    date: '22 Jan 2025',
    title: 'Technical SEO Checklist for 2025',
    excerpt: 'Essential technical optimizations every website needs.',
    likes: 31,
    comments: 12,
  },
  {
    image: 'https://picsum.photos/seed/rankly-blog4/400/300',
    date: '28 Jan 2025',
    title: 'Link Building Strategies That Actually Work',
    excerpt: 'Proven approaches to earning high-quality backlinks.',
    likes: 27,
    comments: 9,
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Latest From Our Blog</h2>
          <p className="text-mist">Stay updated with the latest SEO trends and strategies.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <p className="mb-2 text-xs text-brand">{post.date}</p>
              <h3 className="mb-2 text-base font-semibold text-ink leading-snug">
                <a href="#" className="hover:text-brand transition-colors">
                  {post.title}
                </a>
              </h3>
              <p className="mb-4 text-sm text-mist">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-mist">
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" /> {post.comments}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
