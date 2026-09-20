import { Calendar, User } from 'lucide-react'

const posts = [
  {
    title: "Parents who try to be their children's best friends",
    date: '24 Mar 2018',
    author: 'Owen Wilson',
    excerpt:
      'Integer luctus diam ac scerisque consectetur. Vimus dot euismod neganeco lacus sit amet. Aenean interdus mid vitae sed accumsan...',
    seed: 'lectern-blog-1',
  },
  {
    title: 'Graduations could be delayed as external examiners',
    date: '23 Mar 2018',
    author: 'Owen Wilson',
    excerpt:
      'Integer luctus diam ac scerisque consectetur. Vimus dot euismod neganeco lacus sit amet. Aenean interdus mid vitae sed accumsan...',
    seed: 'lectern-blog-2',
  },
  {
    title: 'Private schools adopt a Ucas style application system',
    date: '24 Mar 2018',
    author: 'Owen Wilson',
    excerpt:
      'Integer luctus diam ac scerisque consectetur. Vimus dot euismod neganeco lacus sit amet. Aenean interdus mid vitae sed accumsan...',
    seed: 'lectern-blog-3',
  },
  {
    title: 'Cambridge digs in at the top of university league table',
    date: '23 Mar 2018',
    author: 'Owen Wilson',
    excerpt:
      'Integer luctus diam ac scerisque consectetur. Vimus dot euismod neganeco lacus sit amet. Aenean interdus mid vitae sed accumsan...',
    seed: 'lectern-blog-4',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
            Latest News
          </h2>
          <p className="mt-2 text-body">Get latest breaking news &amp; top stories today</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900 sm:flex-row"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/300`}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="h-48 w-full object-cover sm:h-auto sm:w-48"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-base font-bold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <div className="mb-3 flex items-center gap-3 text-xs text-body">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {post.author}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
