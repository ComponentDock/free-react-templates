import { Heart, MessageCircle } from 'lucide-react'

const POPULAR_POSTS = [
  {
    category: 'Finance',
    title:
      'Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
    likes: 392,
    comments: 10,
    image: 'https://picsum.photos/seed/broadsheet-pop1/400/250',
  },
  {
    category: 'Finance',
    title:
      'Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
    likes: 392,
    comments: 10,
    image: 'https://picsum.photos/seed/broadsheet-pop2/400/250',
  },
  {
    category: 'Finance',
    title:
      'Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
    likes: 392,
    comments: 10,
    image: 'https://picsum.photos/seed/broadsheet-pop3/400/250',
  },
  {
    category: 'Finance',
    title:
      'Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
    likes: 392,
    comments: 10,
    image: 'https://picsum.photos/seed/broadsheet-pop4/400/250',
  },
]

const MOST_POPULAR = [
  {
    title: 'Amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales.',
    date: 'April 14, 2018',
  },
  {
    title: 'Consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
    date: 'April 14, 2018',
  },
  {
    title: 'Adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo.',
    date: 'April 14, 2018',
  },
  { title: 'Eu metus sit amet odio sodales placer. Sed varius leo ac...', date: 'April 14, 2018' },
]

export function PopularNews() {
  return (
    <section className="bg-light-bg py-10" aria-label="Popular news">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Popular posts grid */}
          <div className="lg:col-span-8">
            <h2 className="mb-6 text-lg font-bold text-text-heading">Popular News</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {POPULAR_POSTS.map((post) => (
                <article key={post.title + post.image} className="group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mb-2 w-full rounded object-cover"
                    loading="lazy"
                  />
                  <CategoryBadge category={post.category} />
                  <h3 className="mt-2 text-sm font-semibold text-text-heading group-hover:text-brand">
                    <a href="#">{post.title}</a>
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-text-meta">
                    <span className="flex items-center gap-1">
                      <Heart size={12} /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={12} /> {post.comments}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <h2 className="mb-6 text-lg font-bold text-text-heading">Info</h2>

            {/* Most Popular */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold text-text-heading">4 Most Popular News</h3>
              <div className="flex flex-col gap-3">
                {MOST_POPULAR.map((item, i) => (
                  <a key={item.title} href="#" className="group">
                    <h4 className="text-sm font-semibold text-text-heading group-hover:text-brand">
                      <span className="text-brand">{i + 1}. </span>
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-text-meta">{item.date}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded bg-white p-4">
              <h3 className="mb-2 text-base font-bold text-text-heading">Newsletter</h3>
              <p className="mb-3 text-sm text-text-body">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
                  aria-label="Name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
                  aria-label="Email"
                />
                <button
                  type="submit"
                  className="w-full rounded bg-brand py-2 text-sm font-semibold text-white hover:bg-brand-dark"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block rounded bg-brand px-2 py-0.5 text-xs font-semibold text-white">
      {category}
    </span>
  )
}
