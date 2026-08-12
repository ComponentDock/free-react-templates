import { MessageCircle } from 'lucide-react'
import { posts } from '../data'
import { SectionTitle } from './SectionTitle'

export function Blog() {
  return (
    <section id="blog" className="bg-light py-16 md:py-24" aria-label="Blog">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle overline="From The Blog" title="Latest News & Update" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <article key={index} className="bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/swish-post-${index + 1}/400/260`}
                alt=""
                className="h-40 w-full object-cover"
                width={400}
                height={260}
              />
              <div className="p-5">
                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                  {post.date}
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug font-bold text-ink">
                  {post.title}
                </h3>
                <p className="mt-3 flex items-center gap-3 text-xs text-muted">
                  <span className="bg-brand px-2 py-0.5 font-bold tracking-wide text-white uppercase">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
