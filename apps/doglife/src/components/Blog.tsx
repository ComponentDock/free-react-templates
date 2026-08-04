import { CalendarDays } from 'lucide-react'

const posts = [
  {
    title: 'How to make first aid for your dog when in the house',
    excerpt:
      'Keep a calm head, check for visible wounds, and have your vet number handy — quick first steps make all the difference.',
    seed: 'doglife-blog-1',
  },
  {
    title: 'Choosing the right food for your growing puppy',
    excerpt:
      'Match the formula to your puppy age and breed size, and switch foods gradually to protect a sensitive stomach.',
    seed: 'doglife-blog-2',
  },
  {
    title: 'Daily walks: the secret to a happy, balanced dog',
    excerpt:
      'Regular walks provide exercise, mental stimulation, and the scents and sights dogs naturally crave.',
    seed: 'doglife-blog-3',
  },
  {
    title: 'Understanding your dog body language',
    excerpt:
      'A wagging tail, relaxed ears, and soft eyes all carry meaning — learn to read what your dog is saying.',
    seed: 'doglife-blog-4',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-3xl font-extrabold text-black dark:text-white">
          Doglife Blog
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
