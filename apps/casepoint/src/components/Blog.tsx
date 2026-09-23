import { cn } from '@free-react-templates/ui'

const posts = [
  {
    image: 'https://picsum.photos/seed/casepoint-blog1/800/500',
    date: 'October 27, 2020',
    title: 'Understanding Your Legal Rights',
    description: 'A comprehensive guide to understanding your legal rights in modern society.',
  },
  {
    image: 'https://picsum.photos/seed/casepoint-blog2/800/500',
    date: 'November 15, 2020',
    title: 'Corporate Law Trends in 2024',
    description: 'Latest developments in corporate law that every business owner should know.',
  },
]

interface BlogProps {
  className?: string
}

export function Blog({ className }: BlogProps) {
  return (
    <section id="blog" className={cn('bg-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-14 h-0.5 bg-brand" />
            <span className="text-brand text-sm font-heading font-semibold uppercase tracking-wider">
              Insight and Trends Articles
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading leading-tight">
            Lawyers news from around the world selected by us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-brand text-white px-4 py-2 text-xs font-semibold">
                  {post.date}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-heading mb-2 group-hover:text-brand transition-colors">
                {post.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
