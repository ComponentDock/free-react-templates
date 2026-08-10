import { Calendar, MessageCircle } from 'lucide-react'
import { posts } from '../data'

export function PostGrid() {
  return (
    <section aria-label="Recent posts">
      <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-14 px-4 pb-8 sm:px-6 lg:grid-cols-2">
        {posts.map((post) => (
          <article key={post.seed} className="group">
            <div className="relative">
              <img
                src={`https://picsum.photos/seed/${post.seed}/800/500`}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="relative z-10 mx-6 -mt-12 bg-white p-6 shadow-[0_10px_30px_rgba(65,80,148,0.1)] sm:mx-8">
              <h3 className="font-display text-lg leading-snug font-medium text-indigo-deep transition-colors group-hover:text-brand">
                <a href="#home">{post.title}</a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] tracking-widest text-muted uppercase">
                <li className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.date}
                </li>
                <li className="flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.comments}
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
