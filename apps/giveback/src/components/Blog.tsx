import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-medium uppercase tracking-widest text-teal">News</span>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy sm:text-4xl dark:text-white">
            Latest Blog
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
                <span className="absolute left-4 top-4 flex h-16 w-14 flex-col items-center justify-center bg-teal text-white">
                  <span className="font-display text-xl font-medium leading-none">{post.day}</span>
                  <span className="mt-1 text-xs uppercase tracking-wide">{post.month}</span>
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-medium leading-snug text-navy dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink">{post.paragraph}</p>
                <a
                  href="#blog"
                  onClick={(event) => event.preventDefault()}
                  className="mt-4 inline-block border-b-2 border-brand pb-0.5 text-sm font-medium uppercase tracking-wide text-brand transition-colors hover:text-flame"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
