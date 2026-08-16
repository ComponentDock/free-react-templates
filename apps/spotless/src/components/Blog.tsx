import { ArrowRight, Eye, MessageSquare } from 'lucide-react'

const posts = [
  {
    date: 'Feb 28, 2020',
    category: 'Cleaning Tips',
    title: 'Seasonal Deep Cleaning Checklist for Every Home',
    text: 'A room-by-room guide to the deep clean your home deserves this season.',
    seed: 'spotless-blog-1',
  },
  {
    date: 'Feb 21, 2020',
    category: 'Eco Living',
    title: '5 Eco-Friendly Products That Actually Work',
    text: 'Green cleaning without the guesswork — products our team swears by.',
    seed: 'spotless-blog-2',
  },
  {
    date: 'Feb 14, 2020',
    category: 'Office Care',
    title: 'How Often Should You Clean Your Office?',
    text: 'The hygiene schedule that keeps teams healthy and productive.',
    seed: 'spotless-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <p className="font-accent text-base font-semibold uppercase tracking-[4px] text-brand">
              Our Blog
            </p>
            <h2 className="mt-4 text-4xl font-medium text-heading">News And Tricks</h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand"
          >
            View all
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl bg-white shadow-md">
              <img
                src={`https://picsum.photos/seed/${post.seed}/640/400`}
                alt={post.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="font-accent text-sm font-semibold text-brand">{post.category}</p>
                <h3 className="mt-3 text-lg font-medium leading-snug text-heading">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{post.text}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-soft">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="h-4 w-4" aria-hidden="true" /> 25 Views
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" /> 02 Comments
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
