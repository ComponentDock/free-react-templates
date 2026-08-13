const posts = [
  {
    seed: 'skyward-blog-1',
    date: 'Aug 5, 2019',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    seed: 'skyward-blog-2',
    date: 'Aug 10, 2019',
    title: 'Separated they live in Bookmarksgrove right at the coast',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    seed: 'skyward-blog-3',
    date: 'Aug 15, 2019',
    title: 'It is a paradisematic country, in which roasted parts of sentences',
    excerpt: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas.',
  },
]

/** Light section with a heading and three blog cards (image, meta, title,
 *  excerpt, read-more link). */
export function Blog() {
  return (
    <section id="blog" className="bg-mist-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-gray-900">Recent Blog</h2>
          <p className="mt-4 text-gray-500">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map(({ seed, date, title, excerpt }) => (
            <article key={seed} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${seed}/600/400`}
                  alt=""
                  className="h-[270px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400">{date} · Admin</p>
                <h3 className="mt-3 text-lg font-medium text-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
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
