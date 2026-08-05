const posts = [
  {
    title: 'Addiction When Gambling Becomes A Problem',
    author: 'Mark Wiens',
    date: '25 June, 2018',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. At work, at school, and even at home, screens shape how we spend our days.',
    seed: 'crafted-blog-1',
  },
  {
    title: 'Design Trends That Define The Next Decade',
    author: 'Mark Wiens',
    date: '25 June, 2018',
    excerpt:
      'Great design is invisible: it guides attention, builds trust, and makes complex ideas feel effortless. Here are the patterns we keep coming back to.',
    seed: 'crafted-blog-2',
  },
  {
    title: 'Building Products People Actually Use',
    author: 'Mark Wiens',
    date: '25 June, 2018',
    excerpt:
      'A successful launch is less about the technology and more about the rituals: research, iteration, and honest feedback loops from day one.',
    seed: 'crafted-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Latest Posts From Our Blog
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.seed}
              className="overflow-hidden rounded bg-white shadow-md dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/640/420`}
                alt=""
                aria-hidden="true"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-medium text-body dark:text-gray-400">
                  {post.date} | By {post.author}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-medium text-primary-500 transition-colors hover:text-primary-400"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
