import { MessageCircle } from 'lucide-react'

const posts = [
  {
    date: 'March 23, 2024',
    author: 'Admin',
    comments: 3,
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'forger-blog-1',
  },
  {
    date: 'March 23, 2024',
    author: 'Admin',
    comments: 3,
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'forger-blog-2',
  },
  {
    date: 'March 23, 2024',
    author: 'Admin',
    comments: 3,
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'forger-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-white">
            Blog
          </span>
          <h2 className="mt-4 text-3xl font-bold">Our Blog</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="font-bold leading-snug group-hover:text-brand">
                  <a href="#blog">{post.title}</a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
