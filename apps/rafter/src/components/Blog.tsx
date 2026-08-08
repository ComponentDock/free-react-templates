import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    category: 'Travel',
    date: '31st January, 2018',
    title: 'Low Cost Advertising',
    image: 'https://picsum.photos/seed/rafter-8/800/500',
  },
  {
    category: 'Travel',
    date: '31st January, 2018',
    title: 'Low Cost Advertising',
    image: 'https://picsum.photos/seed/rafter-9/800/500',
  },
  {
    category: 'Travel',
    date: '31st January, 2018',
    title: 'Low Cost Advertising',
    image: 'https://picsum.photos/seed/rafter-10/800/500',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
            Our blog
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Recent Posts from our blog
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Ideas, guides, and stories from the Rafter studio.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-mist dark:text-gray-400">
                  <span className="font-semibold text-brand">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <time>{post.date}</time>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                  Acres of Diamonds… you&apos;ve read the famous story, or at least had it related
                  to you — a farmer.
                </p>
                <ButtonLink
                  href="#blog"
                  className="mt-5 rounded-none border border-gray-200 bg-paper text-ink hover:border-brand hover:bg-brand hover:text-white"
                >
                  Read Details
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
