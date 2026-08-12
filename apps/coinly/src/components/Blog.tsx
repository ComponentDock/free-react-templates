import { Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    date: '03 jan 2018',
    title: 'Bitcoin hits a new all-time high as institutional money pours in',
    image: 'https://picsum.photos/seed/coinly-blog-1/800/520',
  },
  {
    date: '28 dec 2018',
    title: 'How to keep your wallet safe with two-factor authentication',
    image: 'https://picsum.photos/seed/coinly-blog-2/800/520',
  },
  {
    date: '28 aug 2018',
    title: 'Instant exchange and recurring buys: trading made effortless',
    image: 'https://picsum.photos/seed/coinly-blog-3/800/520',
  },
] as const

export function Blog() {
  return (
    <section id="news" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-medium text-brand md:text-5xl">
          Latest News
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <img src={post.image} alt="" className="h-52 w-full object-cover" />
              <div className="p-6">
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
                  {post.date}
                </p>
                <h4 className="mt-2 font-display text-xl font-medium leading-snug text-brand">
                  {post.title}
                </h4>
                <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                  <span>by Admin</span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    234 Likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    08 comments
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
