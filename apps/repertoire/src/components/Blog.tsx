import { cn } from '@free-react-templates/ui'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  comments: number
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Art of Minimalist Design',
    excerpt:
      'Discover how less can be more in modern web design and why minimalism continues to dominate.',
    image: 'https://picsum.photos/seed/blog1/600/400',
    date: 'Sep 10, 2026',
    category: 'Design',
    comments: 8,
  },
  {
    title: 'Building Brands That Last',
    excerpt:
      'A deep dive into brand strategy and how to create identities that stand the test of time.',
    image: 'https://picsum.photos/seed/blog2/600/400',
    date: 'Sep 5, 2026',
    category: 'Branding',
    comments: 12,
  },
  {
    title: 'SEO Trends to Watch in 2026',
    excerpt:
      'Stay ahead of the curve with the latest search engine optimization strategies and techniques.',
    image: 'https://picsum.photos/seed/blog3/600/400',
    date: 'Sep 1, 2026',
    category: 'SEO',
    comments: 5,
  },
]

interface BlogProps {
  className?: string
}

export function Blog({ className }: BlogProps) {
  return (
    <section id="blog" className={cn('bg-gray-50 py-20', className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
            Read
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Recent Blog</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span className="rounded-full bg-primary-50 px-2 py-0.5 text-primary-600">
                    {post.category}
                  </span>
                  <span>{post.comments} comments</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{post.title}</h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
