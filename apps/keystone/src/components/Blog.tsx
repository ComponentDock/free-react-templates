import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Footprints in Time Is a Perfect House in Kurashiki',
    meta: 'Design | Insights',
    seed: 'keystone-blog-1',
    blurb:
      'A timber home that borrows its rhythm from the old storehouses of the Kurashiki canal district.',
  },
  {
    title: 'Concrete Poetry: Building With Light and Shadow',
    meta: 'Materials | Process',
    seed: 'keystone-blog-2',
    blurb:
      'How raw concrete, deep reveals, and careful orientation turn a simple volume into a play of light.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">From the Blog</p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-navy dark:text-white">
          All Recent Articles From Us
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="border border-line transition-colors hover:border-brand dark:border-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/380`}
                alt=""
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {post.meta}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold uppercase leading-snug text-navy dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-300">
                  {post.blurb}
                </p>
                <a
                  href="#blog"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-navy transition-colors hover:text-brand dark:text-white"
                >
                  Read More
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
