import { Calendar, User } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/needlecraft-blog1/400/250',
    date: 'Sep 15, 2026',
    author: 'Dr. Lin',
    title: 'Benefits of Regular Acupuncture',
    excerpt:
      'Discover how consistent acupuncture sessions can improve sleep, reduce stress, and boost your immune system.',
  },
  {
    image: 'https://picsum.photos/seed/needlecraft-blog2/400/250',
    date: 'Sep 10, 2026',
    author: 'Dr. Patel',
    title: 'Herbal Remedies for Everyday Wellness',
    excerpt:
      'Explore time-tested herbal treatments that complement modern medicine and support natural healing.',
  },
  {
    image: 'https://picsum.photos/seed/needlecraft-blog3/400/250',
    date: 'Sep 5, 2026',
    author: 'Dr. Kim',
    title: 'Mindfulness and Body Balance',
    excerpt:
      'Learn how mindful breathing and meditation practices enhance the effects of holistic therapies.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand">
          Blog
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-bold text-ink dark:text-white md:text-4xl">
          News &amp; Tips
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map(({ image, date, author, title, excerpt }) => (
            <article
              key={title}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <img src={image} alt={title} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-mist dark:text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {author}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
