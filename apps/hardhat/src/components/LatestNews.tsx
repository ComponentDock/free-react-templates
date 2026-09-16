import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    title: 'Why Construction Quality Matters in Modern Building',
    category: 'Properties',
    date: '24 Nov',
    image: 'https://picsum.photos/seed/hardhat-blog1/600/400',
  },
  {
    title: 'Latest Trends in Sustainable Construction Materials',
    category: 'Properties',
    date: '24 Nov',
    image: 'https://picsum.photos/seed/hardhat-blog2/600/400',
  },
] as const

export function LatestNews() {
  return (
    <section id="blog" aria-label="Latest News" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative mb-12 text-center">
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl font-bold uppercase tracking-wide text-gray-200 sm:text-8xl select-none">
            Our Blog
          </span>
          <h2 className="relative font-display text-3xl font-bold uppercase tracking-wide text-navy sm:text-4xl">
            Latest News
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center rounded bg-brand text-white">
                  <span className="text-xs font-semibold leading-none">
                    {post.date.split(' ')[0]}
                  </span>
                  <span className="text-[10px] uppercase leading-none">
                    {post.date.split(' ')[1]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {post.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy">{post.title}</h3>
                <ButtonLink
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
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
