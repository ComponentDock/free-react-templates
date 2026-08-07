import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    date: 'April 28, 2020',
    title: 'The Quiet Beauty of Raw Concrete',
    text: 'How honest materials and careful proportion turn a simple structure into a landmark.',
  },
  {
    date: 'April 28, 2020',
    title: 'Why Natural Light Changes Everything',
    text: 'Daylight shapes mood, energy use, and the way a room is truly experienced.',
  },
  {
    date: 'April 28, 2020',
    title: 'Materials That Age with Grace',
    text: 'Timber, stone, and brass grow more beautiful the longer they are lived with.',
  },
  {
    date: 'April 28, 2020',
    title: 'Small Spaces, Big Ideas',
    text: 'Clever planning makes even the tightest footprint feel generous and calm.',
  },
] as const

export function News() {
  return (
    <section id="news">
      <div className="bg-paper pb-36 pt-16 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-mist dark:text-gray-400">
            Ideas &amp; Publications
          </span>
          <h2 className="mt-2 text-2xl font-bold text-ink dark:text-white">Keep up to date</h2>
        </div>
      </div>

      <div className="mx-auto -mt-28 max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white p-6 shadow-sm dark:bg-gray-950 dark:text-white"
            >
              <p className="text-sm text-mist dark:text-gray-400">{post.date}</p>
              <h3 className="mt-3 text-lg font-bold leading-snug">
                <a href="#news" className="text-ink hover:text-brand dark:text-white">
                  {post.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-300">
                {post.text}
              </p>
              <a
                href="#news"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-brand dark:text-white"
              >
                Read more
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink
            href="#news"
            className="rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            Our Blog Posts
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
