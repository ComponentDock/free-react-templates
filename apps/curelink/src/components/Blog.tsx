import { Calendar, User } from 'lucide-react'

const posts = [
  {
    title: 'Healthy Living Tips for a Better Tomorrow',
    image: 'https://picsum.photos/seed/curelink-blog1/600/400',
    author: 'Dr. Sarah Wilson',
    date: 'Sep 10, 2026',
    excerpt:
      'Discover simple daily habits that can significantly improve your overall health and well-being.',
    tag: 'Health Tips',
  },
  {
    title: 'Understanding Heart Disease Prevention',
    image: 'https://picsum.photos/seed/curelink-blog2/600/400',
    author: 'Dr. Michael Chen',
    date: 'Sep 5, 2026',
    excerpt:
      'Learn about the key risk factors for heart disease and the steps you can take to keep your heart healthy.',
    tag: 'Cardiology',
  },
  {
    title: 'The Importance of Regular Checkups',
    image: 'https://picsum.photos/seed/curelink-blog3/600/400',
    author: 'Dr. Emily Rodriguez',
    date: 'Sep 1, 2026',
    excerpt:
      'Routine medical checkups can detect health issues early. Here is why you should never skip yours.',
    tag: 'General',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-purple-500">From Our Blog</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded bg-primary-400 px-3 py-1 text-xs font-semibold text-white">
                  {post.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-purple-500">{post.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-xs text-smoke">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
