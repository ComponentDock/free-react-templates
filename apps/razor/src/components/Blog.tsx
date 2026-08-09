const posts = [
  {
    title: 'Beginners Guide to Hair Styling',
    meta: 'Oct. 12, 2020 · Admin · 3',
    seed: 'razor-blog-1',
  },
  {
    title: '5 Beard Care Tips from Our Barbers',
    meta: 'Oct. 05, 2020 · Admin · 5',
    seed: 'razor-blog-2',
  },
  {
    title: 'Choosing the Right Haircut for Your Face',
    meta: 'Sep. 28, 2020 · Admin · 7',
    seed: 'razor-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-ink dark:text-white lg:text-5xl">
            Recent Post
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl bg-paper transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/800/500`}
                alt={post.title}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {post.meta}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia...
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
