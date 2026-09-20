import { ButtonLink } from '@free-react-templates/ui'

interface Post {
  image: string
  title: string
  author: string
  date: string
  excerpt: string
}

const POSTS: Post[] = [
  {
    image: 'https://picsum.photos/seed/seminar-news1/800/500',
    title: 'Design your open source strategy',
    author: 'Emely Peters',
    date: 'Sep. 10, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi.',
  },
  {
    image: 'https://picsum.photos/seed/seminar-news2/800/500',
    title: 'Design your open source strategy',
    author: 'Emely Peters',
    date: 'Sep. 10, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi.',
  },
  {
    image: 'https://picsum.photos/seed/seminar-news3/800/500',
    title: 'Design your open source strategy',
    author: 'Emely Peters',
    date: 'Sep. 10, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi.',
  },
]

export function News() {
  return (
    <section id="news" className="py-20 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">News</h2>
          <div className="mx-auto h-1 w-16 rounded bg-gradient-to-r from-primary-700 to-primary-400" />
          <p className="mt-6 max-w-xl mx-auto text-text text-sm leading-relaxed">
            Stay updated with the latest from the conference.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <article
              key={i}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-ink"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-bold text-white">{post.title}</h3>
                <p className="text-xs text-text">
                  {post.author} &middot; {post.date}
                </p>
                <p className="flex-1 text-sm leading-relaxed text-text">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink
            href="#"
            className="bg-gradient-to-r from-primary-700 to-primary-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:opacity-90 transition-opacity"
          >
            More Blog Posts
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
