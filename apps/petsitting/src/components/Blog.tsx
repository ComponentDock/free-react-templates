const posts = [
  {
    title: 'The Best Diet for Senior Dogs',
    seed: 'petsitting-blog-1',
    excerpt:
      'Older dogs have different nutritional needs. Here is how to keep them strong and energetic.',
  },
  {
    title: 'How to Introduce a New Kitten to Your Home',
    seed: 'petsitting-blog-2',
    excerpt:
      'A calm first week makes all the difference. Follow these steps for a smooth transition.',
  },
  {
    title: 'Keeping Cats Entertained Indoors',
    seed: 'petsitting-blog-3',
    excerpt: 'Simple toys and climbing spots that keep indoor cats active, curious, and content.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-night dark:text-white">
          Latest news from our blog
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light text-gray-500 dark:text-gray-400">
          Practical pet care advice from our team of sitters.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/480/320`}
                alt=""
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-wide text-accent">
                  Pet Care Tips
                </p>
                <h3 className="mt-3 text-lg font-bold text-night dark:text-white">{post.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-5 inline-block text-sm font-bold text-brand transition-colors hover:text-brand-strong"
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
