import { MessageCircle } from 'lucide-react'
import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" aria-label="Recent Blog" className="bg-light py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">Recent Blog</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-base font-light text-gray-500">
          Even the all-powerful Pointing has no control about the blind texts.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.image} className="bg-white">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-[240px] w-full object-cover"
              />
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-light text-gray-500">
                  {post.meta.split(' · ')[0]}
                  <span aria-hidden="true">·</span>
                  {post.meta.split(' · ')[1]}
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.meta.split(' · ')[2]?.split(' ')[0]}
                  </span>
                </p>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-500">
                  {post.blurb}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-indigo hover:underline"
                >
                  Continue Reading
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
