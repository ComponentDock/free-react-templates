import { ArrowRight, Play } from 'lucide-react'
import type { Post } from '../data'
import { imgUrl, readMoreLabel, watchVideoLabel } from '../data'

interface PostSectionProps {
  post: Post
}

/** Full-screen blog post: fixed cover photo under a dark overlay, centered
 *  uppercase date/categories/title, serif excerpt, READ MORE / WATCH VIDEO. */
export function PostSection({ post }: PostSectionProps) {
  return (
    <section
      aria-label={post.title}
      className="relative flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${imgUrl(post.seed, 1600, 900)})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-overlay/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center text-white">
        <p className="font-sans text-xl font-bold uppercase tracking-wide">{post.date}</p>
        <p className="mt-3 font-sans text-xl font-bold uppercase tracking-wide text-white/80">
          {post.categories}
        </p>
        <h2 className="mt-9 font-sans text-3xl font-bold uppercase leading-tight md:text-[56px] md:leading-[60px]">
          {post.title}
        </h2>
        <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl leading-relaxed text-white/90 md:text-[36px] md:leading-[50px]">
          {post.excerpt}
        </p>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
          <a
            href="#"
            className="inline-flex items-center gap-3 font-sans text-lg font-bold uppercase tracking-wider text-white transition-colors hover:text-accent"
          >
            <ArrowRight className="h-6 w-6" aria-hidden="true" />
            {readMoreLabel}
          </a>
          {post.hasVideo && (
            <a
              href="#"
              className="inline-flex items-center gap-3 font-sans text-lg font-bold uppercase tracking-wider text-white transition-colors hover:text-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white">
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              </span>
              {watchVideoLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
