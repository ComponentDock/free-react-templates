const posts = [1, 2, 3] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Recent from <span className="text-brand">blog</span>
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post}
              className="overflow-hidden rounded-2xl border border-gray-100 transition-shadow hover:shadow-lg dark:border-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/locks-blog-${post}/800/500`}
                alt=""
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-mist">
                  Sept 10, 2018 · Admin · 3
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-ink dark:text-white">
                  Men&apos;s hairstyle for all face shapes
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
