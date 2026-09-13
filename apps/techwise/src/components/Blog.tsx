import { Calendar, User, MessageSquare } from 'lucide-react'

const posts = [
  {
    date: '15 Jan, 2024',
    author: 'Admin',
    comments: 3,
    title: 'The Future of Web Design Trends in 2024',
    excerpt:
      'Explore the latest design trends that are shaping the digital landscape and how businesses can leverage them for growth.',
    seed: 'techwise-blog-1',
  },
  {
    date: '22 Jan, 2024',
    author: 'Sarah Chen',
    comments: 5,
    title: 'Building Scalable Applications with Modern Tech',
    excerpt:
      "A deep dive into the technologies and architectures that power today's most successful web applications.",
    seed: 'techwise-blog-2',
  },
  {
    date: '30 Jan, 2024',
    author: 'James Wilson',
    comments: 2,
    title: 'Branding Strategies for Digital-First Companies',
    excerpt:
      'How to create a compelling brand identity that resonates with your audience in the digital age.',
    seed: 'techwise-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-light-bg py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Blog</span>
          <h2 className="mt-4 text-3xl font-bold text-dark-bg sm:text-4xl">Recent Post</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/700/400`}
                  alt={post.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-dark-bg">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-brand/80"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
