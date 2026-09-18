const posts = [
  {
    title: 'When she reached the first',
    date: 'June 18, 2020',
    author: 'Admin',
    seed: 'talentflow-blog-1',
    size: 'one-third',
  },
  {
    title: 'Duden flows by their place',
    date: 'July 17, 2020',
    author: 'Admin',
    seed: 'talentflow-blog-2',
    size: 'two-third',
  },
  {
    title: 'Italic Mountains',
    date: 'March 18, 2020',
    author: 'Admin',
    seed: 'talentflow-blog-3',
    size: 'two-third',
  },
  {
    title: 'Behind the word mountains',
    date: 'March 22, 2020',
    author: 'Admin',
    seed: 'talentflow-blog-4',
    size: 'one-third',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Our Blog</h2>
          <p className="mx-auto max-w-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reiciendis dolore,
            facilis ipsam officiis quasi?
          </p>
        </div>

        {/* Row 1: 1/3 + 2/3 */}
        <div className="mb-1 flex flex-col gap-1 sm:flex-row">
          <a
            href="#"
            className="group relative block h-[300px] overflow-hidden bg-cover bg-center sm:h-[500px]"
            style={{
              backgroundImage: `url('https://picsum.photos/seed/talentflow-blog-1/800/600')`,
              width: '100%',
            }}
          >
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/50" />
            <div className="absolute left-5 top-12 z-10 opacity-0 transition-all duration-300 group-hover:top-5 group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">{posts[0]!.title}</h3>
              <span className="text-sm text-white/60">
                {posts[0]!.date} &bull; by {posts[0]!.author}
              </span>
            </div>
          </a>
          <a
            href="#"
            className="group relative block h-[300px] overflow-hidden bg-cover bg-center sm:h-[500px]"
            style={{
              backgroundImage: `url('https://picsum.photos/seed/talentflow-blog-2/800/600')`,
              width: '100%',
            }}
          >
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/50" />
            <div className="absolute left-5 top-12 z-10 opacity-0 transition-all duration-300 group-hover:top-5 group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">{posts[1]!.title}</h3>
              <span className="text-sm text-white/60">
                {posts[1]!.date} &bull; by {posts[1]!.author}
              </span>
            </div>
          </a>
        </div>

        {/* Row 2: 2/3 + 1/3 */}
        <div className="flex flex-col gap-1 sm:flex-row">
          <a
            href="#"
            className="group relative block h-[300px] overflow-hidden bg-cover bg-center sm:h-[500px]"
            style={{
              backgroundImage: `url('https://picsum.photos/seed/talentflow-blog-3/800/600')`,
              width: '100%',
            }}
          >
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/50" />
            <div className="absolute left-5 top-12 z-10 opacity-0 transition-all duration-300 group-hover:top-5 group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">{posts[2]!.title}</h3>
              <span className="text-sm text-white/60">
                {posts[2]!.date} &bull; by {posts[2]!.author}
              </span>
            </div>
          </a>
          <a
            href="#"
            className="group relative block h-[300px] overflow-hidden bg-cover bg-center sm:h-[500px]"
            style={{
              backgroundImage: `url('https://picsum.photos/seed/talentflow-blog-4/800/600')`,
              width: '100%',
            }}
          >
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/50" />
            <div className="absolute left-5 top-12 z-10 opacity-0 transition-all duration-300 group-hover:top-5 group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">{posts[3]!.title}</h3>
              <span className="text-sm text-white/60">
                {posts[3]!.date} &bull; by {posts[3]!.author}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
