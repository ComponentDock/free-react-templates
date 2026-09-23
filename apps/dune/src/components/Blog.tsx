import { Calendar, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Forest responds to consultation smoking in al fresco.',
    date: 'Jan 03, 2024',
    comments: '03 Comments',
    excerpt:
      'Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient.',
    seed: 'dune-blog-1',
  },
  {
    title: 'Forest responds to consultation smoking in al fresco.',
    date: 'Jan 03, 2024',
    comments: '03 Comments',
    excerpt:
      'Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient.',
    seed: 'dune-blog-2',
  },
  {
    title: 'Forest responds to consultation smoking in al fresco.',
    date: 'Jan 03, 2024',
    comments: '03 Comments',
    excerpt:
      'Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient.',
    seed: 'dune-blog-3',
  },
] as const

export function Blog() {
  return (
    <section
      id="blog"
      className="bg-gray-50 py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Latest Posts</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            From our Blog
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-500 dark:text-gray-400">
            Stay updated with the latest travel tips and destination guides.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-colors hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={250}
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <ul className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                  <li className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments}
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
