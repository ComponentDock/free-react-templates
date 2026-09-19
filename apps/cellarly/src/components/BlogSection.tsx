import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: "The Recipe from a Winemaker's Restaurant",
    date: '23 April 2020',
    seed: 'blog1',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'How to Choose the Perfect Whiskey',
    date: '18 April 2020',
    seed: 'blog2',
    excerpt:
      'Discover the essential tips for selecting the finest whiskey from our expert sommeliers.',
  },
  {
    title: 'Summer Cocktail Recipes for Every Occasion',
    date: '10 April 2020',
    seed: 'blog3',
    excerpt:
      'From refreshing gin fizzes to classic old fashioneds, explore our curated cocktail recipes.',
  },
  {
    title: "Behind the Barrel: A Distiller's Journey",
    date: '02 April 2020',
    seed: 'blog4',
    excerpt: 'An inside look at the art and science of distilling spirits from grain to glass.',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-brand">
            Blog
          </span>
          <h2
            className="text-3xl font-bold text-heading dark:text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Recent Blog
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm md:flex-row dark:border-gray-700 dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/300`}
                alt={post.title}
                className="h-48 w-full object-cover md:h-auto md:w-40"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-1 text-xs text-ink dark:text-gray-400">
                  <Calendar size={12} /> {post.date}
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold text-heading dark:text-white">
                  {post.title}
                </h3>
                <p className="mb-3 flex-1 text-sm text-ink dark:text-gray-400">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                >
                  Continue <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
