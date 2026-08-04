import { CalendarDays } from 'lucide-react'

const posts = [
  {
    title: 'The Best Time To Harvest Organic Strawberries',
    excerpt:
      'Learn how to tell when strawberries are perfectly ripe and ready for the morning basket.',
    seed: 'farmie-news-1',
    author: 'Carlos Bacca',
  },
  {
    title: 'Five Herbs Every Home Garden Should Grow',
    excerpt:
      'Basil, mint, rosemary, thyme, and parsley are easy to grow and endlessly useful in the kitchen.',
    seed: 'farmie-news-2',
    author: 'Peter Crough',
  },
  {
    title: 'How We Keep Our Soil Healthy Year After Year',
    excerpt:
      'Crop rotation, composting, and cover crops are the backbone of our sustainable farming.',
    seed: 'farmie-news-3',
    author: 'Peter Crough',
  },
  {
    title: 'From Pasture To Plate: Our Grass-Fed Beef',
    excerpt:
      'Follow the journey of our cattle from the meadows to the butcher and finally to your table.',
    seed: 'farmie-news-4',
    author: 'Peter Crough',
  },
] as const

export function News() {
  return (
    <section id="news" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          From Our Farm News
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col">
              <img
                src={`https://picsum.photos/seed/${post.seed}/480/320`}
                alt=""
                loading="lazy"
                className="w-full rounded-lg object-cover"
              />
              <div className="mt-5 flex flex-1 flex-col">
                <p className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  Post on 18 Aug 2018 / {post.author}
                </p>
                <h3 className="mt-3 text-base font-bold leading-snug text-black dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#news"
                  className="mt-4 text-sm font-semibold text-brand transition-colors hover:text-black dark:hover:text-white"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
