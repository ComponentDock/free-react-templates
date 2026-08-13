import { Calendar, MessageCircle, User } from 'lucide-react'
import { blogPosts } from '../data'

/**
 * "Recent Blog" band: a heading column with an outlined "View more" link
 * plus three blog cards (cover image, meta row, linked title that turns
 * pink on hover).
 */
export function Blog() {
  return (
    <section id="blog" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <h2 className="font-heading text-3xl font-bold tracking-wide text-ink uppercase">
            Recent Blog
          </h2>
          <p className="mt-6 leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <a
            href="#blog"
            className="mt-6 inline-block border-2 border-brand px-5 pt-4 pb-2.5 text-sm font-bold tracking-wide text-brand uppercase transition-colors hover:bg-brand hover:text-white"
          >
            View more
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={index}>
              <a href="#blog" className="block overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="pt-4">
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                  <li className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.author}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments}
                  </li>
                </ul>
                <h3 className="mt-3 font-heading text-lg font-bold text-ink transition-colors hover:text-brand">
                  <a href="#blog">{post.title}</a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
