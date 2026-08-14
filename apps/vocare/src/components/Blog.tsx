import { MessageCircle } from 'lucide-react'
import { BLOG_POSTS } from '../data'

/* Blog grid on the light #f8f9fa band: four cards with a 250px cover
   image, meta row (date · author · comment count) and an 18px title
   that turns brand blue on hover. */
export function Blog() {
  return (
    <section className="bg-mist py-[6em]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[2px] text-brand">Our Blog</p>
          <h2 className="mt-2 text-[28px] font-medium text-black md:text-[38px]">Recent Blog</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <article key={post.seed} className="bg-white">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt=""
                className="h-[250px] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="flex items-center gap-1 text-sm text-[#b3b3b3]">
                  {post.date}
                  <span aria-hidden="true">·</span>
                  {post.author}
                  <span aria-hidden="true">·</span>
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.comments}
                </p>
                <h3 className="mt-3 text-[18px] font-medium leading-snug text-black transition-colors hover:text-brand">
                  <a href="#">{post.title}</a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
