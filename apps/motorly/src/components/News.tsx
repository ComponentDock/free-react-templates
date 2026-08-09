import { ChevronRight } from 'lucide-react'

const posts = [
  {
    title: 'Benjamin Franlin Method',
    meta: 'By Brian Gardner on April 1, 2017',
    seed: 'motorly-8',
  },
  {
    title: 'Benjamin Franlin Method',
    meta: 'By Brian Gardner on April 1, 2017',
    seed: 'motorly-9',
  },
  {
    title: 'Benjamin Franlin Method',
    meta: 'By Brian Gardner on April 1, 2017',
    seed: 'motorly-10',
  },
] as const

export function News() {
  return (
    <section id="news" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Latest News
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist dark:text-white/60">
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl bg-paper transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/640/400`}
                alt=""
                className="aspect-[8/5] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {post.meta}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-ink dark:text-white">
                  {post.title}
                </h3>
                <a
                  href="#news"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase text-ink transition-colors hover:text-brand dark:text-white"
                >
                  Continue Reading <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
