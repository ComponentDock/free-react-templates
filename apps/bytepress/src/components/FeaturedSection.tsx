import { User, Calendar, MessageCircle } from 'lucide-react'

const featuredPost = {
  category: 'technology',
  categoryColor: 'bg-cat-tech',
  title: 'The New Apple Release Ceremony',
  author: 'Michael Smith',
  date: '29 April 2024',
  comments: 3,
  excerpt:
    'Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus.',
  image: 'https://picsum.photos/seed/bytepress-feat1/800/500',
}

const smallPosts = [
  {
    category: 'world',
    categoryColor: 'bg-cat-world',
    title: 'The Devices of the Future',
    author: 'Michael Smith',
    date: '28 April 2024',
    image: 'https://picsum.photos/seed/bytepress-small1/400/250',
  },
  {
    category: 'world',
    categoryColor: 'bg-cat-world',
    title: 'Smart Home Innovation Trends',
    author: 'Michael Smith',
    date: '27 April 2024',
    image: 'https://picsum.photos/seed/bytepress-small2/400/250',
  },
]

const latestPosts = [
  {
    category: 'video',
    color: 'bg-cat-video',
    title: 'New tech development',
    date: 'March 12, 2024',
  },
  {
    category: 'world',
    color: 'bg-cat-world',
    title: 'AI breakthroughs this year',
    date: 'March 10, 2024',
  },
  {
    category: 'tech',
    color: 'bg-cat-tech',
    title: 'Quantum computing explained',
    date: 'March 8, 2024',
  },
  {
    category: 'tech',
    color: 'bg-cat-tech',
    title: 'Cloud computing trends',
    date: 'March 5, 2024',
  },
]

const tags = ['technology', 'design', 'travel', 'video', 'music', 'world', 'adventure']

function PostMeta({ author, date, comments }: { author: string; date: string; comments?: number }) {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-secondary">
      <span className="flex items-center gap-1">
        <User size={12} />
        {author}
      </span>
      <span className="flex items-center gap-1">
        <Calendar size={12} />
        {date}
      </span>
      {comments !== undefined && (
        <span className="ml-auto flex items-center gap-1">
          <MessageCircle size={12} />
          {comments} comments
        </span>
      )}
    </div>
  )
}

export function FeaturedSection() {
  return (
    <section className="bg-alt-bg py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-ink">Featured Posts</h2>
          <p className="text-sm text-secondary">Handpicked articles</p>
          <div className="mt-2 h-1 w-12 bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Large featured post */}
            <article className="mb-8 overflow-hidden rounded bg-white">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <span
                  className={`inline-block rounded px-3 py-0.5 text-xs font-semibold uppercase text-white ${featuredPost.categoryColor}`}
                >
                  {featuredPost.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-ink">
                  <a href="#" className="transition-colors hover:text-accent">
                    {featuredPost.title}
                  </a>
                </h3>
                <PostMeta
                  author={featuredPost.author}
                  date={featuredPost.date}
                  comments={featuredPost.comments}
                />
                <p className="mt-3 text-sm leading-relaxed text-muted">{featuredPost.excerpt}</p>
              </div>
            </article>

            {/* Small posts */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {smallPosts.map((post) => (
                <article key={post.title} className="overflow-hidden rounded bg-white">
                  <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-xs font-semibold uppercase text-white ${post.categoryColor}`}
                    >
                      {post.category}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-ink">
                      <a href="#" className="transition-colors hover:text-accent">
                        {post.title}
                      </a>
                    </h4>
                    <PostMeta author={post.author} date={post.date} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Newsletter */}
            <div className="rounded bg-white p-6">
              <h3 className="mb-3 text-base font-bold text-ink">Subscribe to our newsletter</h3>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your e-mail here"
                  required
                  className="rounded border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                />
                <button
                  type="submit"
                  className="rounded bg-accent px-4 py-2.5 text-sm font-semibold uppercase text-white transition-colors hover:bg-accent-hover"
                >
                  subscribe
                </button>
              </form>
            </div>

            {/* Latest Posts */}
            <div className="rounded bg-white p-6">
              <h3 className="mb-4 text-base font-bold text-ink">Latest Posts</h3>
              <ul className="space-y-4">
                {latestPosts.map((post) => (
                  <li key={post.title} className="flex gap-3">
                    <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${post.color}`} />
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-secondary">
                        {post.category}
                      </span>
                      <a
                        href="#"
                        className="block text-sm font-semibold text-ink hover:text-accent"
                      >
                        {post.title}
                      </a>
                      <span className="text-xs text-secondary">{post.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="rounded bg-white p-6">
              <h3 className="mb-4 text-base font-bold text-ink">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="rounded bg-alt-bg px-3 py-1 text-xs font-medium text-secondary transition-colors hover:bg-accent hover:text-white"
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
