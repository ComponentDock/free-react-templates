import { Clock, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'How your mouth bacteria can harm your lungs',
    excerpt:
      'Donec tempor, lorem et euismod eleifend, est lectus laoreet ante, sed accusan justo diam.',
    date: '28 Sep',
    comments: 3,
    seed: 'dentalyn-blog-1',
  },
  {
    title: 'What is the best kind of toothpaste to use?',
    excerpt:
      'Donec tempor, lorem et euismod eleifend, est lectus laoreet ante, sed accusan justo diam.',
    date: '28 Sep',
    comments: 3,
    seed: 'dentalyn-blog-2',
  },
  {
    title: 'Why you should avoid sipping your drinks',
    excerpt:
      'Donec tempor, lorem et euismod eleifend, est lectus laoreet ante, sed accusan justo diam.',
    date: '28 Sep',
    comments: 3,
    seed: 'dentalyn-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold dark:text-white">The Latest News</h2>
          <div className="mx-auto h-1 w-12 bg-primary-400" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <a
                  href="#"
                  className="mb-2 block text-base font-bold text-ink transition-colors group-hover:text-primary-400 dark:text-white"
                >
                  {post.title}
                </a>
                <p className="mb-4 text-sm text-smoke dark:text-gray-400">{post.excerpt}</p>
                <div className="flex gap-4 text-xs text-mist dark:text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary-400" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5 text-primary-400" aria-hidden="true" />
                    {post.comments} Comments
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
