import { MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface BlogProps {
  className?: string
}

const posts = [
  {
    seed: 'uc-blog-1',
    title: 'Incorporation is A Big Milestone for Your Business',
    date: 'Jan. 27, 2030',
    comments: 3,
  },
  {
    seed: 'uc-blog-2',
    title: 'Smart Investment Strategies for Growing Businesses',
    date: 'Feb. 14, 2030',
    comments: 5,
  },
  {
    seed: 'uc-blog-3',
    title: 'Understanding Tax Reform: What It Means for You',
    date: 'Mar. 03, 2030',
    comments: 2,
  },
]

export function Blog({ className }: BlogProps) {
  return (
    <section
      id="blog"
      className={cn('bg-cloud py-16 sm:py-20', className)}
      aria-labelledby="blog-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 id="blog-heading" className="text-2xl font-bold text-ink sm:text-3xl">
            Recent From Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.seed} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <a href="#" className="block overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/600/400`}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-smoke">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {p.comments} Comments
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-ink group-hover:text-primary-400 transition-colors">
                  <a href="#">{p.title}</a>
                </h3>
                <a href="#" className="text-xs font-semibold text-primary-400 hover:underline">
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
