import { Calendar } from 'lucide-react'

const posts = [
  {
    seed: 'foyer-b1',
    category: 'Travel / Life Style',
    title: 'Low Cost Advertising',
    blurb:
      'Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.',
    date: '31st January, 2018',
  },
  {
    seed: 'foyer-b2',
    category: 'Interior',
    title: 'Creative Outdoor Ads',
    blurb:
      "It's Classified How To Utilize Free. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: '31st January, 2018',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-brand">Our blog</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Ongoing Exhibitions from the scratch
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/800/400`}
                alt={`${post.title} cover`}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-white/60">
                  {post.blurb}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs text-ink/50 dark:text-white/50">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
