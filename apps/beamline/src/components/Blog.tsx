import { ArrowRight } from 'lucide-react'

const posts = [
  { date: 'June 01, 2020', title: 'Make Peace With Your Broken Pieces', seed: 'beamline-blog-1' },
  { date: 'June 01, 2020', title: 'Make Peace With Your Broken Pieces', seed: 'beamline-blog-2' },
  { date: 'June 01, 2020', title: 'Make Peace With Your Broken Pieces', seed: 'beamline-blog-3' },
  { date: 'June 01, 2020', title: 'Make Peace With Your Broken Pieces', seed: 'beamline-blog-4' },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-brand">Blog</p>
        <h2 className="mt-3 text-center text-4xl font-extralight leading-tight text-ink dark:text-white">
          Recent Blog
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/500/350`}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {post.date} · Admin · {index + 3} Comments
                </p>
                <h3 className="mt-3 text-base font-bold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:text-brand dark:text-white"
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
