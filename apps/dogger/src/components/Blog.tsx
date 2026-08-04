import { CalendarDays } from 'lucide-react'

const posts = [
  {
    title: '5 Things You Need To Know About Dog Massage',
    excerpt:
      'Gentle massage eases stiff joints, improves circulation, and deepens the bond between you and your dog.',
    seed: 'dogger-blog-1',
  },
  {
    title: 'How to Choose the Right Dog Food',
    excerpt:
      'Look at the first five ingredients, match the formula to your dog age and activity, and switch gradually.',
    seed: 'dogger-blog-2',
  },
  {
    title: 'Why Regular Walks Keep Dogs Happy',
    excerpt:
      'Daily walks provide exercise, mental stimulation, and the scents and sights dogs naturally crave.',
    seed: 'dogger-blog-3',
  },
  {
    title: 'Understanding Your Dog Body Language',
    excerpt:
      'A wagging tail, relaxed ears, and soft eyes all carry meaning — learn to read what your dog is saying.',
    seed: 'dogger-blog-4',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Dogger Blog
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
                  April 17, 2019
                </p>
                <h3 className="mt-3 text-base font-bold leading-snug text-black dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
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
