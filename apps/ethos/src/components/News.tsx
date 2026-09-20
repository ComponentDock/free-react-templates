import { cn } from '@free-react-templates/ui'

const posts = [
  {
    date: 'Sep 15, 2026',
    title: 'Why Online Learning is the Future',
    excerpt:
      'Explore the benefits of online education and how it is transforming the learning landscape worldwide.',
  },
  {
    date: 'Sep 10, 2026',
    title: 'Tips for Effective Study Habits',
    excerpt:
      'Discover proven strategies to improve your study routine and achieve better academic results.',
  },
]

export function News() {
  return (
    <section id="news" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Latest News</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Video card */}
          <div className="overflow-hidden rounded bg-gray-900 shadow-sm">
            <div className="relative aspect-video">
              <img
                src="https://picsum.photos/seed/ethos-news-video/800/450"
                alt="Featured video"
                className="h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play video"
                  className={cn(
                    'flex h-16 w-16 items-center justify-center rounded-full bg-brand-400 text-white',
                    'shadow-lg transition-transform hover:scale-110',
                  )}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>

          {/* Blog posts */}
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <div key={post.title} className="flex gap-4 rounded bg-gray-50 p-4 shadow-sm">
                <img
                  src={`https://picsum.photos/seed/ethos-blog-${post.title.slice(0, 5)}/200/150`}
                  alt={post.title}
                  className="h-24 w-24 flex-shrink-0 rounded object-cover"
                />
                <div>
                  <time className="text-xs text-gray-500">{post.date}</time>
                  <h3 className="mt-1 text-sm font-semibold text-gray-900">{post.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
