import { Eye, MessageCircle } from 'lucide-react'
import { blog } from '../data'

/** Blog preview (reference `.blog_part`): "Latest News" eyebrow + "We Have
 *  True Story" heading and three cards with category, date, title, and
 *  engagement meta. */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-primary-600">
          {blog.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-[42px] font-bold text-navy-deep">{blog.title}</h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 px-4 md:grid-cols-3 lg:px-8">
        {blog.posts.map(({ category, date, title, comments, views, image }) => (
          <article key={title} className="rounded-sm">
            <img
              src={image}
              alt=""
              width={370}
              height={250}
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="border border-t-0 border-card-border bg-white p-[30px]">
              <a
                href="#blog"
                className="text-sm font-medium uppercase tracking-wider text-gray-muted transition-colors hover:text-primary-600"
              >
                {category}
              </a>
              <p className="mt-1 text-sm text-gray-muted">{date}</p>
              <h3 className="mt-3 font-heading text-[20px] font-semibold capitalize leading-snug text-navy-deep transition-colors hover:text-primary-600">
                <a href="#blog" className="transition-colors hover:text-primary-600">
                  {title}
                </a>
              </h3>
              <ul className="mt-5 flex gap-6 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary-600" aria-hidden="true" />
                  {comments} Comments
                </li>
                <li className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-primary-600" aria-hidden="true" />
                  {views} View
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
