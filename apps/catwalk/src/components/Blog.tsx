interface Post {
  date: string
  author: string
  comments: number
  title: string
  blurb: string
  image: string
}

const posts: Post[] = [
  {
    date: 'sept. 17, 2019',
    author: 'Admin',
    comments: 3,
    title: 'The Most Attractive Persons of the Hollywood',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/catwalk-blog-1/600/400',
  },
  {
    date: 'sept. 12, 2019',
    author: 'Admin',
    comments: 2,
    title: 'A Day in the Life of a Runway Model',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/catwalk-blog-2/600/400',
  },
  {
    date: 'sept. 05, 2019',
    author: 'Admin',
    comments: 5,
    title: 'Top Trends from the Autumn Fashion Week',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/catwalk-blog-3/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-brand">
          Our latest update
        </p>
        <h2 className="mt-2 text-center text-3xl font-semibold text-ink dark:text-white lg:text-4xl">
          Case Study
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="bg-paper dark:bg-gray-800">
              <img src={post.image} alt="" className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-brand">
                  {post.date} · {post.author} · {post.comments} comments
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
                  {post.blurb}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-medium text-brand transition-colors hover:text-peach"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
