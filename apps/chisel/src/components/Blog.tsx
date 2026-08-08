const posts = [
  { id: 1, seed: 'chisel-blog-1' },
  { id: 2, seed: 'chisel-blog-2' },
  { id: 3, seed: 'chisel-blog-3' },
  { id: 4, seed: 'chisel-blog-4' },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog posts" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-ink dark:text-white">
          Blog Posts
        </h2>
        <p className="mt-4 max-w-2xl text-mist dark:text-white/60">
          Separated they live in. Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <a href="#blog" aria-label="Blog post image">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt="Blog post"
                  className="h-[180px] w-full rounded object-cover transition-opacity group-hover:opacity-80"
                />
              </a>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink dark:text-white">
                <a href="#blog" className="hover:text-brand">
                  Separated they live in
                </a>
              </h3>
              <p className="mt-2 text-xs uppercase tracking-wide text-mist dark:text-white/50">
                Aug 4, 2020 by{' '}
                <a href="#blog" className="text-brand hover:underline">
                  Admin
                </a>{' '}
                in{' '}
                <a href="#blog" className="text-brand hover:underline">
                  Architect
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
