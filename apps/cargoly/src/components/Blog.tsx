import { ArrowRight, Heart, MessageCircle } from 'lucide-react'
import { BLOG_POSTS, BLOG_TITLE } from '../data'

/**
 * Latest blog — three cards (source `section.blog_part`): each with a photo,
 * a white date block (month + year), title, excerpt, likes/comments meta,
 * and a "read more" link.
 */
export function Blog() {
  return (
    <section className="bg-white pb-24 pt-8" aria-label="Latest blog">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-center font-display text-4xl font-bold text-ink">{BLOG_TITLE}</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="rounded-[4px] bg-soft p-5">
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/370/230`}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute left-4 top-4 bg-white px-4 py-2 text-center shadow">
                  <span className="block font-display text-sm font-bold uppercase text-brand">
                    {post.month}
                  </span>
                  <span className="block text-xs font-medium text-ink">{post.year}</span>
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{post.excerpt}</p>
              <p className="mt-4 flex items-center gap-4 text-xs text-mist">
                <span className="inline-flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5 text-heart" aria-hidden="true" />
                  {post.likes} Likes
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  {post.comments} Comment{post.comments === 1 ? '' : 's'}
                </span>
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand transition-colors hover:text-accent"
              >
                read more
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
