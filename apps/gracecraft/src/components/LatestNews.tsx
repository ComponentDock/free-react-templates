import { User, Calendar, MessageCircle } from 'lucide-react'

interface NewsPost {
  title: string
  author: string
  date: string
  comments: number
  excerpt: string
  image: string
}

const posts: NewsPost[] = [
  {
    title: 'Find out why a priest prays around her hometown',
    author: 'Josh Brighton',
    date: '08 MAR, 2018',
    comments: 15,
    excerpt:
      'A heartwarming story of faith and community as a local priest connects with neighbors through daily prayer walks across the town.',
    image: 'https://picsum.photos/seed/gracecraft-news1/400/250',
  },
  {
    title: 'Moderator joins Pope Francis in call to prayer for peace',
    author: 'Ashley Young',
    date: '08 MAR, 2018',
    comments: 12,
    excerpt:
      'In a historic moment of interfaith unity, leaders from around the world gathered to pray for peace and understanding among all nations.',
    image: 'https://picsum.photos/seed/gracecraft-news2/400/250',
  },
  {
    title: 'Church plays a major role in tackling loneliness',
    author: 'Josh Brighton',
    date: '07 MAR, 2018',
    comments: 10,
    excerpt:
      'Our congregation has launched a new initiative to combat loneliness through weekly fellowship gatherings and outreach programs.',
    image: 'https://picsum.photos/seed/gracecraft-news3/400/250',
  },
]

export function LatestNews() {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-ink">Latest news</h2>
          <p className="mt-3 text-mist">
            Be part of a community of people experiencing God together.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-ink">
                  <a href="#" className="hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
