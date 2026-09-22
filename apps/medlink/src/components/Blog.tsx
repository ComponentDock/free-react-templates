import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Tips for Maintaining a Healthy Heart',
    date: 'Sep 15, 2026',
    image: 'https://picsum.photos/seed/medlink-blog1/600/400',
    excerpt: 'Learn the essential habits that keep your cardiovascular system in top shape.',
  },
  {
    title: 'Understanding Modern Pediatric Care',
    date: 'Sep 12, 2026',
    image: 'https://picsum.photos/seed/medlink-blog2/600/400',
    excerpt: 'A guide to the latest advances in child healthcare and wellness.',
  },
  {
    title: 'The Importance of Regular Checkups',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/medlink-blog3/600/400',
    excerpt: 'Why preventive medicine is the key to a longer, healthier life.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-[#f9f9f9] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#76b900]">
            Latest News
          </p>
          <h2 className="text-3xl font-bold text-[#333333]">From Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <time className="text-xs text-[#666666]">{post.date}</time>
                <h3 className="mt-2 text-lg font-bold text-[#333333]">{post.title}</h3>
                <p className="mt-2 text-sm text-[#666666]">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#76b900] hover:text-[#5a8f00] transition-colors"
                >
                  Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
