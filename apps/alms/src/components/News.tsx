import { posts } from '../data'

export function News() {
  return (
    <section id="news" className="bg-band py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-4xl font-light">Latest News</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <a href="#news" className="relative block overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-0 left-0 bg-brand px-5 py-2 text-sm text-white">
                  {post.date}
                </span>
              </a>
              <h3 className="mt-5 font-heading text-xl font-light leading-snug">
                <a href="#news" className="text-ink transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-body">{post.excerpt}</p>
              <a
                href="#news"
                className="mt-3 inline-block text-sm text-brand underline decoration-brand/60 underline-offset-4 hover:no-underline"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
