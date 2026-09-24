import { BrandIcon } from './BrandIcon'

const featuredPost = {
  date: 'MAY 7, 2024 / Lifestyle',
  title: 'A Closer Look At Our Front Porch Collection From The Marketplace',
  excerpt:
    'Discover the curated picks that define modern living — from handcrafted home accents to seasonal wardrobe must-haves that blend comfort with elegance.',
  image: 'https://picsum.photos/seed/byline-featured/800/400',
  author: 'Byline Team',
  comments: 3,
}

const blogPosts = [
  {
    date: 'MAY 10, 2024 / Travel',
    title: 'Travel Tuesday: Answering Your Most Frequent International Transportation Questions',
    image: 'https://picsum.photos/seed/byline-post1/400/300',
  },
  {
    date: 'MAY 17, 2024 / Sport',
    title: 'A Closer Look At Our Front Porch Collection From The Marketplace',
    image: 'https://picsum.photos/seed/byline-post2/400/300',
  },
  {
    date: 'MAY 22, 2024 / Lifestyle',
    title: 'Wedding Guest Style: From Beach Casual to Black-Tie Formal',
    image: 'https://picsum.photos/seed/byline-post3/400/300',
  },
  {
    date: 'MAY 25, 2024 / Fashion',
    title: '5 Things to Know About Curating Your Personal Style This Season',
    image: 'https://picsum.photos/seed/byline-post4/400/300',
  },
] as const

const categories = [
  'Features',
  'Food',
  'Travel',
  'Recipe',
  'Bread',
  'Breakfast',
  'Meat',
  'Fashion',
  'Lifestyle',
  'Sport',
]

const latestPosts = [
  { title: 'Travel Tuesday: International Transportation Tips', date: 'May 10' },
  { title: 'Front Porch Collection Highlights', date: 'May 17' },
  { title: 'Wedding Guest Style Guide', date: 'May 22' },
]

const tags = ['Lifestyle', 'Travel', 'Food', 'Fashion', 'Recipe', 'Bread', 'Breakfast', 'Sport']

export function BlogContent() {
  return (
    <section className="bg-paper py-16 transition-colors dark:bg-gray-950" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Main content */}
          <div>
            {/* Featured post */}
            <article className="mb-12">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
                  {featuredPost.date}
                </p>
                <h2 className="font-display text-2xl font-medium text-ink dark:text-white">
                  {featuredPost.title}
                </h2>
                <p className="mt-3 leading-relaxed text-mist">{featuredPost.excerpt}</p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                  <div className="flex items-center gap-4 text-sm text-mist">
                    <span>
                      by{' '}
                      <span className="font-semibold text-ink dark:text-white">
                        {featuredPost.author}
                      </span>
                    </span>
                    <span>{featuredPost.comments} Comments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {(['facebook', 'twitter', 'instagram', 'linkedin'] as const).map((name) => (
                      <a
                        key={name}
                        href="#"
                        aria-label="Share"
                        className="text-mist transition-colors hover:text-brand"
                      >
                        <BrandIcon name={name} className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Blog post grid */}
            <div className="grid gap-8 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.title} className="group">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-brand">
                      {post.date}
                    </p>
                    <h3 className="font-display text-lg font-medium leading-snug text-ink transition-colors group-hover:text-brand dark:text-white">
                      {post.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* About widget */}
            <div className="rounded-sm bg-gray-50 p-6 transition-colors dark:bg-gray-900">
              <h3 className="mb-4 font-display text-lg font-medium text-ink dark:text-white">
                About Byline
              </h3>
              <p className="text-sm leading-relaxed text-mist">
                A curated blog and magazine covering lifestyle, travel, food, and fashion. Fresh
                stories delivered daily.
              </p>
            </div>

            {/* Categories */}
            <div className="rounded-sm bg-gray-50 p-6 transition-colors dark:bg-gray-900">
              <h3 className="mb-4 font-display text-lg font-medium text-ink dark:text-white">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a href="#" className="text-sm text-mist transition-colors hover:text-brand">
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="rounded-sm bg-gray-50 p-6 transition-colors dark:bg-gray-900">
              <h3 className="mb-4 font-display text-lg font-medium text-ink dark:text-white">
                Latest Posts
              </h3>
              <ul className="space-y-4">
                {latestPosts.map((post) => (
                  <li
                    key={post.title}
                    className="border-b border-gray-200 pb-3 last:border-0 dark:border-gray-700"
                  >
                    <a
                      href="#"
                      className="text-sm font-medium text-ink transition-colors hover:text-brand dark:text-white"
                    >
                      {post.title}
                    </a>
                    <p className="mt-1 text-xs text-mist">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="rounded-sm bg-gray-50 p-6 transition-colors dark:bg-gray-900">
              <h3 className="mb-4 font-display text-lg font-medium text-ink dark:text-white">
                Newsletter
              </h3>
              <p className="mb-4 text-sm text-mist">
                Subscribe to get the latest stories delivered to your inbox.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="rounded-sm border border-gray-200 bg-white px-4 py-2 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                <button
                  type="submit"
                  className="rounded-sm bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Tags */}
            <div className="rounded-sm bg-gray-50 p-6 transition-colors dark:bg-gray-900">
              <h3 className="mb-4 font-display text-lg font-medium text-ink dark:text-white">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="rounded-sm border border-gray-200 px-3 py-1 text-xs text-mist transition-colors hover:border-brand hover:text-brand dark:border-gray-700"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
