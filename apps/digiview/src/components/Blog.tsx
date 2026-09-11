import { cn } from '@free-react-templates/ui'

const posts = [
  { title: 'The Future of Web Development in 2025', date: 'Aug 15, 2025', image: 'digiview-blog1' },
  { title: 'How to Boost Your SEO Rankings', date: 'Jul 28, 2025', image: 'digiview-blog2' },
  {
    title: 'Design Trends Shaping Digital Products',
    date: 'Jul 10, 2025',
    image: 'digiview-blog3',
  },
]

interface BlogProps {
  className?: string
}

export function Blog({ className }: BlogProps) {
  return (
    <section id="blog" className={cn('bg-gray-50 py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Latest Blog Posts</h2>
          <p className="mt-3 text-gray-500">Insights and news from our team</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${post.image}/600/300`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <span className="text-xs font-medium text-brand">{post.date}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h3>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
