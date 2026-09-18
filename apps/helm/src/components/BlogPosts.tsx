import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    image: 'https://picsum.photos/seed/helm-blog1/600/400',
    date: 'July 17, 2019',
    title: '4 latest technology for future generation',
  },
  {
    image: 'https://picsum.photos/seed/helm-blog2/600/400',
    date: 'July 17, 2019',
    title: '4 latest technology for future generation',
  },
  {
    image: 'https://picsum.photos/seed/helm-blog3/600/400',
    date: 'July 17, 2019',
    title: '4 latest technology for future generation',
  },
  {
    image: 'https://picsum.photos/seed/helm-blog4/600/400',
    date: 'July 17, 2019',
    title: '4 latest technology for future generation',
  },
] as const

export function BlogPosts() {
  return (
    <section id="blog" className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <article key={i} className="overflow-hidden rounded-lg bg-white">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <time className="text-xs text-gray-400">{post.date}</time>
                <h3 className="mt-2 text-base font-bold leading-snug text-ink">{post.title}</h3>
                <ButtonLink
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  Read More
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
