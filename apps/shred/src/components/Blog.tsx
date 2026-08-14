import { MessageCircle } from 'lucide-react'
import { BLOG_POSTS } from '../data'

/* Blog — light #f8f9fa grid of three post cards (image, meta row with
   date / Admin / comment count, title). */
export function Blog() {
  return (
    <section id="blog-section" aria-label="Blog" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">News</span>
          <h2 className="mt-2 text-4xl font-semibold text-black">Our Blog</h2>
          <p className="mt-4 text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="bg-white">
              <img src={post.image} alt="" className="h-48 w-full object-cover" />
              <div className="p-7">
                <p className="text-sm text-mist">
                  {post.month} {post.day}, {post.year} <span aria-hidden="true">·</span>{' '}
                  <span>Admin</span>
                  <span aria-hidden="true"> · </span>
                  <MessageCircle className="inline h-4 w-4 text-brand" aria-hidden="true" />
                  <span> {post.comments} Comments</span>
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-black">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
