const posts = [
  {
    title: 'How to Train Your Dog',
    excerpt:
      'Simple, reward-based training tips that turn everyday moments into lessons your dog will love to learn.',
    seed: 1,
  },
  {
    title: 'Find The Right Food For Your Dogs',
    excerpt:
      'What to look for on the label, how to read portion sizes, and when to switch your dog to a new diet.',
    seed: 2,
  },
  {
    title: "Dog's Affections To Owner",
    excerpt:
      'Science says dogs really do love us. Here is how your dog shows affection — and how to return it.',
    seed: 3,
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Recent Blog Post
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300">
            Fresh tips, stories, and expert advice for dog lovers — published every week.
          </p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <img
                src={`https://picsum.photos/seed/breed-blog-${post.seed}/600/400`}
                alt=""
                className="w-full object-cover"
              />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Feb 26th, 2018
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">{post.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
              <a
                href="#blog"
                className="mt-5 inline-block border-2 border-brand bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-brand-hover hover:bg-brand-hover"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
