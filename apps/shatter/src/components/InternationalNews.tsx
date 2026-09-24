import { PostCard } from './PostCard'

const categories = [
  'World',
  'Politics',
  'Business',
  'Technology',
  'Science',
  'Health',
  'Sports',
  'Entertainment',
  'Lifestyle',
  'Travel',
]

const featuredPost = {
  image: 'https://picsum.photos/seed/shatter-intl-feat/800/500',
  category: 'World',
  date: 'Nov 18, 2026',
  headline: 'Diplomatic Talks Resume in Geneva Amid Rising Tensions',
  excerpt:
    'World leaders convened in Geneva to address escalating geopolitical tensions, with key stakeholders expressing cautious optimism about the path forward.',
  commentCount: 34,
}

const smallPosts = [
  {
    image: 'https://picsum.photos/seed/shatter-intl-s1/400/300',
    category: 'Politics',
    date: 'Nov 17, 2026',
    headline: 'New Trade Policy Framework Takes Shape',
    commentCount: 11,
  },
  {
    image: 'https://picsum.photos/seed/shatter-intl-s2/400/300',
    category: 'Economy',
    date: 'Nov 16, 2026',
    headline: 'Central Banks Signal Shift in Monetary Policy',
    commentCount: 19,
  },
]

export function InternationalNews() {
  return (
    <section className="bg-paper py-10" aria-labelledby="intl-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 id="intl-heading" className="mb-6 font-display text-2xl font-bold text-ink">
          International News
        </h2>
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left column — content */}
          <div className="lg:col-span-8">
            <PostCard {...featuredPost} variant="large" />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {smallPosts.map((post) => (
                <PostCard key={post.headline} {...post} variant="stacked" />
              ))}
            </div>
          </div>

          {/* Right sidebar — category links */}
          <aside className="rounded-sm bg-white p-5 shadow-sm lg:col-span-4">
            <h3 className="mb-4 font-display text-lg font-bold text-ink">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href={`#${cat.toLowerCase()}`}
                    className="flex items-center justify-between border-b border-gray-100 py-2 text-sm text-mist transition-colors hover:text-brand"
                  >
                    <span>{cat}</span>
                    <span className="text-xs text-meta">
                      {cat === 'World'
                        ? 42
                        : cat === 'Politics'
                          ? 31
                          : cat === 'Business'
                            ? 28
                            : cat === 'Technology'
                              ? 25
                              : cat === 'Science'
                                ? 19
                                : cat === 'Health'
                                  ? 16
                                  : cat === 'Sports'
                                    ? 35
                                    : cat === 'Entertainment'
                                      ? 22
                                      : cat === 'Lifestyle'
                                        ? 14
                                        : 11}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
