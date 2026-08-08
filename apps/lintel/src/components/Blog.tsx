import { ArrowRight } from 'lucide-react'

const posts = [
  { meta: 'September 30, 2019', title: 'Iusto quos veniam magni totam' },
  { meta: 'September 30, 2019', title: 'Iusto quos veniam magni totam' },
  { meta: 'September 30, 2019', title: 'Iusto quos veniam magni totam' },
  { meta: 'September 30, 2019', title: 'Iusto quos veniam magni totam' },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold uppercase text-ink dark:text-white">Blog and Updates</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist dark:text-white/60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quos veniam magni totam,
          architecto earum dolor id obcaecati!
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <article key={post.title + i} className="border-t-2 border-slate/10 pt-5">
              <span className="text-xs font-bold uppercase text-mist dark:text-white/60">
                {post.meta}
              </span>
              <h3 className="mt-3 text-base font-bold leading-snug text-ink dark:text-white">
                <a href="#blog" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <a
                href="#blog"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase text-ink transition-colors hover:text-brand dark:text-white"
              >
                Read More <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
