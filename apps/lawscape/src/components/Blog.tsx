import { Calendar, MessageCircle, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Founder Defends Site After Shoot',
    date: 'Feb 25 2018',
    comments: 1,
    excerpt:
      'Varius conubia a mauris litora lacus. Cubilia proin on ornare et nunc dapibus vel rutrum augue facilisis malesuada et porta impe.',
    image: 'https://picsum.photos/seed/lawscape-blog1/600/400',
  },
  {
    title: 'Computer Models to Investors Short',
    date: 'Feb 25 2018',
    comments: 1,
    excerpt:
      'Varius conubia a mauris litora lacus. Cubilia proin on ornare et nunc dapibus vel rutrum augue facilisis malesuada et porta impe.',
    image: 'https://picsum.photos/seed/lawscape-blog2/600/400',
  },
  {
    title: 'New Legal Framework Announced',
    date: 'Feb 25 2018',
    comments: 1,
    excerpt:
      'Varius conubia a mauris litora lacus. Cubilia proin on ornare et nunc dapibus vel rutrum augue facilisis malesuada et porta impe.',
    image: 'https://picsum.photos/seed/lawscape-blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">Latest From Blog</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-smoke">
            Female divided bearing rule one called said Beginning set you living above saw seasons
            void created fruitful third years god.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden bg-white">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-ink">{post.title}</h3>
                <ul className="mt-3 flex gap-4 text-xs text-smoke">
                  <li className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </li>
                  <li className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments} Comment
                  </li>
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{post.excerpt}</p>
              </div>
              <div className="border-t px-5 py-3">
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-primary-500"
                >
                  Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
