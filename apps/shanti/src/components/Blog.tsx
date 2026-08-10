const posts = [
  {
    seed: 'shanti-9',
    day: '31',
    month: 'December',
    title: 'Young Women Doing Yoga',
    blurb: 'How a small group of friends turned morning practice into a lifelong ritual.',
  },
  {
    seed: 'shanti-10',
    day: '27',
    month: 'December',
    title: 'Young Women Doing Yoga',
    blurb: 'Five simple poses to reset your energy between meetings and deadlines.',
  },
  {
    seed: 'shanti-11',
    day: '26',
    month: 'December',
    title: 'Young Women Doing Yoga',
    blurb: 'Breathing techniques that help you stay calm when the season gets busy.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-soft-100 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-base font-normal tracking-[0.2em] text-body-500 uppercase">Blog</h3>
          <h2 className="mt-3 text-4xl font-extralight text-black sm:text-5xl">Recent Posts</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.seed} className="group">
              <div className="relative h-[270px] overflow-hidden rounded-sm">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/540`}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 -mt-10 mx-4 rounded-sm bg-white p-6 shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[58px] leading-none font-extralight text-mauve-500">
                    {post.day}
                  </span>
                  <span className="text-sm text-body-500">
                    <span className="block">{post.month}</span>
                    <span className="block">2018</span>
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-normal text-black">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body-500">{post.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
