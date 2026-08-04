const posts = [
  {
    title: 'Shelter and Feed Animals that Are in Need',
    meta: 'Aug. 12, 2020 | Admin | 3',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Signs Your Pet Needs a Vet Visit Soon',
    meta: 'Aug. 05, 2020 | Admin | 2',
    excerpt:
      'Changes in appetite, energy, or behaviour are often the first clues — learn which symptoms deserve a check-up.',
  },
  {
    title: 'Grooming Tips for a Shiny, Healthy Coat',
    meta: 'Jul. 28, 2020 | Admin | 5',
    excerpt:
      'A simple brushing routine keeps your pet comfortable and your home fur-free. Here is how to get started.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-16 dark:bg-gray-950 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-gray-900 sm:text-4xl dark:text-white">
          Latest Blog Updates
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/petvet-blog-${index + 1}/480/280`}
                alt=""
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {post.meta}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-bold text-brand transition-colors hover:text-brand-strong"
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
