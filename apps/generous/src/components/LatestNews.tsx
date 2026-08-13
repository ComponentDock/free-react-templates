import { newsPosts } from '../data'

export function LatestNews() {
  return (
    <section id="blog" aria-label="Latest news" className="bg-light py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">Latest News</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <article key={post.title} className="post-entry">
              <img src={post.img} alt={post.alt} className="h-48 w-full rounded object-cover" />
              <p className="mt-4 text-xs uppercase tracking-widest text-gray-400">{post.date}</p>
              <h3 className="mt-2 text-lg font-bold text-ink">
                <a href="#blog" className="transition-colors hover:text-primary">
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm font-light text-gray-500">{post.text}</p>
              <a
                href="#blog"
                className="mt-3 inline-block text-sm font-medium text-primary transition-colors hover:text-primary-700"
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
