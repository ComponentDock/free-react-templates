import { Heart, MessageCircle } from 'lucide-react'
import { blogPosts } from '../data'

/** "Latest From Our Blog" — four cards with a hover-zoom thumbnail, a
 *  black date chip, a title that turns red on hover, an excerpt and a
 *  Likes/Comments meta row. */
export function Blog() {
  return (
    <section id="blog" className="bg-white py-[120px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-semibold">Latest From Our Blog</h1>
          <p className="leading-relaxed">
            Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="relative overflow-hidden rounded-[10px]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <p className="absolute top-4 left-1/2 w-[115px] -translate-x-1/2 bg-black px-4 py-0.5 text-center text-sm text-white">
                  {post.date}
                </p>
              </div>
              <h4 className="mt-5 text-lg font-semibold transition-colors group-hover:text-brand">
                {post.title}
              </h4>
              <p className="mt-3 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 flex gap-6 text-sm">
                <span className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4 text-brand" aria-hidden="true" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                  {post.comments}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
