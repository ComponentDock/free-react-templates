import { ChevronRight } from 'lucide-react'

const posts = [
  {
    title: 'The Art of Italian Cooking',
    date: 'March 15, 2026',
    excerpt:
      'Discover the secrets behind authentic Italian cuisine and how to bring them to your kitchen.',
  },
  {
    title: 'Seasonal Ingredients for Spring',
    date: 'April 2, 2026',
    excerpt: 'Fresh spring ingredients that elevate any dish to a gourmet level.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-gray-900">
          News
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              <time className="mt-2 block text-sm text-gray-500">{post.date}</time>
              <p className="mt-3 text-sm text-gray-600">{post.excerpt}</p>
              <a
                href="#blog"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-orange-600"
              >
                Read More <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
