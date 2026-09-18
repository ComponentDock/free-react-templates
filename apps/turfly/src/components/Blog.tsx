import { ArrowRight } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/turfly-blog1/400/250',
    date: 'Sep 10, 2026',
    title: 'How to Achieve a Perfect Lawn This Fall',
    excerpt:
      'Learn the essential steps to prepare your lawn for the cooler months ahead with our expert guide.',
  },
  {
    image: 'https://picsum.photos/seed/turfly-blog2/400/250',
    date: 'Sep 5, 2026',
    title: 'Top 5 Benefits of Regular Lawn Aeration',
    excerpt:
      'Discover why aeration is one of the most important treatments for a healthy, thriving lawn.',
  },
  {
    image: 'https://picsum.photos/seed/turfly-blog3/400/250',
    date: 'Aug 28, 2026',
    title: 'Watering Tips for a Drought-Resistant Yard',
    excerpt:
      'Save water and keep your lawn green with these smart watering strategies for dry spells.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-labelledby="blog-heading" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="blog-heading" className="text-center text-3xl font-bold text-ink sm:text-4xl">
          Recent Blog
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Tips, tricks, and insights from our lawn care experts.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <time className="text-xs text-gray-400">{post.date}</time>
                <h3 className="mt-1 text-lg font-bold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
