const posts = [
  {
    seed: 'boostly-blog1',
    title: 'Starts the automated process.',
    excerpt: 'The automated process starts as soon as your clothes go into the machine.',
  },
  {
    seed: 'boostly-blog2',
    title: 'Starts the automated process.',
    excerpt: 'The automated process starts as soon as your clothes go into the machine.',
  },
  {
    seed: 'boostly-blog3',
    title: 'Starts the automated process.',
    excerpt: 'The automated process starts as soon as your clothes go into the machine.',
  },
] as const

/** Blog: centered heading over three cards — photo with an Urban category
 *  badge (orange fill on the first card, white outline on the rest),
 *  24px title that underlines on hover, and a short excerpt. Cards lift
 *  with an orange shadow on hover. */
export function Blog() {
  return (
    <section id="blog" className="pb-[100px] pt-[120px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-[70px] text-center font-heading text-[31px] font-bold leading-[1.4] text-ink lg:text-[46px]">
          Our latest blog
        </h2>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.seed}
              className="group bg-white transition-shadow duration-300 hover:shadow-[0px_15px_25px_rgba(168,96,0,0.1)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/400/300`}
                  alt="Blog post cover"
                  className="h-[300px] w-full object-cover"
                />
                <span
                  className={
                    index === 0
                      ? 'absolute left-7 top-8 rounded-[30px] bg-brand px-[15px] py-[7px] text-[13px] font-medium capitalize text-white'
                      : 'absolute left-7 top-8 rounded-[30px] border border-white/50 px-[15px] py-[7px] text-[13px] font-medium capitalize text-white'
                  }
                >
                  Urban
                </span>
              </div>
              <div className="pb-8 pr-[18px] pt-[29px]">
                <h3 className="mb-[19px] font-heading text-2xl font-medium text-ink decoration-brand underline-offset-4 group-hover:underline">
                  <a href="#blog">{post.title}</a>
                </h3>
                <p className="font-body text-base text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
