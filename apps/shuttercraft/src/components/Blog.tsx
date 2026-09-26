import { Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    seed: 'shuttercraft-blog-1',
    title: 'Chasing Golden Hour Light',
    excerpt:
      'The magic hour before sunset provides the most breathtaking natural lighting conditions for outdoor photography sessions.',
    author: 'Alex Morgan',
    authorSeed: 'shuttercraft-author-1',
    date: '15th Dec',
    likes: 24,
    comments: 8,
  },
  {
    seed: 'shuttercraft-blog-2',
    title: 'Mastering Portrait Composition',
    excerpt:
      'Understanding the rule of thirds and leading lines can transform a simple portrait into a compelling visual narrative.',
    author: 'Jordan Lee',
    authorSeed: 'shuttercraft-author-2',
    date: '12th Dec',
    likes: 18,
    comments: 5,
  },
  {
    seed: 'shuttercraft-blog-3',
    title: 'Essential Gear for Street Photography',
    excerpt:
      'From compact mirrorless bodies to versatile prime lenses, discover the tools that elevate your street photography game.',
    author: 'Sam Rivera',
    authorSeed: 'shuttercraft-author-3',
    date: '10th Dec',
    likes: 31,
    comments: 12,
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Our Recent Blogs</h2>
          <p className="mx-auto max-w-xl text-ink-light">
            Tips, stories, and insights from behind the lens to help you elevate your photography
            skills.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.seed} className="flex flex-col">
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                loading="lazy"
                className="w-full rounded-t-lg object-cover"
              />
              <div className="flex flex-1 flex-col rounded-b-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide text-ink">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-light">{post.excerpt}</p>
                <div className="flex items-center justify-between border-t border-ink/10 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://picsum.photos/seed/${post.authorSeed}/40/40`}
                      alt={post.author}
                      className="h-8 w-8 rounded-full object-cover"
                      loading="lazy"
                    />
                    <span className="text-xs font-medium text-ink">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-ink-light">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" aria-hidden="true" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" aria-hidden="true" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
