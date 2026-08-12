import { CalendarDays } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    title: 'Taste the delicious foods in Asia',
    date: 'May 14, 2026',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/forno-18/800/500',
    alt: 'Asian dishes served at Forno',
  },
  {
    title: 'Behind the scenes of our pastry kitchen',
    date: 'April 28, 2026',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/forno-19/800/500',
    alt: 'Pastry chef plating a dessert',
  },
  {
    title: 'Wine pairings for a summer menu',
    date: 'April 9, 2026',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/forno-20/800/500',
    alt: 'Wine glasses on a restaurant table',
  },
] as const

export function BlogPosts() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="font-script text-4xl text-primary-500">Blog</span>
          <h2 className="mt-2 text-3xl font-semibold uppercase tracking-wide text-gray-900 sm:text-4xl">
            Recent Posts
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-md bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
                  <CalendarDays className="h-4 w-4 text-primary-500" aria-hidden="true" />
                  {post.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <ButtonLink
                  href="#blog"
                  variant="outline"
                  className="mt-5 h-auto rounded-md px-4 py-2 text-xs font-medium uppercase tracking-wide"
                >
                  Read more
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
