import { Heart, MessageCircle } from 'lucide-react'
import { blog } from '../data'

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm tracking-wider text-text-light uppercase">
          {blog.heading}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blog.posts.map(({ title, excerpt, date, likes, comments, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-[3px] border border-gray-100"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-text-light">{date}</p>
                <h3 className="mt-2 text-sm font-semibold leading-snug text-text">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-text-light">{excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-text-light">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                    {likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
