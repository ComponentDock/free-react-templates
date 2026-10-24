import { ArrowRight } from 'lucide-react'
import { posts } from '../data'
import { SectionHeading } from './SectionHeading'

/* Four blog cards: 200px cover image, white body, 12px date, 16px bold title,
   summary and a Read More row with a 30px circular arrow. */
export function BlogPosts() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Vokalia and Consonantia, there live the blind texts." centered />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.seed} className="group flex h-full flex-col">
              <a
                href="#blog"
                aria-label={`${post.title} cover image`}
                className="block h-[200px] bg-cover bg-center transition-opacity group-hover:opacity-90"
                style={{
                  backgroundImage: `url(https://picsum.photos/seed/${post.seed}/600/400)`,
                }}
              />
              <div className="flex flex-1 flex-col bg-white pb-12 pl-5 pr-5 pt-5">
                <span className="text-xs text-muted">{post.date}</span>
                <h3 className="mt-2 font-display text-base font-bold leading-snug">
                  <a href="#blog" className="text-ink transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-body">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-auto flex items-center justify-end gap-3 pt-6 text-[13px] font-bold text-ink"
                >
                  <span className="transition-colors group-hover:text-brand">Read More</span>
                  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-band transition-colors group-hover:border-brand">
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-brand" />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
