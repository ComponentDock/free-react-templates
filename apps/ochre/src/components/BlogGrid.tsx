import { posts, imgUrl } from '../data'

export function BlogGrid() {
  return (
    <section aria-label="Blog posts" className="bg-white dark:bg-gray-900">
      <div className="grid gap-10 sm:grid-cols-2">
        {posts.map((post) => (
          <article key={post.seed}>
            <img
              src={imgUrl(post.seed, 640, 420)}
              alt={post.title}
              className="h-56 w-full object-cover"
            />
            <div className="relative mx-auto -mt-10 max-w-[300px] bg-white px-5 py-6 text-center shadow-sm dark:bg-gray-800">
              <p className="text-sm font-medium text-brand">{post.category}</p>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink dark:text-white">
                <a href="#top" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-xs text-body">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
