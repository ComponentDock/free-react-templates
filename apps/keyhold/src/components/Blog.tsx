import { Calendar, MessageCircle } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const posts = [
  {
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'October 17, 2019',
    image: 'https://picsum.photos/seed/keyhold-17/640/420',
    alt: 'Person writing at a desk with a laptop',
  },
  {
    title: '5 Neighborhood Signals That Prices Are About to Rise',
    date: 'October 12, 2019',
    image: 'https://picsum.photos/seed/keyhold-18/640/420',
    alt: 'Row of houses on a sunny street',
  },
  {
    title: 'First-Time Buyer? Start With These Three Questions',
    date: 'October 8, 2019',
    image: 'https://picsum.photos/seed/keyhold-19/640/420',
    alt: 'Couple reviewing documents with an agent',
  },
  {
    title: 'Rent vs. Buy: A Realistic 2026 Comparison',
    date: 'October 3, 2019',
    image: 'https://picsum.photos/seed/keyhold-20/640/420',
    alt: 'Apartment building with a for rent sign',
  },
] as const

/**
 * Blog — "Recent Blog" strip (source `.blog-entry`): four photo entries with
 * a title and a meta line (date / Admin / comment count).
 */
export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading subheading="Blog" title="Recent Blog" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <a href="#blog" className="block overflow-hidden rounded-[3px]">
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <h3 className="mt-4">
                <a
                  href="#blog"
                  className="font-semibold leading-snug text-ink transition-colors hover:text-brand"
                >
                  {post.title}
                </a>
              </h3>
              <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.date}
                </span>
                <span>Admin</span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />3 Comments
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
