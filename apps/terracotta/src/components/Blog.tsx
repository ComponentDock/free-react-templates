import { ButtonLink } from '@free-react-templates/ui'

const posts = [
  {
    title:
      'The estimated size of the North American used test and measurement equipment market was $446.4 million.',
    author: 'John Deo',
    date: 'May 02 2019',
    excerpt:
      'According to the research firm Frost & Sullivan, the estimated size of the North American used test and measurement equipment market was $446.4 million in 2004.',
    alt: 'Modern interior with warm lighting',
  },
  {
    title: 'Rooftop gardens change the way cities breathe, one terrace at a time.',
    author: 'John Deo',
    date: 'May 02 2019',
    excerpt:
      'According to the research firm Frost & Sullivan, all the estimated size of the North American used test and measurement equipment market was $446.4 million.',
    alt: 'Rooftop garden overlooking the city',
  },
  {
    title: 'The quiet craft of timber joinery returns to contemporary facades.',
    author: 'John Deo',
    date: 'May 02 2019',
    excerpt:
      'According to the research firm Frost & Sullivan, all the estimated size of the North American used test and measurement equipment market was $446.4 million.',
    alt: 'Timber facade detail',
  },
  {
    title: 'Small courtyards, big light: how density shapes natural daylight.',
    author: 'John Deo',
    date: 'May 02 2019',
    excerpt:
      'According to the research firm Frost & Sullivan, all the estimated size of the North American used test and measurement equipment market was $446.4 million.',
    alt: 'Sunlit interior courtyard',
  },
  {
    title: 'From sketch to steel: the lifecycle of a landmark tower.',
    author: 'John Deo',
    date: 'May 02 2019',
    excerpt:
      'According to the research firm Frost & Sullivan, all the estimated size of the North American used test and measurement equipment market was $446.4 million.',
    alt: 'Architectural sketch with steel structure',
  },
  {
    title: 'Why material honesty defines timeless interior design.',
    author: 'John Deo',
    date: 'May 02 2019',
    excerpt:
      'According to the research firm Frost & Sullivan, all the estimated size of the North American used test and measurement equipment market was $446.4 million.',
    alt: 'Raw concrete and wood interior',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
          Blog Post
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[5px] border border-black/5 bg-paper dark:border-white/10 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/terracotta-blog-${index + 1}/700/420`}
                alt={post.alt}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-base font-bold uppercase text-brand">
                  {post.author}
                </h3>
                <p className="mt-1 text-xs text-mist dark:text-gray-400">{post.date}</p>
                <h4 className="mt-3 font-display text-base font-bold leading-snug text-ink dark:text-white">
                  {post.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#blog"
            className="rounded-[5px] bg-brand px-8 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
          >
            Next
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
