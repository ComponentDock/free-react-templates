import { Calendar, User } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    title: 'How We Built Clean Water Systems in Rural Communities',
    excerpt:
      'Our latest project brought clean drinking water to over 500 families through innovative filtration systems.',
    date: 'Sep 10, 2025',
    author: 'Mercy Team',
    image: 'mercy-blog-1',
  },
  {
    title: 'Volunteer Spotlight: Stories from the Field',
    excerpt:
      'Meet the dedicated volunteers who make our programs possible, and hear their inspiring stories.',
    date: 'Sep 5, 2025',
    author: 'Mercy Team',
    image: 'mercy-blog-2',
  },
  {
    title: 'Education Program Reaches 1,000 Students',
    excerpt:
      'Our education initiative has now reached a milestone of supporting 1,000 students across 15 schools.',
    date: 'Aug 28, 2025',
    author: 'Mercy Team',
    image: 'mercy-blog-3',
  },
  {
    title: 'Annual Charity Gala Raises Record Funds',
    excerpt:
      "This year's charity gala raised over $500,000 to support our global relief and development programs.",
    date: 'Aug 20, 2025',
    author: 'Mercy Team',
    image: 'mercy-blog-4',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16 transition-colors dark:bg-gray-900 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Latest News
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
            From Our Blog
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <div
              key={post.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${post.image}/400/250`}
                alt={post.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.author}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <ButtonLink
                  href="#"
                  className="mt-4 inline-flex rounded bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                >
                  Read More
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
