const posts = [
  { author: 'Ham Brook', seed: 'chimper-blog-1' },
  { author: 'James Phelps', seed: 'chimper-blog-2' },
  { author: 'James Phelps', seed: 'chimper-blog-3' },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="relative inline-block pb-5 text-4xl font-bold text-black after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[100px] after:-translate-x-1/2 after:bg-primary-600 dark:text-white">
            Blog
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={`${post.author}-${i}`} className="flex flex-col">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/450`}
                alt={`Blog post ${i + 1} illustration`}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <h3 className="mt-6 text-xl font-bold leading-snug text-black dark:text-white">
                <a
                  href="#blog"
                  className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Create Beautiful Website In Less Than An Hour
                </a>
              </h3>
              <div className="mt-3 text-sm text-gray-400 dark:text-gray-500">
                {post.author} <span className="mx-2">•</span> Jan 18, 2019
                <span className="mx-2">•</span>{' '}
                <a
                  href="#blog"
                  className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                >
                  News
                </a>
              </div>
              <p className="mt-4 leading-relaxed text-ink dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea
                maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
              </p>
              <p className="mt-4">
                <a
                  href="#blog"
                  className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
                >
                  Continue Reading...
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
