import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    category: 'Web Design',
    title: 'Best Tips for Modern Web Design',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum.',
    image: 'https://picsum.photos/seed/talon-blog1/400/250',
  },
  {
    category: 'Development',
    title: 'Building Scalable Applications',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum.',
    image: 'https://picsum.photos/seed/talon-blog2/400/250',
  },
  {
    category: 'Marketing',
    title: 'Digital Marketing Strategies',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum.',
    image: 'https://picsum.photos/seed/talon-blog3/400/250',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Latest Blog
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-md bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                  {post.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink dark:text-gray-100">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                  {post.excerpt}
                </p>
                <ButtonLink
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  Read More
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
